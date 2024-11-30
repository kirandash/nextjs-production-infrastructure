import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import UnitTestingJest01 from "./page";

// RSC: React Server Component
describe("UnitTestingJest01", () => {
  it("renders without crashing", () => {
    render(<UnitTestingJest01 />);
    const textElement = screen.getByText(/Vitamin Protein/i);
    expect(textElement).toBeDefined();
  });
});
