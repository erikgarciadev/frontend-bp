import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";

import Button from "..";

describe("Button", () => {
  it("should render", () => {
    const { container } = render(<Button icon="plus"> Texto </Button>);


    expect(container).toBeInTheDocument();
  });

  it("validate text in Button", () => {
    const { container } = render(<Button icon="plus">Texto</Button>);


    expect(container.textContent).toBe('Texto')
  });

  it("validate Button disabled", () => {
    const { container } = render(<Button disabled={true} icon="plus">Texto</Button>);

    const button = container.querySelector("button");
    expect(button!.className).toBe('disabled')
  });

});
