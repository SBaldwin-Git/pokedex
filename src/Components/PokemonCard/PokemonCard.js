import React from 'react'
import Paper from '@material-ui/core/Paper';

function PokemonCard({ name, spriteUrl }) {
  return (
    <Paper>
      {name}
      {spriteUrl && <img src={spriteUrl} alt={name} />}
    </Paper>
  );
}

export default PokemonCard;