import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "./i18n";
import App from "./App";

// The real Map component dynamically imports leaflet/react-leaflet, which
// ship ESM-only builds Jest's default transform can't parse. It's covered
// by browser testing separately, so stub it out here.
jest.mock("./components/Map", () => () => <div data-testid="mock-map" />);

test("renders the home page inside the shared layout", async () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );

    expect((await screen.findAllByText("24/7 TOWY")).length).toBeGreaterThan(0);
    expect(await screen.findByRole("heading", { level: 1 })).toBeInTheDocument();
});

test("redirects unknown routes to the 404 page", async () => {
    render(
        <MemoryRouter initialEntries={["/this-page-does-not-exist"]}>
            <App />
        </MemoryRouter>
    );

    expect(await screen.findByText("404")).toBeInTheDocument();
});
