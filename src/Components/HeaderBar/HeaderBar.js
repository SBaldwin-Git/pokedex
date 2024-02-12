import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
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
    padding: "0.5",
  };

  const minWidthForScaling = "1rem";

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

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#232323" }}>
      <Toolbar style={headerStyle}>
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
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
