import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";

import TablePokemons, { TrPokemon } from "..";

describe("Table Pokemons", () => {
  it("should render", () => {
    const { container } = render(<TablePokemons pokemons={[]} />);

    const table = container.querySelector("table");
    const tbody = container.querySelector("tbody");
    const thead = container.querySelector("thead");

    screen.debug(tbody!);
    screen.debug(thead!);

    expect(table).toBeInTheDocument();
    expect(tbody?.children).toHaveLength(0);
  });

  it("should render one tr in tbody", () => {
    const pokemon = {
      id: 1,
      name: "Pokemon Prueba",
      attack: 100,
      defense: 20,
      image: "",
    };
    const { container } = render(<TablePokemons pokemons={[pokemon]} />);

    const tbody = container.querySelector("tbody");
    const trs = tbody?.querySelectorAll('tr')
    const firstTd = tbody?.querySelector("td");

    screen.debug(firstTd!);
    expect(firstTd?.textContent).toBe(pokemon.name)
    expect(trs?.length).toBe(1)
  });
});
