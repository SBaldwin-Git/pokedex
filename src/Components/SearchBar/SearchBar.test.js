import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders search bar component", () => {
  render(<SearchBar setSearchTerm={() => {}} />);
  
  // Assert that the search bar component is rendered
  const searchBarElement = screen.getByPlaceholderText("Search...");
  expect(searchBarElement).toBeInTheDocument();
});

test("calls setSearchTerm function on input change", () => {
  const setSearchTermMock = jest.fn();
  render(<SearchBar setSearchTerm={setSearchTermMock} />);
  
  // Simulate user input
  const searchInput = screen.getByPlaceholderText("Search...");
  fireEvent.change(searchInput, { target: { value: "treecko" } });
  
  // Assert that setSearchTerm function is called with the correct value
  expect(setSearchTermMock).toHaveBeenCalledWith("treecko");
});