import { render, screen, fireEvent } from "@testing-library/react";
import ZoomedImage from "../components/ZoomedImage";


describe("ZoomableImage Component", () => {
  const imageSrc = "/test-image.jpg";
  const altText = "Test Image";

  it("should render the image", () => {
    render(<ZoomedImage src={imageSrc} alt={altText} />);
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  it("should open the modal when the image is clicked", () => {
    render(<ZoomedImage src={imageSrc} alt={altText} />);
    fireEvent.click(screen.getByAltText(altText));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should close the modal when clicking outside the image", () => {
    render(<ZoomedImage src={imageSrc} alt={altText} />);
    fireEvent.click(screen.getByAltText(altText));
    const modal = screen.getByRole("dialog");
    fireEvent.click(modal);
    expect(modal).not.toBeInTheDocument();
  });
});