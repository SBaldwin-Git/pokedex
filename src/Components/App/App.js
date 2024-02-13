import "./App.css";
import "@fontsource/press-start-2p";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Using Unstable_Grid2, ensure compatibility with the version of MUI
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import PokemonCard from "../PokemonCard/PokemonCard";
import HeaderBar from "../HeaderBar/HeaderBar";

function App() {
  // Create and configure MUI theme
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  // API endpoint for Pokémon data
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";

  // State variables to manage Pokémon data, sprite URLs, loading status, and placeholder data
  const [pokemon, setPokemon] = useState([]);
  const [spriteUrls, setSpriteUrls] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [placeholderData, setPlaceholderData] = useState(
    Array.from({ length: 9 }, (_, index) => ({
      name: `Placeholder ${index + 1}`,
      number: index + 1,
    }))
  );

  // Effect to fetch Pokémon data from the API and simulate additional API calls
  useEffect(() => {
    console.log("Fetching data...");

    const fetchData = async () => {
      try {
        // Simulating API call delay
        const response = await fetch(BASE_URL);
        const data = await response.json();

        // Simulating additional API calls
        const number = data.results.map((p) => p.url);
        await fetchPokemonNumber(number);

        const urls = data.results.map((p) => p.url);
        await fetchSpriteUrls(urls);

        // Update state with fetched data
        setPokemon(data.results);
        setPlaceholderData([]); // Clear placeholder data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to fetch Pokémon numbers based on URLs
  const fetchPokemonNumber = (number) => {
    const pokemonNumberPromises = number.map((number) =>
      fetch(number)
        .then((response) => response.json())
        .then((data) => data.id)
    );

    Promise.all(pokemonNumberPromises)
      .then((pokemonNumber) => setPokemonNumber(pokemonNumber))
      .catch((error) => console.error("Error fetching pokemon number:", error));
  };

  // Function to fetch sprite URLs based on Pokémon URLs
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

  // Render Pokémon cards using fetched data
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Box sx={{ bgcolor: "#D3F8E2", pt: "6rem" }}>
        <Container className="App">
          <Grid container spacing={2}>
            {pokemon.map((pokemon, index) => (
              <Grid item key={index} xs={4}>
                <PokemonCard
                  name={pokemon.name}
                  number={pokemonNumber[index]}
                  spriteUrl={spriteUrls[index]}
                  loading={loading}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
