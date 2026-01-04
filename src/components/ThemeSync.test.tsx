import { render } from "@testing-library/react";

import { ThemeSync } from "./ThemeSync";

const createMatchMedia = (matches: boolean) => {
  return jest.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

describe("ThemeSync", () => {
  afterEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("sets dark mode when system prefers dark", () => {
    window.matchMedia = createMatchMedia(true);

    render(<ThemeSync />);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("does not set dark mode when system prefers light", () => {
    window.matchMedia = createMatchMedia(false);

    render(<ThemeSync />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
