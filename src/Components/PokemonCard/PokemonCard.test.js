import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from './PokemonCard';

describe('PokemonCard', () => {
  const mockProps = {
    name: "Treecko",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    number: 252,
    loading: false,
  };

  it('renders the Pokemon card with correct name and number', () => {
    render(<PokemonCard {...mockProps} />);
    const nameElement = screen.getByText('#252 - Treecko');
    expect(nameElement).toBeInTheDocument();
  });

  it('toggles desaturation when clicked', () => {
    render(<PokemonCard {...mockProps} />);
    const cardElement = screen.getByTestId('pokemon-card');
    fireEvent.click(cardElement);
    console.log("Style after clicking:", cardElement.style.cssText);
    expect(cardElement).toHaveStyle({
      filter: "none",
    });
    fireEvent.click(cardElement);
    console.log("Style after clicking again:", cardElement.style.cssText);
    expect(cardElement).toHaveStyle({
      filter: "grayscale(100%)",
    });
  });

  it('shows loading placeholder when loading is true', () => {
    render(<PokemonCard {...mockProps} loading={true} />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });
});