import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import pokeballImage from "./my_pokeball_icon.png";
import "@fontsource/press-start-2p";

/**
 * Renders the header bar component.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.setSearchTerm - The function to set the search term.
 * @returns {JSX.Element} The rendered header bar component.
 */

function HeaderBar({ setSearchTerm}) {
  // Styling for the header
  const headerStyle = {
    backgroundColor: "#232323",
    color: "#FBFCF8",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0.5rem",
  };

  // Define minimum width for scaling font size
  const minWidthForScaling = "1rem";

  // Function to calculate font size based on a base size, scale factor, and minimum width
  const calculateFontSize = (baseSize, scaleFactor, minWidth) => {
    const scaleFactorNumber = parseFloat(scaleFactor);
    const calculatedFontSize = `calc(${baseSize} + ${scaleFactorNumber} * (100vw - ${minWidth}))`;

    return {
      fontSize: calculatedFontSize,
    };
  };

  // Styling for the header font
  const headerFontStyle = {
    fontFamily: "'Press Start 2P', cursive",
    ...calculateFontSize("0.7rem", "0.02", minWidthForScaling),
    fontWeight: "bold",
    marginLeft: "1rem",
  };

  // Render the app bar with toolbar, logo, title, and search input
  return (
    <AppBar role="header" position="fixed" style={{ backgroundColor: "#232323" }}>
      <Toolbar role="toolbar" style={headerStyle}>
        <Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.2 }}
          >
            <img
              src={pokeballImage}
              alt="pokeball-icon"
              style={{ height: "4rem", imageRendering: "pixelated" }}
            />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="h1" style={headerFontStyle}>
            My Pokédex
          </Typography>
        </Box>
        <SearchBar setSearchTerm={setSearchTerm} />
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
