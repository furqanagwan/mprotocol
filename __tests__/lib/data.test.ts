import { products } from "@/lib/data";

describe("Product Data", () => {
  it("should have unique IDs for all products", () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("should have required fields for all products", () => {
    products.forEach((product) => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeTruthy();
      expect(product.category).toBeTruthy();
      expect(product.price).toBeTruthy();
    });
  });

  it("should contain essential protocols", () => {
    const names = products.map((p) => p.name);
    expect(names).toContain("Copper Tongue Scraper"); // Example check
    expect(names).toContain("Workplace Pension");
  });
});
