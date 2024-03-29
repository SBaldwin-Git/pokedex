import React from "react";
import { Box, InputBase, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

/**
 * Renders a search bar component.
 * @param {Object} props - The component props.
 * @param {Function} props.setSearchTerm - The function to set the search term.
 * @returns {JSX.Element} The search bar component.
 */

function SearchBar({ setSearchTerm }) {
  // Styling for the search box
  const searchBoxStyle = {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    borderRadius: "4px",
    backgroundColor: alpha("#FBFCF8", 0.1),
  };

  // Styling for the search icon
  const searchIconStyle = {
    marginRight: "8px",
    color: alpha("#FBFCF8", 0.7),
  };

  // Styling for the input base (search input)
  const inputBaseStyle = {
    color: "#FBFCF8",
    width: "100%",
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "20%", marginLeft: "auto" }}>
      <div style={searchBoxStyle}>
        <SearchIcon style={searchIconStyle} />
        <InputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          style={inputBaseStyle}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="search-input"
        />
      </div>
    </Box>
  );
}

export default SearchBar;
