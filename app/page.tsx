"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";
import { products } from "@/lib/data";
import { filterAndSortProducts } from "@/lib/utils";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Protocol");

  // Initialize theme based on preference and apply to document
  useEffect(() => {
    // Check local storage or system preference
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Reset subcategory when switching main category
    setActiveSubCategory("All");
  };

  const filteredProducts = filterAndSortProducts(
    products,
    searchQuery,
    activeCategory,
    activeSubCategory,
    sortBy,
  );

  return (
    <div className="transition-colors duration-300">
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans">
        <Header
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />

        <Hero
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          activeSubCategory={activeSubCategory}
          setActiveSubCategory={setActiveSubCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <ProductGrid
          activeCategory={activeCategory}
          products={filteredProducts}
        />

        <Footer />
      </div>
    </div>
  );
}
