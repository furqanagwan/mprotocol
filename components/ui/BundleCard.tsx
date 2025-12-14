"use client";

import React, { useState } from "react";
import { Package, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Bundle, products, getProductTier } from "@/lib/data";

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const bundleProducts = products.filter((p) =>
    bundle.productIds.includes(p.id),
  );

  const tierLabels: Record<string, string> = {
    essential: "Essential",
    advanced: "Advanced",
    optional: "Optional",
  };

  const tierColors: Record<string, string> = {
    essential:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    advanced:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    optional: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  };

  return (
    <div
      className={`relative rounded-2xl border border-gray-200 dark:border-gray-800 ${bundle.bg} transition-all duration-300 ${
        isExpanded ? "shadow-xl" : "hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 ${bundle.color}`}
          >
            {bundle.icon}
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <Package className="w-3 h-3" />
            <span>{bundleProducts.length} items</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {bundle.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {bundle.description}
        </p>

        {!isExpanded && (
          <div className="flex flex-wrap gap-1 mb-4">
            {bundleProducts.slice(0, 3).map((product) => (
              <span
                key={product.id}
                className="text-xs px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-lg text-gray-700 dark:text-gray-300"
              >
                {product.name.split(" ").slice(0, 2).join(" ")}
              </span>
            ))}
            {bundleProducts.length > 3 && (
              <span className="text-xs px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-lg text-gray-500 dark:text-gray-400">
                +{bundleProducts.length - 3} more
              </span>
            )}
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2.5 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              Collapse Stack
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              View Protocol Stack
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Expanded Product List */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 rounded-b-2xl p-4 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-3">
            {bundleProducts.map((product) => {
              const tier = getProductTier(product.id);
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className={`p-2 rounded-lg ${product.bg} ${product.color}`}
                    >
                      {product.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${tierColors[tier]}`}
                        >
                          {tierLabels[tier]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  {product.link && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
