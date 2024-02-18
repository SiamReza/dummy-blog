import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  CircularProgress,
  Stack,
  useTheme,
  Chip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { getSinglePost, getUserInfo, deletePost } from "../api/ApiRequests";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const PostDetails = ({ postId }) => {
  const theme = useTheme();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [reactions, setReactions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostAndUser = async () => {
      setIsLoading(true);
      try {
        const fetchedPost = await getSinglePost(postId);
        const fetchedUser = await getUserInfo(fetchedPost.userId);
        setPost(fetchedPost);
        setUser(fetchedUser);
        setReactions(fetchedPost.reactions);
      } catch (error) {
        console.error("Error fetching post details or user info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostAndUser();
  }, [postId]);

  const handleReact = () => {
    setReactions(reactions + 1);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!post || !user) {
    return (
      <Typography variant="h6" textAlign="center">
        Post or User not found
      </Typography>
    );
  }

  const handleViewUserInfo = () => {
    navigate(`/users/${user.id}`);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = async () => {
    try {
      const response = await deletePost(postId);
      const message = response.data || "Post deleted successfully";
      setSnackbarMessage(message);
      setOpenSnackbar(true);
      setOpenDialog(false);
      setTimeout(() => navigate(-1), 3000);
    } catch (error) {
      console.error("Error deleting post:", error);
      setSnackbarMessage("Failed to delete post");
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        my: 4,
        p: 3,
        borderRadius: 4,
        boxShadow: "0 1px 20px 0px #6C22A6",
      }}
    >
      <Typography variant="h4" gutterBottom component="div">
        {post.title}
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer" }}
        onClick={handleViewUserInfo}
      >
        <Avatar
          src={user.image}
          alt={user.username}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Typography
          variant="subtitle1"
          sx={{ "&:hover": { color: "#40A2E3" } }}
        >
          {user.username}
        </Typography>
      </Box>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton onClick={handleReact} color="primary">
          <FavoriteIcon />
        </IconButton>
        <Typography>{reactions}</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="start"
        sx={{ mt: 2.5 }}
      >
        <Typography variant="h6" mt={1.5}>
          Tags:
        </Typography>
        {post.tags.map((tag, index) => (
          <Chip
            key={index}
            label={"#" + tag}
            variant="outlined"
            onClick={() => console.log(`Tag: ${tag} clicked`)}
            sx={{
              cursor: "pointer",
              color: theme.palette.accent.main,
              borderColor: theme.palette.primary.main,
              fontSize: "1rem",
              border: "2px solid #6C22A6",
              borderRadius: "10px",
            }}
          />
        ))}
      </Stack>

      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}
        >
          Delete Post
        </Button>
      </Box>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" size="small">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default PostDetails;
