import React from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { mainCategories } from "@/lib/data";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function Header({
  darkMode,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  activeCategory,
  setActiveCategory,
}: HeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight">PROTOCOL</span>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-600" />
                )}
              </button>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 space-y-2">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                activeCategory === cat
                  ? "bg-gray-100 dark:bg-gray-800 font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              aria-current={activeCategory === cat ? "page" : undefined}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
