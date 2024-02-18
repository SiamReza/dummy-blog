import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  ButtonBase,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { getUserInfo, getUserPosts } from "../api/ApiRequests";
import Navbar from "../components/NavBar";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const UserInfoPage = () => {
  const theme = useTheme();
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo(userId);
        setUserInfo(userInfo);
        const userPosts = await getUserPosts(userId);
        setUserPosts(userPosts.posts || []);
      } catch (error) {
        console.error("Error fetching user info or posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />
      <SearchBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        {userInfo ? (
          <>
            <Avatar
              src={userInfo.image}
              alt={userInfo.username}
              sx={{
                width: 200,
                height: 200,
                zIndex: 1,
                border: "4px solid white",
              }}
            />
            <Paper
              elevation={3}
              sx={{
                mt: -8,
                pt: 10,
                pb: 2,
                px: 2,
                maxWidth: 600,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                color={theme.palette.text.primary}
              >{`${userInfo.firstName} ${userInfo.lastName} ${userInfo.maidenName}`}</Typography>
              <Typography variant="subtitle1" color={theme.palette.accent.main}>
                @{userInfo.username}
              </Typography>
              <Typography variant="body1">{userInfo.email}</Typography>
              <Typography variant="body1">{userInfo.university}</Typography>
            </Paper>
            <Box
              sx={{
                mt: 2,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ maxWidth: 600, width: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  User Posts
                </Typography>
                {userPosts.length > 0 ? (
                  userPosts.map((post) => (
                    <ButtonBase
                      key={post.id}
                      sx={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                      }}
                      onClick={() => handlePostClick(post.id)}
                    >
                      <Paper
                        sx={{ p: 2, mb: 2, "&:hover": { color: "#40A2E3" } }}
                      >
                        <Typography variant="h6">{post.title}</Typography>
                        <Typography variant="body2">
                          Reactions: {post.reactions}
                        </Typography>
                      </Paper>
                    </ButtonBase>
                  ))
                ) : (
                  <Typography>No posts available.</Typography>
                )}
              </Box>
            </Box>
          </>
        ) : (
          <Typography>User not found.</Typography>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default UserInfoPage;
