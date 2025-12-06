import React from 'react';
import { CheckCircle, Clock, ExternalLink, AlertTriangle } from 'lucide-react';

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
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div
            className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-all duration-300 flex flex-col"
        >
            {/* Category Badge */}
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${product.bg} ${product.color}`}>
                    {product.icon}
                </div>
                <div className="text-right">
                    {product.note && (
                        <span className="block text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-1">
                            {product.note}
                        </span>
                    )}
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
                            <span className="font-semibold text-gray-900 dark:text-white">Why:</span> {product.reason}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-gray-900 dark:text-white">Protocol:</span> {product.frequency}
                        </p>
                    </div>

                    {product.sideEffect && (
                        <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
                            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-700 dark:text-red-300">
                                <span className="font-bold">Side Effect:</span> {product.sideEffect}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{product.price}</span>
                <button className="flex items-center gap-2 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    View Item <ExternalLink size={14} />
                </button>
            </div>
        </div>
    );
}
