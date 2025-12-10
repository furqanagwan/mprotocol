import { filterAndSortProducts, getPriceValue } from "@/lib/utils";
import { Product } from "@/lib/data";

// Mock minimal products for testing
const mockProducts: Product[] = [
  {
    id: 1,
    category: "Health",
    subcategory: "Oral",
    name: "Tongue Scraper",
    reason: "Hygiene",
    frequency: "Daily",
    icon: null,
    color: "",
    bg: "",
    price: "$",
  },
  {
    id: 2,
    category: "Wealth",
    subcategory: "Finance",
    name: "Pension",
    reason: "Saving",
    frequency: "Monthly",
    icon: null,
    color: "",
    bg: "",
    price: "%",
  },
  {
    id: 3,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Shampoo",
    reason: "Clean",
    frequency: "Daily",
    icon: null,
    color: "",
    bg: "",
    price: "$$",
  },
];

describe("Utils", () => {
  describe("getPriceValue", () => {
    it("should return 0 for Free or %", () => {
      expect(getPriceValue("Free")).toBe(0);
      expect(getPriceValue("%")).toBe(0);
    });

    it("should return correct length for currency symbols", () => {
      expect(getPriceValue("$")).toBe(1);
      expect(getPriceValue("$$")).toBe(2);
      expect(getPriceValue("$$$")).toBe(3);
    });
  });

  describe("filterAndSortProducts", () => {
    it("should filter by category", () => {
      const result = filterAndSortProducts(
        mockProducts,
        "",
        "Health",
        "All",
        "Protocol",
      );
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Tongue Scraper");
    });

    it("should filter by search query (case insensitive)", () => {
      const result = filterAndSortProducts(
        mockProducts,
        "pension",
        "All",
        "All",
        "Protocol",
      );
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Pension");
    });

    it("should sort by PriceLow", () => {
      const result = filterAndSortProducts(
        mockProducts,
        "",
        "All",
        "All",
        "PriceLow",
      );
      // Expected order: Pension (0), Tongue Scraper (1), Shampoo (2)
      expect(result[0].name).toBe("Pension");
      expect(result[1].name).toBe("Tongue Scraper");
      expect(result[2].name).toBe("Shampoo");
    });
  });
});
