import React from "react";
import { Paper } from "@mui/material";
import '@fontsource/concert-one';

function PokemonCard({ name, spriteUrl }) {
  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Paper style={paperStyle}>
      {spriteUrl && <img src={spriteUrl} alt={name} />}
      <h2 style={{fontFamily:"concert one", fontSize:"3rem"}}>{name}</h2>
    </Paper>
  );
}

export default PokemonCard;
