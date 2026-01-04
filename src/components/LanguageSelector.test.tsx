import { fireEvent, render, screen } from "@testing-library/react";

import { LanguageSelector } from "./LanguageSelector";

const replace = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace }),
  usePathname: () => "/en",
}));

describe("LanguageSelector", () => {
  it("renders options and switches locale", () => {
    render(
      <LanguageSelector
        label="Language"
        currentLocale="en"
        options={[
          { locale: "en", label: "English" },
          { locale: "es", label: "Español" },
        ]}
      />
    );

    expect(screen.getByRole("combobox")).toHaveValue("en");

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "es" } });
    expect(replace).toHaveBeenCalledWith("/es");
  });
});
