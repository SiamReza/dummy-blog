import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
      minWidth={"100vw"}
    >
      <CircularProgress size={"12vh"} />
    </Box>
  );
};

export default Loading;
