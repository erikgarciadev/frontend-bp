import React ,{ ChangeEvent } from "react";
import Button from "./components/Button";
import FormPokemon from "./components/FormPokemon";
import InputSearch from "./components/InputSearch";
import TablePokemons from "./components/TablePokemons";
import useApp from "./hooks/useApp";

function App() {
  const { pokemons, showForm, setShowForm ,deletePokemon, createPokemon, updatePokemon, showUpdateForm , data, showCreateForm, search, setSearch} = useApp();
  return (
    <div
      className="App"
      style={{
        padding: "1em",
      }}
    >
      <h3>Listado de Pokemon</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <InputSearch value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} name="search" />
        <Button icon="plus" onClick={showCreateForm}>
          Nuevo
        </Button>
      </div>
      <TablePokemons showUpdateForm={showUpdateForm}deletePokemon={deletePokemon} pokemons={pokemons} />
      {showForm && <FormPokemon createPokemon={createPokemon} updatePokemon={updatePokemon} handleCancel={() => setShowForm(false)} data={data} />}
    </div>
  );
}

export default App;
