import { fireEvent, render, screen } from "@testing-library/react";

import { Menu } from "./Menu";

describe("Menu", () => {
  it("renders items and handles selection", () => {
    const handleSelect = jest.fn();

    render(
      <Menu
        items={[
          { id: "profile", label: "Profile" },
          { id: "projects", label: "Projects" },
        ]}
        activeId="profile"
        onSelect={handleSelect}
        ariaLabel="Primary navigation"
      />
    );

    expect(screen.getByRole("button", { name: "Profile" })).toHaveAttribute(
      "aria-current",
      "page"
    );

    fireEvent.click(screen.getByRole("button", { name: "Projects" }));
    expect(handleSelect).toHaveBeenCalledWith("projects");
  });
});
