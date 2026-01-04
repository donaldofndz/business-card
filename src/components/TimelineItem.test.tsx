import { render, screen } from "@testing-library/react";

import { TimelineItem } from "./TimelineItem";

describe("TimelineItem", () => {
  it("renders timeline details", () => {
    render(
      <TimelineItem
        period="2021"
        title="Senior Designer"
        subtitle="Studio"
        description="Led major projects."
      />
    );

    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("Senior Designer")).toBeInTheDocument();
    expect(screen.getByText("Studio")).toBeInTheDocument();
    expect(screen.getByText("Led major projects.")).toBeInTheDocument();
  });
});
