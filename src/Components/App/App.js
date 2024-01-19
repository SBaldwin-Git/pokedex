import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // fetch the data from the API link https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 and store it in a state variable
  // create a function to handle the search input
  // create a function to handle the search button
  // create a function to handle the search by type
  // create a function to handle the search by name
  // create a function to handle the search by id
  // create a function to handle the search by generation

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [generation, setGeneration] = useState("");

  

 


  useEffect(() => {
    console.log("Fetching data...");
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);

  // console log the pokemon state variable
  console.log(pokemon.length > 0 ? pokemon : "Loading...");

  return <div className="App"></div>;
}

export default App;
