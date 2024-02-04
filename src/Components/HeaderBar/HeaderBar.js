import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function HeaderBar() {
  // Styling for the header
  const headerStyle = {
    backgroundColor: "#232323",
    color: "#FBFCF8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem 0rem 0.5rem 0.5rem",
  };

  // Styling for the header font
  const headerFontStyle = {
    fontFamily: "Roboto",
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  // Styling for the search bar container
  const Search = styled("div")(({ theme }) => ({
    position: "relative", // Positioning relative to its normal position in the document flow
    borderRadius: theme.shape.borderRadius, // Rounded corners for the container
    backgroundColor: alpha(theme.palette.common.white, 0.15), // Semi-transparent white background
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25), // Darker background on hover
    },
    width: "40%", // Initial width, takes up 40% of the available space
    marginRight: theme.spacing(2), // Added margin to the right
    [theme.breakpoints.up("sm")]: {
      width: "auto", // Adjusts width to fit content on small screens and larger
    },
  }));

  // Styling for the search icon wrapper
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2), // Adds spacing around the search icon
    height: "100%", // Takes up full height of the parent container
    position: "absolute", // Positioned absolutely within the search container
    pointerEvents: "none", // Ensures the wrapper does not capture pointer events
    display: "flex", // Uses flexbox for layout
    alignItems: "center", // Vertically centers the content
    justifyContent: "center", // Horizontally centers the content
  }));

  // Styling for the search input
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit", // Inherits text color from the parent
    width: "100%", // Takes up full width of the container
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0), // Adds padding to the input
      paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Ensures space for the search icon
      transition: theme.transitions.create("width"), // Smooth transition on width change
      [theme.breakpoints.up("sm")]: {
        width: "12ch", // Initial width on small screens
        "&:focus": {
          width: "20ch", // Expanded width on focus
        },
      },
    },
  }));

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#232323" }}>
      <Toolbar style={headerStyle}>
        {/* Left side with menu icon and title */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.2 }}
          >
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
          <Typography variant="h1" style={headerFontStyle}>
            Pokemon
          </Typography>
        </div>
        {/* Right side with search bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
