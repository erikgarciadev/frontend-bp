import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL_API } from "../config/constants";
import { Pokemon } from "../interfaces/Pokemon";

export default function useApp() {
  const [pokemons, setPokemons] = useState([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [data, setData] = useState({
    id: undefined,
    name: "",
    image: "",
    attack: 0,
    defense: 0,
  });
  const [search, setSearch] = useState('')

  const filterPokemons = (pokemons : Pokemon[]) => {
    let filteredPokemons = []
    if(search === '') return pokemons

    filteredPokemons = pokemons.filter(pokemon => {
      const  name = pokemon.name.toLowerCase()
        return name.indexOf(search.toLowerCase()) > -1
    })
    return filteredPokemons
  }

  const showCreateForm = () => {
    setData({
      id: undefined,
      name: "",
      image: "",
      attack: 0,
      defense: 0,
    });
    setShowForm(true);
  };

  const showUpdateForm = async (id: number) => {
    await getPokemon(id);
    setShowForm(true);
  };

  const getPokemon = async (id: number) => {
    const res = await fetch(`${BASE_URL_API}/${id}`);
    const data = await res.json();
    setData(data);
  };

  const getPokemons = async () => {
    const res = await axios.get(`${BASE_URL_API}/?idAuthor=1`);
    setPokemons(res.data);
  };

  const deletePokemon = async (id: number) => {
    await fetch(`${BASE_URL_API}/${id}`, {
      method: "DELETE",
    });
    await getPokemons();
  };

  const updatePokemon = async (id: number, data: Pokemon) => {
    try {
      await axios.put(`${BASE_URL_API}/${id}`, {
        ...data,
        idAuthor: 1,
      });
      await getPokemons();
      setShowForm(false);
    } catch (error) {}
  };

  const createPokemon = async (data: Pokemon) => {
    try {
      await axios.post(`${BASE_URL_API}/?idAuthor=1`, {
        ...data,
        hp: 100,
        type: "Pokemon",
        idAuthor: 1,
      });
      await getPokemons();
      setShowForm(false);
    } catch (error) {}
  };

  useEffect(() => {
    getPokemons();
  }, []);


  return {
    pokemons : filterPokemons(pokemons),
    showForm,
    setShowForm,
    deletePokemon,
    createPokemon,
    updatePokemon,
    data,
    showUpdateForm,
    showCreateForm,
    search,
    setSearch
  };
}
