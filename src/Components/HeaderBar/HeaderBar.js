import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import pokeballImage from "./my_pokeball_icon.png";
import "@fontsource/press-start-2p";

function HeaderBar() {
  // Styling for the header
  const headerStyle = {
    backgroundColor: "#232323",
    color: "#FBFCF8",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0.5", // Padding value might be intended to be "0.5rem"
  };

  // Define minimum width for scaling font size
  const minWidthForScaling = "1rem";

  // Function to calculate font size based on a base size, scale factor, and minimum width
  const calculateFontSize = (baseSize, scaleFactor, minWidth) => {
    const scaleFactorNumber = parseFloat(scaleFactor);
    const calculatedFontSize = `calc(${baseSize} + ${scaleFactorNumber} * (100vw - ${minWidth}))`;
    console.log("Calculated Font Size:", calculatedFontSize);

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

  // Styling for the search box
  const searchBoxStyle = {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    borderRadius: "4px",
    backgroundColor: alpha("#FBFCF8", 0.1),
  };

  // Styling for the search icon
  const searchIconStyle = {
    marginRight: "8px",
    color: alpha("#FBFCF8", 0.7),
  };

  // Styling for the input base (search input)
  const inputBaseStyle = {
    color: "#FBFCF8",
    width: "100%",
  };

  // Render the app bar with toolbar, logo, title, and search input
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#232323" }}>
      <Toolbar style={headerStyle}>
        {/* Logo */}
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
        {/* Title */}
        <Box>
          <Typography variant="h1" style={headerFontStyle}>
            My Pokédex
          </Typography>
        </Box>
        {/* Search Input */}
        <Box sx={{ flexGrow: 1, maxWidth: "20%", marginLeft: "auto" }}>
          <div style={searchBoxStyle}>
            <SearchIcon style={searchIconStyle} />
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              style={inputBaseStyle}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
