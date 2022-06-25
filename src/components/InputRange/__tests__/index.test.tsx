import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";

import InputRange from "..";

describe("Input Range", () => {
  it("should render", () => {
    const { container } = render(<InputRange onChange={()=> {}} ></InputRange>);


    expect(container).toBeInTheDocument();
  });

  it("validate max prop in InputRange", () => {
    const { container } = render(<InputRange max={50} onChange={()=> {}}  />);

    const input = container.querySelector("input");
    expect(input?.max).toBe('50')
  });

  it("validate min prop in InputRange", () => {
    const { container } = render(<InputRange min={10} onChange={()=> {}}  />);

    const input = container.querySelector("input");
    expect(input?.min).toBe('10')
  });

});