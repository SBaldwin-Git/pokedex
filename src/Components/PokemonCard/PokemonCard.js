import React from "react";
import { Paper, Typography } from "@mui/material";
import "@fontsource/concert-one";

function PokemonCard({ name, spriteUrl }) {
  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "2rem",
  };

  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Paper style={paperStyle}>
      {spriteUrl && <img src={spriteUrl} alt={name} />}
      <Typography
        variant="h2"
        style={{ fontFamily: "concert one", fontSize: "3rem" }}
      >
        {name}
      </Typography>
    </Paper>
  );
}

export default PokemonCard;
