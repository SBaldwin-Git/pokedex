import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/system";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import "@fontsource/press-start-2p";
import Cookies from "js-cookie";

function PokemonCard({ name, spriteUrl, number }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
    padding: "0.5rem",
    paddingBottom: "2rem",
    borderRadius: "2rem",
    filter: isDesaturated ? "grayscale(100%)" : "none",
    cursor: isHovered ? "pointer" : "auto",
    fontFamily: "'Press Start 2P', cursive",
  };

  name = name.charAt(0).toUpperCase() + name.slice(1);

  // Define minimum width for scaling font size
  const minWidthForScaling = "100px";

  const calculateFontSize = (baseSize, scaleFactor, minWidth) => {
    const scaleFactorNumber = parseFloat(scaleFactor);
    const calculatedFontSize = `calc(${baseSize} + ${scaleFactorNumber} * (100vw - ${minWidth}))`;
    console.log("Calculated Font Size:", calculatedFontSize);

    return {
      fontSize: calculatedFontSize,
    };
  };

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
            minWidth: "80%",
            imageRendering: "pixelated",
          }}
        />
      )}
      <Typography
        variant="h2"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          textAlign: isSmallScreen ? "center" : "left",
          padding: isSmallScreen ? "0.5rem" : "0.2rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          ...calculateFontSize("0.25rem", "0.01", minWidthForScaling),
        }}
      >
        #{number} - {name}
      </Typography>
    </Paper>
  );
}

export default PokemonCard;
