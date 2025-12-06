import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

interface ProductGridProps {
    activeCategory: string;
    products: any[];
}

export default function ProductGrid({ activeCategory, products }: ProductGridProps) {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

            {/* CATEGORY TITLE FOR MOBILE CONTEXT */}
            <div className="mb-8 md:hidden">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                    {activeCategory === 'All' ? 'All Systems' : activeCategory}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {products.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No products found in this category.
                </div>
            )}
        </main>
    );
}
