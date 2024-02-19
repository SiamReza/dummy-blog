import React from "react";
import { Box, Typography, Container } from "@mui/material";
import constructionImage from "../assets/uc.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const UnderConstructionPage = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          component="img"
          sx={{
            maxHeight: { xs: "30vh", md: "50vh" },
            maxWidth: "100%",
          }}
          alt="Under Construction"
          src={constructionImage}
        />
        <Typography variant="h4" sx={{ mt: 4 }}>
          Site Under Construction
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          It'll be back soon!
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default UnderConstructionPage;
