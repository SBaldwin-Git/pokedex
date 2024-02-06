import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import "@fontsource/pixelify-sans";

function PokemonCard({ name, spriteUrl }) {
  const [isDesaturated, setIsDesaturated] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDesaturation = () => {
    setIsDesaturated(!isDesaturated);
  };

  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "2rem",
    filter: isDesaturated ? "grayscale(100%)" : "none",
    cursor: isHovered ? "pointer" : "auto", // Change cursor dynamically
    fontFamily: "'Pixelify Sans', sans-serif", // Set font family
  };

  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Paper
      style={paperStyle}
      onClick={toggleDesaturation} // Toggle desaturation on click
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {spriteUrl && (
        <img
          src={spriteUrl}
          alt={name}
          style={{ height: "14rem", imageRendering: "pixelated" }}
        />
      )}
      <Typography
        variant="h2"
        style={{ fontSize: "2rem", fontFamily: "'Pixelify Sans', sans-serif" }} // Set font family
      >
        {name}
      </Typography>
    </Paper>
  );
}

export default PokemonCard;
