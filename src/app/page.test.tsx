import { render, screen } from "@testing-library/react";

import { getLocaleContent } from "@/content";
import { DEFAULT_LOCALE } from "@/i18n/config";

import LocalePage from "./[locale]/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: jest.fn() }),
  usePathname: () => "/en",
}));

describe("Locale page", () => {
  it("renders the localized header", async () => {
    const content = getLocaleContent(DEFAULT_LOCALE);

    const element = await LocalePage({ params: Promise.resolve({ locale: DEFAULT_LOCALE }) });
    render(element);

    expect(screen.getByRole("heading", { name: content.header.name })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: content.header.role })
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue(DEFAULT_LOCALE);
  });
});
