import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-batik-primary mb-8">
        Detail Produk
      </h1>

      {/* Kategori Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category 
                ? 'bg-batik-primary text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-batik-secondary/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Produk */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;