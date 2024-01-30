import React from 'react'
import { Paper } from "@mui/material";

function PokemonCard({ name, spriteUrl }) {
  return (
    <Paper>
      {name}
      {spriteUrl && <img src={spriteUrl} alt={name} />}
    </Paper>
  );
}

export default PokemonCard;