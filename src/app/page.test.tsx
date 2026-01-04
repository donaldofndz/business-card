import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home page", () => {
  it("renders the resume header", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /alex morgan/i })).toBeInTheDocument();
  });
});
