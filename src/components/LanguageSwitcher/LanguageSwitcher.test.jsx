import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import i18n from "../../i18n";
import LanguageSwitcher from "./index";

beforeEach(async () => {
    window.localStorage.clear();
    await i18n.changeLanguage("en");
});

test("switches the active language and persists the choice", async () => {
    render(<LanguageSwitcher />);

    expect(screen.getByRole("button", { name: /en/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /en/i }));
    userEvent.click(await screen.findByRole("option", { name: "RU" }));

    expect(i18n.resolvedLanguage).toBe("ru");
    expect(window.localStorage.getItem("towy_lang")).toBe("ru");
    expect(await screen.findByRole("button", { name: /ru/i })).toBeInTheDocument();
});
