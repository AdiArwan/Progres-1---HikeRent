import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-batik-background py-16 text-center">
        <h1 className="text-4xl font-bold text-batik-primary mb-4">
          HikeRent
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Temukan Barang Pendakianmu Disini
        </p>
        <Link to="/products" className="btn-primary">
          Jelajahi Koleksi
        </Link>
      </div>

      {/* Produk Unggulan */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-batik-primary text-center mb-8">
          Selamat Menjelajah
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div key={product.id} className="card p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-batik-primary">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">
                Rp{product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;