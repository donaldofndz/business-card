import { render, screen } from "@testing-library/react";

import { ResumeHeader } from "./ResumeHeader";

describe("ResumeHeader", () => {
  it("renders name and role", () => {
    render(<ResumeHeader name="Alex Morgan" role="Senior Product Designer" />);

    expect(screen.getByRole("heading", { name: /alex morgan/i })).toBeInTheDocument();
    expect(screen.getByText(/senior product designer/i)).toBeInTheDocument();
  });
});
