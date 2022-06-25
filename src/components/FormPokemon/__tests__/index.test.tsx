import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as userEvent from '@testing-library/user-event'
import React from "react";

import FormPokemon from "..";

describe("FormPokemon", () => {
  it("should render", () => {
    const { container } = render(<FormPokemon data={{
        name: '',
        image:'',
        attack: 0,
        defense: 0
    }} updatePokemon={(id:number, data: any) => {}} createPokemon={(data: any) =>{}} handleCancel={() => {}} />);


    expect(container).toBeInTheDocument();
  });

  it("validate title mode create  in FormPokemon", () => {
    const { container } = render(<FormPokemon data={{
        name: '',
        image:'',
        attack: 0,
        defense: 0
    }} updatePokemon={(id:number, data: any) => {}} createPokemon={(data: any) =>{}} handleCancel={() => {}} />);

    const p = container.querySelector('p')

    expect(p!.textContent).toBe('Nuevo Pokemon')
  });

  it("validate title mode update  in FormPokemon", () => {
    const { container } = render(<FormPokemon data={{
        id: 1,
        name: '',
        image:'',
        attack: 0,
        defense: 0
    }} updatePokemon={(id:number, data: any) => {}} createPokemon={(data: any) =>{}} handleCancel={() => {}} />);

    const p = container.querySelector('p')

    expect(p!.textContent).toBe('Editar Pokemon')
  });

  it("validate button save disabled, when name and image is empty",async () => {
    const { container, getByText } = render(<FormPokemon data={{
        id: 1,
        name: '',
        image:'',
        attack: 0,
        defense: 0
    }} updatePokemon={(id:number, data: any) => {}} createPokemon={(data: any) =>{}} handleCancel={() => {}} />);

    
    const button = getByText('Guardar');

    await fireEvent.click(button)
    expect(button!.className).contains('disabled')
  });

  it("validate required input, when click in button save with name  is empty",async () => {
    const { container, getByText } = render(<FormPokemon data={{
        name: '',
        image:'url',
        attack: 0,
        defense: 0
    }} updatePokemon={(id:number, data: any) => {}} createPokemon={(data: any) =>{}} handleCancel={() => {}} />);

    
    const input = container.querySelector("input");
    const button = getByText('Guardar');
    await fireEvent.click(button)
    expect(input!.className).contains('required')
  });

  it("not show FormPokemon, when click in button cancel",async () => {
    const { container, getByText } = render(<FormPokemon data={{
        name: '',
        image:'url',
        attack: 0,
        defense: 0
    }} updatePokemon={(id:number, data: any) => {}} createPokemon={(data: any) =>{}} handleCancel={() => {}} />);

    const button = getByText('Cancelar');
    await fireEvent.click(button)
    expect(container).toBeInTheDocument();

  });

});
