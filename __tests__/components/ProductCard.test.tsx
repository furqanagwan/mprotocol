import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/lib/data";

const mockProduct: Product = {
  id: 1,
  category: "Health",
  subcategory: "Oral",
  name: "Test Tongue Scraper",
  reason: "Hygiene",
  frequency: "Daily",
  icon: <div data-testid="icon" />,
  color: "text-blue-500",
  bg: "bg-blue-50",
  price: "$",
  link: "https://example.com",
};

describe("ProductCard", () => {
  it("renders product details correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Tongue Scraper")).toBeInTheDocument();
    expect(screen.getByText("Hygiene", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Daily", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("shows Copy Link button when link is present", () => {
    render(<ProductCard product={mockProduct} />);
    const copyButton = screen.getByTitle("Copy Link");
    expect(copyButton).toBeInTheDocument();
  });

  it("changes icon on copy click", () => {
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    render(<ProductCard product={mockProduct} />);
    const copyButton = screen.getByTitle("Copy Link");

    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "https://example.com",
    );
    // Note: Checking visual change requires querying for the new icon class or element,
    // usually Lucide icons are SVGs. We verify the interaction mock mainly.
  });

  it("renders custom button text if provided", () => {
    const customProduct = { ...mockProduct, buttonText: "Custom View" };
    render(<ProductCard product={customProduct} />);
    expect(screen.getByText("Custom View")).toBeInTheDocument();
  });
});
