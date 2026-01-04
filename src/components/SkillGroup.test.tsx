import { render, screen } from "@testing-library/react";

import { SkillGroup } from "./SkillGroup";

describe("SkillGroup", () => {
  it("renders skill group items", () => {
    render(<SkillGroup title="Design" items={["Research", "Prototyping"]} />);

    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
  });
});
