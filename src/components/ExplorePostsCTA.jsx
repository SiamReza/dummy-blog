import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExplorePostsCTA = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/posts");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "background.paper",
        boxShadow: 3,
        m: 2,
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Discover Dummy Posts
      </Typography>
      <Typography variant="body1" textAlign={"center"} sx={{ mb: 2 }}>
        Embark on a journey through a curated selection of posts and
        conversations that encapsulate the vibrant exchange of ideas and
        perspectives. Our platform offers a glimpse into an array of insights,
        from technology trends to lifestyle musings, each post serving as a node
        in the vast network of collective thought. Here, every click unveils
        stories and dialogues waiting to unfold. Step into this virtual space of
        exploration and let curiosity be your guide through the diverse tapestry
        of articles. It's not just about reading posts—it's about experiencing
        the pulse of an active community, engaging with content that informs,
        inspires, and provokes thought. Join us on this adventure and add your
        voice to the global conversation.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleNavigate}>
        Explore Posts
      </Button>
    </Box>
  );
};

export default ExplorePostsCTA;
