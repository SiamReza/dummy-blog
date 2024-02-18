import React, { createContext, useContext, useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: { default: "#121212", paper: "#1E1E1E" },
                primary: { main: "#6C22A6" },
                secondary: { main: "#C499F3" },
                accent: { main: "#C21292" },
                text: { primary: "#E0E0E0" },
              }
            : {
                background: { default: "#FFFFFF", paper: "#FDF4F5" },
                primary: { main: "#6C22A6" },
                secondary: { main: "#7752FE" },
                accent: { main: "#C21292" },
                text: { primary: "#333333" },
              }),
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
