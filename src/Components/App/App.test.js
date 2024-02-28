import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders header bar", async () => {
    render(<App />);
    const headerBarElement = screen.getByTestId("header-bar");
    expect(headerBarElement).toBeInTheDocument();
  });

  // test("renders Pokemon cards", async () => {
  //   render(<App />);

  //   // Wait for the loading state to be resolved
  //   await waitFor(
  //     () => {
  //       const loadingElement = screen.queryByTestId("loading");
  //       expect(loadingElement).not.toBeInTheDocument();
  //     },
  //     { timeout: 10000 }
  //   );

  //   const pokemonCardElements = screen.getAllByTestId("pokemon-card");
  //   expect(pokemonCardElements.length).toBeGreaterThan(0);
  // });

  // test("filters Pokemon based on search term", async () => {
  //   render(<App />);
  //   const searchInput = screen.getByTestId("search-input");

  //   // Wait for the loading state to be false
  //   await waitFor(
  //     () => {
  //       const loadingElement = screen.queryByTestId("loading");
  //       expect(loadingElement).not.toBeInTheDocument();
  //     },
  //     { timeout: 10000 }
  //   );

  //   // Get the initial set of Pokemon cards
  //   const initialPokemonCardElements = screen.getAllByTestId("pokemon-card");

  //   // Type a search term
  //   searchInput.value = "treecko";
  //   searchInput.dispatchEvent(new Event("input"));

  //   // Wait for the filtered Pokemon cards to be rendered
  //   await waitFor(() => {
  //     const filteredPokemonCardElements = screen.getAllByTestId("pokemon-card");
  //     expect(filteredPokemonCardElements.length).toBeLessThan(
  //       initialPokemonCardElements.length
  //     );
  //   });
  // });
});
