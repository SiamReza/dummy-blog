import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, useTheme, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getPostsComments } from "../api/ApiRequests"; // Adjust import paths as necessary

const PostComments = ({ postId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const fetchedComments = await getPostsComments(postId);
        setComments(fetchedComments.comments);
      } catch (error) {
        console.error("Error fetching post comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography>Loading comments...</Typography>
      </Box>
    );
  }

  if (comments.length === 0) {
    return (
      <Typography variant="subtitle1" textAlign="center" sx={{ mt: 2 }}>
        No comments yet.
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
      <Typography variant="h5" gutterBottom m={2}>
        Comments
      </Typography>
      {comments.map((comment) => (
        <Paper
          key={comment.id}
          sx={{ p: 2, m: 1.5, backgroundColor: theme.palette.background.paper }}
        >
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              color: theme.palette.secondary.main,
              "&:hover": { color: "#40A2E3" },
            }}
            onClick={() => handleUserClick(comment.user.id)}
          >
            {comment.user.username}
          </Typography>
          <Typography variant="body2" sx={{ wordWrap: "break-word", mt: 1 }}>
            {comment.body}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default PostComments;
