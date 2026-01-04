import { render, screen } from "@testing-library/react";

import { ContactCard } from "./ContactCard";

describe("ContactCard", () => {
  it("renders message and email link", () => {
    render(<ContactCard message="Reach out anytime." email="alex@example.com" />);

    expect(screen.getByText("Reach out anytime.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "alex@example.com" })).toHaveAttribute(
      "href",
      "mailto:alex@example.com"
    );
  });
});
