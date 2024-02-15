import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/system";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import "@fontsource/press-start-2p";
import Cookies from "js-cookie";
import pokeballImage from "./my_pokeball_icon.png";

function PokemonCard({ name, spriteUrl, number, loading }) {
  // Access theme and screen size using MUI hooks
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Generate a unique identifier for each Pokémon card based on the name and number
  const cookieKey = `desaturationState_${name}_${number}`;

  // State to manage desaturation, hover, and image load
  const [isDesaturated, setIsDesaturated] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handler for the image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

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

  // Style for the Pokémon card
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

  // Capitalize the first letter of the Pokémon name
  name = name.charAt(0).toUpperCase() + name.slice(1);

  // Define minimum width for scaling font size
  const minWidthForScaling = "100px";

  // Function to calculate font size based on viewport width
  const calculateFontSize = (baseSize, scaleFactor, minWidth) => {
    const scaleFactorNumber = parseFloat(scaleFactor);
    const calculatedFontSize = `calc(${baseSize} + ${scaleFactorNumber} * (100vw - ${minWidth}))`;

    return {
      fontSize: calculatedFontSize,
    };
  };

  // Return a loading placeholder or the actual Pokémon card
  if (loading) {
    return (
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem",
          borderRadius: "2rem",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        <img
          src={pokeballImage}
          alt="pokeball"
          style={{ width: "50%", filter: "grayscale(100%)" }}
        />
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
          Loading...
        </Typography>
      </Paper>
    );
  }

  // Return the actual Pokémon card with toggleable desaturation and hover effects
  return (
    <Paper
      style={paperStyle}
      onClick={toggleDesaturation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={spriteUrl || pokeballImage}
        alt={name}
        style={{
          height: "auto",
          minWidth: "80%",
          imageRendering: "pixelated",
          opacity: imageLoaded ? 1 : 0, // Apply opacity to control the transition effect
        }}
        onLoad={handleImageLoad} // Attach the load event handler
      />
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
