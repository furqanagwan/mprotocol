import { Product } from "./data";

export const getPriceValue = (price: string) => {
  if (price === "Free" || price === "%") return 0;
  return price.length; // "$" = 1, "$$" = 2, etc.
};

export const filterAndSortProducts = (
  products: Product[],
  searchQuery: string,
  activeCategory: string,
  activeSubCategory: string,
  sortBy: string,
) => {
  return products
    .filter((p) => {
      // 1. Filter by Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          p.name.toLowerCase().includes(query) ||
          p.reason.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.subcategory.toLowerCase().includes(query);

        if (!matchesSearch) return false;
      }

      // 2. Filter by Main Category
      if (activeCategory !== "All" && p.category !== activeCategory) {
        return false;
      }
      // 3. Filter by Sub Category
      if (activeSubCategory !== "All" && p.subcategory !== activeSubCategory) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "PriceLow") {
        return getPriceValue(a.price) - getPriceValue(b.price);
      }
      if (sortBy === "PriceHigh") {
        return getPriceValue(b.price) - getPriceValue(a.price);
      }
      return 0; // Default Protocol order
    });
};
