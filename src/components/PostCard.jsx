import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Grow,
  Avatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const PostCard = ({
  title,
  body,
  username,
  userId,
  userPhoto,
  tags,
  reactions: initialReactions,
  id,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [reactions, setReactions] = useState(initialReactions);
  const navigate = useNavigate();

  const shortBody = body.length > 100 ? body.substring(0, 100) + "..." : body;

  const handleReact = () => {
    setReactions(reactions + 1);
  };

  const handleViewUserInfo = () => {
    navigate(`/users/${userId}`);
  };

  const handleViewPost = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "15px",

        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          borderColor: theme.palette.accent.main,
        },
      }}
    >
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="Roboto, sans-serif"
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
            cursor: "pointer",
          }}
          onClick={handleViewUserInfo}
        >
          <Avatar
            src={userPhoto}
            alt={username}
            sx={{ width: 48, height: 48, marginRight: "8px" }}
          />
          <Typography
            color="text.primary"
            sx={{ "&:hover": { color: "#40A2E3" } }}
          >
            {username}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          style={{ marginBottom: "1rem" }}
          fontFamily="Arial, sans-serif"
        >
          {shortBody}
        </Typography>
        <Stack direction="column" spacing={2} alignItems="start">
          <IconButton
            aria-label="reacts"
            onClick={handleReact}
            sx={{
              color: theme.palette.accent.main,
              "&:hover": { backgroundColor: theme.palette.accent.light },
            }}
          >
            <FavoriteIcon />
            <Grow in={true}>
              <Typography sx={{ ml: 0.5 }}>{reactions}</Typography>
            </Grow>
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={handleViewPost}
            sx={{
              "&:hover": { backgroundColor: theme.palette.primary.dark },
            }}
          >
            See Full Post
          </Button>
        </Stack>
        <Box sx={{ mt: theme.spacing(10), width: "100%" }}>
          <Stack
            direction={matches ? "column" : "row"}
            spacing={1}
            justifyContent="start"
            alignItems={matches ? "start" : "center"}
            sx={{ flexWrap: "wrap" }}
          >
            {tags.map((tag, index) => (
              <Chip
                key={index}
                margin={1}
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
