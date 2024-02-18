import React from "react";
import { Box, Typography, IconButton, Tooltip, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        boxShadow: theme.shadows[3],
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2" align="center" gutterBottom>
        Let's Connect and Create Together
      </Typography>
      <Box>
        <Tooltip title="LinkedIn Profile" arrow>
          <IconButton
            aria-label="LinkedIn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/aminur-reza-siam/",
                "_blank"
              )
            }
            sx={{
              mr: 1,
              "&:hover": { transform: "scale(1.1)" },
              transition: "transform 0.3s",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                borderRadius: "10%",
                backgroundColor: "white",
                padding: "0px",
              }}
            >
              <LinkedInIcon sx={{ color: "#0077b5" }} />
            </span>
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub Profile" arrow>
          <IconButton
            aria-label="GitHub"
            onClick={() => window.open("https://github.com/SiamReza", "_blank")}
            sx={{
              "&:hover": { transform: "scale(1.1)" },
              transition: "transform 0.3s",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                borderRadius: "50%",
                backgroundColor: "white",
                padding: "1px",
              }}
            >
              <GitHubIcon sx={{ color: "black" }} />
            </span>
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="caption" align="center" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Created with passion by Aminur Reza Siam
      </Typography>
    </Box>
  );
};

export default Footer;
