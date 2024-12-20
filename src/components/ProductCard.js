import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card p-4 hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      </Link>
      <div className="flex justify-between items-center mb-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-batik-primary">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center">
          <Star className="text-yellow-500 mr-1" size={16} />
          <span>{product.rating}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-batik-primary">
          Rp{product.price.toLocaleString()}
        </span>
        <button 
          onClick={() => addToCart(product)}
          className="btn-primary flex items-center"
        >
          <ShoppingCart className="mr-2" size={16} />
          Beli
        </button>
      </div>
    </div>
  );
};

export default ProductCard;