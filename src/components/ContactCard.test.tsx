import { render, screen } from "@testing-library/react";

import { ContactCard } from "./ContactCard";

describe("ContactCard", () => {
  it("renders message, email link, and LinkedIn link", () => {
    render(
      <ContactCard
        message="Reach out anytime."
        email="alex@example.com"
        linkedInLabel="LinkedIn"
        linkedInUrl="https://www.linkedin.com/in/alex-dev/"
      />
    );

    expect(screen.getByText("Reach out anytime.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "alex@example.com" })).toHaveAttribute(
      "href",
      "mailto:alex@example.com"
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/alex-dev/"
    );
  });
});
