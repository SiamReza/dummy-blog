import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, ButtonBase } from "@mui/material";
import { searchPosts } from "../api/ApiRequests"; // Adjust import paths as necessary
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
  const query = useQuery().get("query");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const results = await searchPosts(query);
        setPosts(results.posts);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <>
      <Navbar />
      <SearchBar />
      <Box sx={{ display: "flex", justifyContent: "center", m: 4 }}>
        <Box sx={{ maxWidth: 600, width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Search Results for "{query}"
          </Typography>
          {isLoading ? (
            <Loading />
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <ButtonBase
                key={post.id}
                sx={{ display: "block", width: "100%" }}
                onClick={() => handlePostClick(post.id)}
              >
                <Paper
                  sx={{
                    p: 2,
                    mb: 2,
                    width: "100%",
                    "&:hover": { color: "#40A2E3" },
                  }}
                >
                  <Typography variant="h6" align="left">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" align="left">
                    Reactions: {post.reactions}
                  </Typography>
                </Paper>
              </ButtonBase>
            ))
          ) : (
            <Typography>No search result available for "{query}"</Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SearchResultsPage;
