import { useState } from "react";
import Button from "./components/Button";
import FormPokemon from "./components/FormPokemon";
import InputSearch from "./components/InputSearch";
import TablePokemons from "./components/TablePokemons";

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);

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
        <InputSearch onChange={() => {}} name="search" />
        <Button icon="plus" onClick={() => setShowForm(true)}>
          Nuevo
        </Button>
      </div>
      <TablePokemons />
      {showForm && <FormPokemon handleCancel={() => setShowForm(false)} />}
    </div>
  );
}

export default App;
