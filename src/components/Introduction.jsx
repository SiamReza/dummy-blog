import React from "react";
import { Box, Typography } from "@mui/material";
import "./Introduction.css";
import bannerVideo from "../assets/banner.webm";

const Introduction = () => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "0 0 15px 15px",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={bannerVideo} type="video/webm" />
      </video>
      <div className="animated-text">
        <Typography variant="h3" component="h1" className="text-slide">
          Welcome to Dummy Blog
        </Typography>
        <Typography variant="h6" component="p" className="text-slide">
          Explore the power of dummy JSON APIs.
        </Typography>
      </div>
    </Box>
  );
};

export default Introduction;
