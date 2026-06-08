import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Welcome } from "./Welcome";


describe("Welcome", () => {
  it("renders the name", () => {
    render(<Welcome name="Mario" age={20} />);

    expect(
      screen.getByText("Welcome Mario")
    ).toBeInTheDocument();
  });

  it("renders the age", () => {
    render(<Welcome name="Mario" age={20} />);

    expect(
      screen.getByText(/20/)
    ).toBeInTheDocument();
  });
});