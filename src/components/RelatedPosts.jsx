import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Paper, Stack } from "@mui/material";
import { searchPosts } from "../api/ApiRequests";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const RelatedPosts = ({ tags }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (tags.length > 0) {
        setIsLoading(true);
        let aggregatedPosts = [];
        try {
          for (const tag of tags) {
            const fetchedRelatedPosts = await searchPosts(tag);
            aggregatedPosts = [
              ...aggregatedPosts,
              ...fetchedRelatedPosts.posts,
            ];
          }
          // Remove duplicates based on post ID, if necessary
          aggregatedPosts = [
            ...new Map(aggregatedPosts.map((post) => [post.id, post])).values(),
          ];
          setRelatedPosts(aggregatedPosts);
        } catch (error) {
          console.error("Error fetching related posts:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchRelatedPosts();
  }, [tags]);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (relatedPosts.length === 0) {
    return (
      <Typography variant="subtitle1" m={3}>
        No related posts found.
      </Typography>
    );
  }

  return (
    <Box sx={{ m: 4, maxWidth: 300 }}>
      <Typography variant="h6" gutterBottom>
        Related Posts
      </Typography>
      <Stack spacing={2}>
        {relatedPosts.slice(0, 10).map((post) => (
          <Paper
            key={post.id}
            sx={{ p: 2, cursor: "pointer" }}
            onClick={() => handlePostClick(post.id)}
          >
            <Typography
              variant="subtitle2"
              sx={{ "&:hover": { color: "#40A2E3" } }}
            >
              {post.title}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default RelatedPosts;
