import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { sidebarData } from "../utils/data";
import SideNav from "../components/SideNav";

describe("SideNav Component", () => {
  it("should renders the sidebar with logo and all navigation items", () => {
    render(
      <MemoryRouter>
        <SideNav isOpen={true} onClose={() => {}} />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    // Check if all navigation items are rendered
    sidebarData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });

    // Ensure the number of items matches the length of sidebarData
    const navItems = screen.getAllByRole("listitem");
    expect(navItems.length).toBe(sidebarData.length);
  });
});
