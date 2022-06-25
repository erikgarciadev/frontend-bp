import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button";
import InputRange from "../InputRange";
import "./styles.css";
import useForm from "./useForm";

const FormPokemon = ({
  handleCancel,
  createPokemon,
  updatePokemon,
  data = {
    id: undefined,
    name: "",
    image: "",
    attack: 0,
    defense: 0,
  },
}: {
  handleCancel: () => void;
  createPokemon: (data: any) => void;
  updatePokemon: (id: number, data: any) => void;
  data?: any;
}) => {
  const { form, handleChange, isDisabledForm, validateForm, errors } =
    useForm(data);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (form.id) {
      const { id, ...restForm } = form;
      updatePokemon(form.id, {
        ...restForm,
        attack: Number(form.attack),
        defense: Number(form.defense),
      });
    } else {
      const { id, ...restForm } = form;
      createPokemon({
        ...restForm,
        attack: Number(form.attack),
        defense: Number(form.defense),
      });
    }
  };

  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "1em 1.5em",
      }}
    >
      <p className="title">{form.id ? "Editar Pokemon" : "Nuevo Pokemon"}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="wrapper-inputs">
            <div>
              <div className="form-control">
                <label>Nombre :</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`input ${errors.name === "" ? "" : "required"}`}
                ></input>
              </div>
              <div className="form-control">
                <label>Imagen :</label>
                <input
                  name="image"
                  value={form.image}
                  className={`input ${errors.image === "" ? "" : "required"}`}
                  placeholder="url"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label>Ataque:</label>
                <InputRange
                  name="attack"
                  value={form.attack}
                  min={0}
                  max={100}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label>Defensa:</label>
                <InputRange
                  name="defense"
                  value={form.defense}
                  min={0}
                  max={100}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="wrapper-buttons">
            <Button icon="save" type="submit" disabled={isDisabledForm()}>
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
