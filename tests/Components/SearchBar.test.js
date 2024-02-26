import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../src/Components/SearchBar/SearchBar";

describe("SearchBar", () => {
    test("renders without error", () => {
        render(<SearchBar />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("calls setSearchTerm with the entered value", () => {
        const setSearchTerm = jest.fn();
        render(<SearchBar setSearchTerm={setSearchTerm} />);
        const input = screen.getByRole("textbox");
        const searchButton = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "Treecko" } });
        fireEvent.click(searchButton);

        expect(setSearchTerm).toHaveBeenCalledWith("Treecko");
    });
});
