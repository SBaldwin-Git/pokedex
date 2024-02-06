import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import pokeballImage from "./my_pokeball_icon.png";
import "@fontsource/pixelify-sans";

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

  // Styling for the header font
  const headerFontStyle = {
    fontFamily: "'Pixelify Sans', sans-serif",
    fontSize: "2.5rem",
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
              style={{ height: "4rem" }}
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
