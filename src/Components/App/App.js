import "./App.css";
import "@fontsource/press-start-2p";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import PokemonCard from "../PokemonCard/PokemonCard";
import HeaderBar from "../HeaderBar/HeaderBar";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";
  const [pokemon, setPokemon] = useState([]);
  const [spriteUrls, setSpriteUrls] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data...");

    // Simulating API call delay
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        // Simulating additional API calls
        const number = data.results.map((p) => p.url);
        await fetchPokemonNumber(number);

        const urls = data.results.map((p) => p.url);
        await fetchSpriteUrls(urls);

        setPokemon(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // Simulate a delay of 2000 milliseconds
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 2000);

    // Cleanup timeout in case component unmounts before the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const fetchPokemonNumber = (number) =>
  {
    const pokemonNumberPromises = number.map((number) =>
      fetch(number)
        .then((response) => response.json())
        .then((data) => data.id)
    );

    Promise.all(pokemonNumberPromises)
      .then((pokemonNumber) => setPokemonNumber(pokemonNumber))
      .catch((error) => console.error("Error fetching pokemon number:", error));
  }

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
      <HeaderBar />
      <Box sx={{ bgcolor: "#D3F8E2", pt: "6rem" }}>
        <Container className="App">
          {/* <Typography variant="h1">Pokemon</Typography> */}
          <Grid container spacing={2}>
            {pokemon.map((pokemon, index) => (
              <Grid item="true" xs={4} key={index}>
                <PokemonCard
                  name={pokemon.name}
                  number={pokemonNumber[index]}
                  spriteUrl={spriteUrls[index]}
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
