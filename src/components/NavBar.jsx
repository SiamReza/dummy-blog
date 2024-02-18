import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggleTheme, mode } = useThemeContext();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Posts", path: "/posts" },
    { label: "Login", path: "/login" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const themeToggleSwitch = (
    <Switch
      checked={mode === "dark"}
      onChange={toggleTheme}
      icon={<WbSunnyIcon />}
      checkedIcon={<NightsStayIcon sx={{ color: "#FB8B24" }} />}
    />
  );

  const drawerList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={() => handleNavigate(item.path)}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
        <ListItem>{themeToggleSwitch}</ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList()}
        </Drawer>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Dummy Blog
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navItems.map((item) => (
            <Button
              color="inherit"
              sx={{ textTransform: "none" }}
              key={item.label}
              onClick={() => handleNavigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
          {themeToggleSwitch}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
