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
  const [searchTerm, setSearchTerm] = useState("");
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
        const pokemonPromises = data.results.map(async (p) => {
          const detailsResponse = await fetch(p.url);
          const detailsData = await detailsResponse.json();
          return {
            name: p.name,
            number: detailsData.id,
            spriteUrl: detailsData.sprites.front_default,
          };
        });

        const fetchedPokemon = await Promise.all(pokemonPromises);

        // Update state with fetched data
        setPokemon(fetchedPokemon);
        console.log("Fetched data:", fetchedPokemon);
        setPlaceholderData([]); // Clear placeholder data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

const filteredPokemon = searchTerm
  ? pokemon.filter((item) =>
      item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
  : pokemon;

  // Render Pokémon cards using fetched data
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar setSearchTerm={setSearchTerm} />
      <Box sx={{ bgcolor: "#D3F8E2", pt: "7rem", minHeight: "100vh" }}>
        <Container className="App">
          <Grid container spacing={2}>
            {filteredPokemon.map((pokemon, index) => (
              <Grid item key={index} xs={4}>
                <PokemonCard
                  name={pokemon.name}
                  number={pokemon.number}
                  spriteUrl={pokemon.spriteUrl}
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
