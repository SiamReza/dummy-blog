import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import PostDetails from "../components/PostDetails";
import RelatedPosts from "../components/RelatedPosts";
import { getSinglePost } from "../api/ApiRequests";
import PostComments from "../components/PostComments";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { useMediaQuery } from '@mui/material';


const SinglePostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const fetchedPost = await getSinglePost(postId);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (isLoading || !post) {
    return <Loading />;
  }

  return (
    <>
      <Grid container spacing={4} mb={8}>
        <Grid item xs={12} md={8}>
          <PostDetails postId={postId} />
          <PostComments postId={postId} />
        </Grid>
        {matches && (
          <Grid item xs={12} md={4}>
            <RelatedPosts tags={post.tags} />
          </Grid>
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default SinglePostPage;
