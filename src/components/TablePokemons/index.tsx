import React from "react";
import { Pokemon } from "../../interfaces/Pokemon";
import Pencil from "../Icon/Pencil";
import Trash from "../Icon/Trash";
import "./styles.css";


const TablePokemons = ({
  pokemons = [
  ],
  deletePokemon,
  showUpdateForm
}: {
  pokemons?: Pokemon[];
  deletePokemon: (id: number) => void;
  showUpdateForm : (id: number) => void
}) => {
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
          <TrPokemon
            deletePokemon={deletePokemon}
            pokemon={pokemon}
            key={pokemon.id}
            showUpdateForm={showUpdateForm}
          />
        ))}
      </tbody>
    </table>
  );
};

export const TrPokemon = ({
  pokemon,
  deletePokemon,
  showUpdateForm
}: {
  pokemon: Pokemon;
  deletePokemon: (id: number) => void;
  openForm?: () => void;
  showUpdateForm : (id: number) => void
}) => {
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
        <div className="wrapper-center">
          <Pencil onClick={() => showUpdateForm(pokemon.id!)} cursor={"pointer"} fill="#6659EF" fontSize={"20px"} />
          <Trash
            cursor={"pointer"}
            onClick={() => deletePokemon(pokemon.id!)}
            fill="#6659EF"
            fontSize={"20px"}
          />
        </div>
      </td>
    </tr>
  );
};

export default TablePokemons;
