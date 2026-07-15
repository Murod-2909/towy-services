import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import i18n from "../../../i18n";
import Header from "./index";

beforeEach(async () => {
    await i18n.changeLanguage("en");
});

test("renders the brand name and primary navigation links", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Header />
        </MemoryRouter>
    );

    expect(screen.getByText("24/7 TOWY")).toBeInTheDocument();

    expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute("href", "/about");
    expect(screen.getAllByRole("link", { name: "Services" })[0]).toHaveAttribute("href", "/services");
    expect(screen.getAllByRole("link", { name: "Contacts" })[0]).toHaveAttribute("href", "/contacts");
});
