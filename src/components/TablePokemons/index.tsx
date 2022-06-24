import React from "react";
import Pencil from "../Icon/Pencil";
import Trash from "../Icon/Trash";
import "./styles.css";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
}

const TablePokemons = ({
  pokemons = [
    {
      id: 1,
      name: "prueba",
      attack: 100,
      defense: 20,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png",
    },
  ],
}: {
  pokemons?: Pokemon[];
}) => {
  console.log(pokemons);
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <TrPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </tbody>
    </table>
  );
};

export const TrPokemon = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td>
        <div className="wrapper-center">
          <img
            width={"100px"}
            height={"100px"}
            alt="image pokemon"
            src={pokemon.image}
          />
        </div>
      </td>
      <td>{pokemon.attack}</td>
      <td>{pokemon.defense}</td>
      <td>
        <div
          className="wrapper-center"
        >
          <Pencil fill="#6659EF" fontSize={"20px"} />
          <Trash fill="#6659EF" fontSize={"20px"} />
        </div>
      </td>
    </tr>
  );
};

export default TablePokemons;
