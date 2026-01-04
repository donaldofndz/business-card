import { fireEvent, render, screen } from "@testing-library/react";

import { ResumeApp } from "./ResumeApp";

describe("ResumeApp", () => {
  it("switches between views from the menu", () => {
    render(<ResumeApp />);

    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /projects/i }));
    expect(screen.getByRole("heading", { name: /selected projects/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /profile/i }));
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });
});
