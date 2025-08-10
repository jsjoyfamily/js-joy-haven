import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Mock component for testing
const TestComponent = () => (
  <div>
    <h1>Joy Family Daycare</h1>
    <p>Welcome to our daycare website</p>
  </div>
);

describe("Example Tests", () => {
  it("should pass a basic test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should render a component", () => {
    render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>,
    );

    expect(screen.getByText("Joy Family Daycare")).toBeInTheDocument();
    expect(
      screen.getByText("Welcome to our daycare website"),
    ).toBeInTheDocument();
  });

  it("should test mathematical operations", () => {
    const add = (a: number, b: number) => a + b;
    const multiply = (a: number, b: number) => a * b;

    expect(add(2, 3)).toBe(5);
    expect(multiply(4, 5)).toBe(20);
  });
});
