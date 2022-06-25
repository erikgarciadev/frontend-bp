import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";

import App from "../App";

describe("App", () => {
  it("should render", () => {
    const { container } = render(<App />);


    expect(container).toBeInTheDocument();
  });

  it("open form", async () => {
    const { container, getByText } = render(<App />);

    const buttonNew = getByText('Nuevo')
    await fireEvent.click(buttonNew)
    // screen.debug(container)

    const form = container.querySelector('form')
    expect(form).toBeInTheDocument();
  });

  it("cancel form", async () => {
    const { container, getByText } = render(<App />);

    const buttonNew = getByText('Nuevo')
    await fireEvent.click(buttonNew)
    // screen.debug(container)

    const form = container.querySelector('form')
    expect(form).toBeInTheDocument();

    const buttonCancel = getByText('Cancelar')
    await fireEvent.click(buttonCancel)
    expect(form).not.toBeInTheDocument();
  });

});
