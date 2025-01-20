import { render, screen, fireEvent } from "@testing-library/react";
import BookmarkButton from "../components/BookmarkButton";

describe("BookmarkButton Component", () => {
  it("should render the button with initial state", () => {
    render(<BookmarkButton />);
    
    // Check initial button rendering
    const button = screen.getByRole("button", { name: /add bookmark/i });
    expect(button).toBeInTheDocument();

    // Check if the bookmark icon is initially white
    const bookmarkIcon = screen.getByTestId("bookmark-icon");
    expect(bookmarkIcon).toHaveClass("fill-white");
  });

  it("should toggle bookmark state on button click", () => {
    render(<BookmarkButton />);
    
    const button = screen.getByRole("button", { name: /add bookmark/i });

    // Click to add bookmark
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /remove bookmark/i })).toBeInTheDocument();
    expect(screen.getByTestId("bookmark-icon")).toHaveClass("fill-teal-500");

    // Click again to remove bookmark
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /add bookmark/i })).toBeInTheDocument();
    expect(screen.getByTestId("bookmark-icon")).toHaveClass("fill-white");
  });

  it("should toggle the bookmark multiple times correctly", () => {
    render(<BookmarkButton />);
    
    const button = screen.getByRole("button", { name: /add bookmark/i });

    fireEvent.click(button);  // 1st click (add bookmark)
    expect(screen.getByRole("button", { name: /remove bookmark/i })).toBeInTheDocument();

    fireEvent.click(button);  // 2nd click (remove bookmark)
    expect(screen.getByRole("button", { name: /add bookmark/i })).toBeInTheDocument();

    fireEvent.click(button);  // 3rd click (add bookmark)
    expect(screen.getByRole("button", { name: /remove bookmark/i })).toBeInTheDocument();
  });
});
