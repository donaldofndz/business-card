import { render, screen } from "@testing-library/react";

import { BlogItem } from "./BlogItem";

describe("BlogItem", () => {
  it("renders title and date", () => {
    render(<BlogItem title="Design Systems" date="April 12, 2024" />);

    expect(screen.getByText("Design Systems")).toBeInTheDocument();
    expect(screen.getByText("April 12, 2024")).toBeInTheDocument();
  });
});
