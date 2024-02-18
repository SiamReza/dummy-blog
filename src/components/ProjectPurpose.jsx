import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import purposeImage from "../assets/purpose.png";

const ProjectPurpose = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        px: 3,
        py: 3,
        backgroundColor: "background.paper",
        borderRadius: 4,
        m: 2,
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Why "Dummy Blog"?
          </Typography>
          <Typography variant="body1">
            "Dummy Blog" is a demonstration of innovative frontend development
            using React and Material UI, designed to showcase the practical
            application of API data fetching and presentation. It's a playground
            for testing and illustrating how social media platforms can leverage
            the power of dummy data to simulate real-world scenarios. This
            project is a stepping stone in my journey as an intern developer in
            Acterio, highlighting my ability to create responsive and dynamic
            web applications.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "100%",
              borderRadius: 4,
              boxShadow: 3,
            }}
            alt="Purposeful work"
            src={purposeImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectPurpose;
