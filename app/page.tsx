"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";
import Newsletter from "@/components/home/Newsletter";
import BundleCard from "@/components/ui/BundleCard";
import { products, bundles } from "@/lib/data";
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

    if (isDark) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(true);
      document.documentElement.classList.add("dark");
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

        {/* Protocol Bundles Section */}
        {activeCategory === "All" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Protocol Stacks
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Curated bundles for specific goals. Start with a complete
                protocol.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bundles.map((bundle) => (
                <BundleCard key={bundle.id} bundle={bundle} />
              ))}
            </div>
          </section>
        )}

        <ProductGrid products={filteredProducts} />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
}
