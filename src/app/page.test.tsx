import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home page", () => {
  it("renders Hello World", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /hello world/i })).toBeInTheDocument();
  });
});
