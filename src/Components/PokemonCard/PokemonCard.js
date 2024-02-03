import React from "react";
import { Paper } from "@mui/material";

function PokemonCard({ name, spriteUrl }) {
  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Paper style={paperStyle}>
      {spriteUrl && <img src={spriteUrl} alt={name} />}
      <h2>{name}</h2>
    </Paper>
  );
}

export default PokemonCard;
