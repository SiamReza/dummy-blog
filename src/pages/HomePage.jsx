import React from "react";
import Introduction from "../components/Introduction";
import ExplorePostsCTA from "../components/ExplorePostsCTA";
import ProjectPurpose from "../components/ProjectPurpose";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <ExplorePostsCTA />
      <ProjectPurpose />
      <Footer />
    </>
  );
};

export default HomePage;
