import { render, screen } from "@testing-library/react";

import { Section } from "./Section";

describe("Section", () => {
  it("renders title and content", () => {
    render(
      <Section title="About">
        <p>Summary</p>
      </Section>
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Summary")).toBeInTheDocument();
  });
});
