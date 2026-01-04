import { fireEvent, render, screen } from "@testing-library/react";

import { getLocaleContent, languageOptions } from "@/content";
import { DEFAULT_LOCALE } from "@/i18n/config";

import { ResumeApp } from "./ResumeApp";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/en",
}));

describe("ResumeApp", () => {
  it("switches between views from the menu", () => {
    const content = getLocaleContent(DEFAULT_LOCALE);
    render(
      <ResumeApp content={content} languageOptions={languageOptions} locale={DEFAULT_LOCALE} />
    );

    expect(
      screen.getByRole("heading", { name: content.sections.about })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: content.nav.projects }));
    expect(
      screen.getByRole("heading", { name: content.sections.projects })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: content.nav.profile }));
    expect(
      screen.getByRole("heading", { name: content.sections.about })
    ).toBeInTheDocument();
  });

  it("renders the current year in the footer", () => {
    const content = getLocaleContent(DEFAULT_LOCALE);
    render(
      <ResumeApp content={content} languageOptions={languageOptions} locale={DEFAULT_LOCALE} />
    );

    const year = new Date().getFullYear();
    expect(
      screen.getByText(content.footer.copyrightTemplate.replace("{{year}}", String(year)))
    ).toBeInTheDocument();
  });
});
