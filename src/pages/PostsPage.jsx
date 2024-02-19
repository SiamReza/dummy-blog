import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Pagination, Stack } from "@mui/material";
import PostCard from "../components/PostCard";
import { getAllPosts, getUserInfo } from "../api/ApiRequests";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      setIsLoading(true);
      const skip = (currentPage - 1) * postsPerPage;
      try {
        const { posts, total } = await getAllPosts(postsPerPage, skip);
        const userInfos = await Promise.all(
          posts.map((post) => getUserInfo(post.userId))
        );
        const postsWithUserDetails = posts.map((post, index) => ({
          ...post,
          user: userInfos[index],
        }));
        setPosts(postsWithUserDetails);
        setTotalPosts(total);
      } catch (error) {
        console.error("Failed to fetch posts or user info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostsAndUsers();
  }, [currentPage]);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SearchBar />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ marginTop: "2rem", textAlign: "center" }}
        >
          Posts
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4} lg={4}>
              <PostCard
                {...post}
                username={post.user.username}
                userPhoto={post.user.image}
              />
            </Grid>
          ))}
        </Grid>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom="2rem"
        >
          <Pagination
            count={Math.ceil(totalPosts / postsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            shape="rounded"
            siblingCount={0}
            boundaryCount={2}
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default PostPage;
