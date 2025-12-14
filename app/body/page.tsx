"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MaleBodyMap from "@/components/home/BodyMap";

export default function BodyPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
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

  return (
    <div className="transition-colors duration-300">
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans">
        <Header
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Know Your Body
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Interactive guide to essential health checkpoints. Tap each area
              to learn about prevention, screening, and early detection.
            </p>
          </div>

          {/* Body Map */}
          <MaleBodyMap />

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Regular Screenings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Men often delay health checkups. Most cancers are highly
                treatable when found early - don&apos;t skip your annual exams.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Know Your Numbers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Blood pressure, cholesterol, blood sugar, PSA. These numbers
                tell the story of your health before symptoms appear.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Don&apos;t Tough It Out
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ignoring symptoms doesn&apos;t make you tough - it makes
                conditions harder to treat. Real strength is taking action.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
