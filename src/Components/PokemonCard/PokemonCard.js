import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import "@fontsource/press-start-2p";
import Cookies from "js-cookie";

function PokemonCard({ name, spriteUrl, number }) {
  // Generate a unique identifier for each Pokémon card based on the name and number
  const cookieKey = `desaturationState_${name}_${number}`;

  const [isDesaturated, setIsDesaturated] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Function to toggle desaturation and save the state in a cookie
  const toggleDesaturation = () => {
    const newDesaturationState = !isDesaturated;
    setIsDesaturated(newDesaturationState);

    // Save the desaturation state in a cookie with the unique key
    Cookies.set(cookieKey, newDesaturationState, {
      expires: 7, // expires in 7 days
      sameSite: "None", // Set SameSite attribute to None
      secure: true, // Set Secure attribute
    });
  };

  // Effect to load the desaturation state from a cookie when the component mounts
  useEffect(() => {
    // Load the desaturation state from a cookie with the unique key
    const desaturationState = Cookies.get(cookieKey);

    // Check if desaturation state is present and update the state
    if (desaturationState !== undefined) {
      setIsDesaturated(desaturationState === "true");
    }
  }, [cookieKey]); // Add cookieKey as a dependency

  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "2rem",
    filter: isDesaturated ? "grayscale(100%)" : "none",
    cursor: isHovered ? "pointer" : "auto",
    fontFamily: "'Press Start 2P', cursive",
  };

  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Paper
      style={paperStyle}
      onClick={toggleDesaturation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {spriteUrl && (
        <img
          src={spriteUrl}
          alt={name}
          style={{
            height: "auto",
            maxWidth: "100%",
            imageRendering: "pixelated",
          }}
        />
      )}
      <Typography
        variant="h2"
        style={{ fontSize: "1.2rem", fontFamily: "'Press Start 2P', cursive" }}
      >
        #{number} - {name}
      </Typography>
    </Paper>
  );
}

export default PokemonCard;
