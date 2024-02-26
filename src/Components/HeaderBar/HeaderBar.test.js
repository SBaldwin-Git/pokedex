import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderBar from "./HeaderBar";

describe("HeaderBar", () => {
test("renders Typography with correct font style", () => {
  render(<HeaderBar />);
  const typographyElement = screen.getByText("My Pokédex");
  const expectedFontStyle = {
    fontFamily: "'Press Start 2P', cursive",
    fontWeight: "bold",
    marginLeft: "1rem",
  };
  expect(typographyElement).toHaveStyle(expectedFontStyle);
});


  test("renders with correct background color", () => {
    render(<HeaderBar />);
    const headerElement = screen.getByRole("header");
    const expectedBackgroundColor = "rgb(35, 35, 35)";
    expect(headerElement).toHaveStyle({
      backgroundColor: expectedBackgroundColor,
    });
  });

  test("renders with correct font size", () => {
    render(<HeaderBar />);
    const headerElement = screen.getByRole("header");
    const expectedFontSize = "calc(0.7rem + 0.02 * (100vw - 1rem))";
    expect(headerElement).toHaveStyle({ fontSize: expectedFontSize });
  });

  test("renders with correct padding", () => {
    render(<HeaderBar />);
    const headerElement = screen.getByRole("toolbar");
    const expectedPadding = "0.5rem";
    expect(headerElement).toHaveStyle({ padding: expectedPadding });
  });
});
