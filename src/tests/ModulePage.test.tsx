import { render, screen, fireEvent } from "@testing-library/react";
import ModulePage from "../pages/ModulePage";
import { MemoryRouter } from "react-router-dom";

describe("Mobile Menu", () => {
  it("should show the menu button on mobile screens", () => {
    render(
      <MemoryRouter>
        <ModulePage />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("should open the side nav when the menu button is clicked", () => {
    render(
      <MemoryRouter>
        <ModulePage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should close the menu when clicking the close button", () => {
    render(
      <MemoryRouter>
        <ModulePage />
      </MemoryRouter>
    );

    // Open the menu
    fireEvent.click(screen.getByLabelText("Open menu"));

    // Close the menu
    fireEvent.click(screen.getByText("✕"));

    // Instead of checking if it's removed, check if it has a hidden class
    expect(screen.getByRole("navigation")).toHaveClass("-translate-x-full");
  });
});
