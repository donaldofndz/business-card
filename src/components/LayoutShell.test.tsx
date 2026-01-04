import { render, screen } from "@testing-library/react";

import { LayoutShell } from "./LayoutShell";

describe("LayoutShell", () => {
  it("renders children and footer", () => {
    render(
      <LayoutShell footerText="Footer">
        <div>Content</div>
      </LayoutShell>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
