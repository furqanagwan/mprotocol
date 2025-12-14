import React from "react";
import { Package } from "lucide-react";
import { Bundle, products } from "@/lib/data";

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const bundleProducts = products.filter((p) =>
    bundle.productIds.includes(p.id),
  );

  return (
    <div
      className={`relative rounded-2xl border border-gray-200 dark:border-gray-800 p-6 ${bundle.bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
    >
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

      <button className="w-full py-2.5 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700">
        View Protocol Stack
      </button>
    </div>
  );
}
