import React from "react";
import { mainCategories, hierarchy } from "@/lib/data";

interface HeroProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeSubCategory: string;
  setActiveSubCategory: (subCategory: string) => void;
}

export default function Hero({
  activeCategory,
  setActiveCategory,
  activeSubCategory,
  setActiveSubCategory,
}: HeroProps) {
  const subCategories =
    activeCategory !== "All" ? hierarchy[activeCategory] : [];

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
          Optimize Your Existence
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          A data-driven curation of tools for health, wealth, and aesthetics. No
          fluff. Just effective protocols.
        </p>

        {/* MAIN CATEGORY TABS */}
        <div className="inline-flex w-full md:w-auto bg-white dark:bg-gray-900 p-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 overflow-x-auto max-w-full mb-6 scrollbar-hide">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SUB CATEGORY TABS (Condition: Active Category is not ALL) */}
        {activeCategory !== "All" && subCategories && (
          <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-center gap-2">
              {subCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                    activeSubCategory === sub
                      ? "bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                      : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                  }`}
                  aria-current={activeSubCategory === sub ? "page" : undefined}
                >
                  {sub}
                </button>
              ))}
            </div>
            {activeSubCategory === "Fashion" && (
              <p className="text-sm text-gray-500 italic">
                Fashion choices are up to the individual, but it is recomended
                to stick to one brand if possible.
              </p>
            )}
            {(activeSubCategory === "Hair" || activeSubCategory === "Skin") && (
              <p className="text-sm text-gray-500 italic">
                Genetic conditions eventually catch up. Treatments are designed
                to slow it down, only cures can fix the issue.
              </p>
            )}
            {activeSubCategory === "Fitness" && (
              <p className="text-sm text-gray-500 italic">
                Workouts are based on individual preference. As long as you are
                working out, the specific routine does not matter.
              </p>
            )}
            {activeSubCategory === "Oral" && (
              <p className="text-sm text-gray-500 italic">
                Even with a perfect routine, manual removal of calculus is
                required. Schedule professional hygiene appointments every 3-6
                months.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
