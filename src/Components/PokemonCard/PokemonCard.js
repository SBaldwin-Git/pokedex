import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import "@fontsource/press-start-2p";

function PokemonCard({ name, spriteUrl, number}) {
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
    fontFamily: "'Press Start 2P', cursive", // Set font family
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
        style={{ fontSize: "1.2rem", fontFamily: "'Press Start 2P', cursive" }} // Set font family
      >
        #{number} - {name}
      </Typography>
    </Paper>
  );
}

export default PokemonCard;
