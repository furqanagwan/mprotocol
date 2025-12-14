import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  ExternalLink,
  AlertTriangle,
  Copy,
  Check,
  Star,
  TrendingUp,
  Circle,
} from "lucide-react";
import { getProductTier, ProductTier } from "@/lib/data";

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    subcategory: string;
    name: string;
    reason: string;
    frequency: string;
    sideEffect?: string;
    note?: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
    price: string;
    appleLink?: string;
    androidLink?: string;
    link?: string;
    hideButton?: boolean;
    buttonText?: string;
  };
}

const tierConfig: Record<
  ProductTier,
  { label: string; icon: React.ReactNode; className: string }
> = {
  essential: {
    label: "Essential",
    icon: <Star className="w-3 h-3" />,
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  advanced: {
    label: "Advanced",
    icon: <TrendingUp className="w-3 h-3" />,
    className:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  },
  optional: {
    label: "Optional",
    icon: <Circle className="w-3 h-3" />,
    className: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  },
};

export default function ProductCard({ product }: ProductCardProps) {
  const [copied, setCopied] = useState(false);
  const tier = getProductTier(product.id);
  const tierInfo = tierConfig[tier];

  const handleCopy = () => {
    if (product.link) {
      navigator.clipboard.writeText(product.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${product.bg} ${product.color}`}>
          {product.icon}
        </div>
        <div className="text-right">
          <div className="flex flex-col items-end gap-1">
            <span
              className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${tierInfo.className}`}
            >
              {tierInfo.icon}
              {tierInfo.label}
            </span>
            {product.note && (
              <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                {product.note}
              </span>
            )}
          </div>
          <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
            {product.category}
          </span>
          <span className="text-xs font-bold tracking-wider text-gray-600 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
            {product.subcategory}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold text-gray-900 dark:text-white">
                Why:
              </span>{" "}
              {product.reason}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white">
                Protocol:
              </span>{" "}
              {product.frequency}
            </p>
          </div>

          {product.sideEffect && (
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 dark:text-red-300">
                <span className="font-bold">Side Effect:</span>{" "}
                {product.sideEffect}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">
            {product.price}
          </span>
          {product.link && (
            <button
              onClick={handleCopy}
              className="p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Copy Link"
            >
              {copied ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          )}
        </div>
        {product.appleLink && product.androidLink ? (
          <div className="flex gap-2">
            <a
              href={product.appleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              App Store <ExternalLink size={12} />
            </a>
            <a
              href={product.androidLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Play Store <ExternalLink size={12} />
            </a>
          </div>
        ) : product.link ? (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            {product.buttonText || "View Item"} <ExternalLink size={14} />
          </a>
        ) : !product.hideButton ? (
          <button className="flex items-center gap-2 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            {product.buttonText || "View Item"} <ExternalLink size={14} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
