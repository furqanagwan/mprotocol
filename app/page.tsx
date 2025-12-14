"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";
import Newsletter from "@/components/home/Newsletter";
import BundleCard from "@/components/ui/BundleCard";
import { products, bundles } from "@/lib/data";
import { filterAndSortProducts } from "@/lib/utils";
import { User, ArrowRight } from "lucide-react";

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

        {/* Know Your Body CTA */}
        {activeCategory === "All" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link href="/body">
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Know Your Body
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Interactive 3D health awareness guide with screening
                        recommendations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold group-hover:bg-white/30 transition-colors">
                    Explore
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

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
