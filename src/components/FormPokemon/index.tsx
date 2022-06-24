import React, { FormEvent } from "react";
import Button from "../Button";
import InputRange from "../InputRange";
import "./styles.css";

const FormPokemon = ({
  isEdit = false,
  handleCancel,
}: {
  isEdit?: boolean;
  handleCancel: () => void;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("prueba");
  };
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "1em 1.5em",
      }}
    >
      <p className="title"> {isEdit ? "Editar Pokemon" : "Nuevo Pokemon"}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form>
          <div className="wrapper-inputs">
            <div>
              <div className="form-control">
                <label>Nombre :</label>
                <input className="input"></input>
              </div>
              <div className="form-control">
                <label>Imagen :</label>
                <input className="input required" placeholder="url"></input>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label>Ataque:</label>
                <InputRange min={0} max={100} onChange={() => {}} />
              </div>
              <div className="form-control">
                <label>Defensa:</label>
                <InputRange min={0} max={100} onChange={() => {}} />
              </div>
            </div>
          </div>

          <div className="wrapper-buttons">
            <Button icon="save" type="submit" disabled>
              Guardar
            </Button>
            <Button icon="close" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPokemon;
