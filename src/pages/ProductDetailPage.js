import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Gambar Produk */}
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Detail Produk */}
        <div>
          <h1 className="text-3xl font-bold text-batik-primary mb-4">
            {product.name}
          </h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <Star className="text-yellow-500 mr-1" />
              <span>{product.rating} (Review)</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="ml-4 text-green-600">Tersedia</span>
          </div>

          <p className="text-2xl font-bold text-batik-primary mb-4">
            Rp{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          {/* Kuantitas */}
          <div className="flex items-center mb-6">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-200 px-3 py-1 rounded-l-lg"
            >
              -
            </button>
            <span className="px-4 py-1 border">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className="bg-gray-200 px-3 py-1 rounded-r-lg"
            >
              +
            </button>
          </div>

          {/* Tombol Aksi */}
          <div className="flex space-x-4">
            <button 
              onClick={() => {
                const productToAdd = { ...product, quantity };
                addToCart(productToAdd);
              }}
              className="btn-primary flex items-center"
            >
              <ShoppingCart className="mr-2" /> 
              Tambah ke Keranjang
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center">
              <Heart className="mr-2" /> 
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;