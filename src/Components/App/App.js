import "./App.css";
import { useState, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";
  const [pokemon, setPokemon] = useState([]);
  const [spriteUrls, setSpriteUrls] = useState([]);

  

 


  useEffect(() => {
    console.log("Fetching data...");
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);

        // Extract sprite URLs and set them in the state
        const urls = data.results.map((p) => p.url);
        fetchSpriteUrls(urls);
      });
  }, []);

  // Function to fetch sprite URLs
  const fetchSpriteUrls = (urls) => {
    const spritePromises = urls.map((url) =>
      fetch(url)
        .then((response) => response.json())
        .then((data) => data.sprites.front_default)
    );

    Promise.all(spritePromises)
      .then((spriteUrls) => setSpriteUrls(spriteUrls))
      .catch((error) => console.error("Error fetching sprite URLs:", error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <Typography variant="h1">Pokemon</Typography>
        <Grid container spacing={2}>
          {pokemon.map((pokemon, index) => (
            <Grid item xs={6} key={index}>
              {/* Pokemon Name */}
              <Paper>
                {pokemon.name}
                {/* Pokemon Sprite */}
                {spriteUrls.length > 0 && (
                  <img src={spriteUrls[index]} alt={pokemon.name} />
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
