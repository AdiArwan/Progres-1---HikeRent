import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart} from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-batik-primary">
          HikeRent
        </Link>
        <div className="flex space-x-6 items-center">
        <div className="flex items-center space-x-2">
          <button
          type="button"
          className="px-4 py-2 text-white bg-batik-primary rounded-lg hover:bg-batik-primary-dark"
          >
          Cari
          </button>
          <input
          type="text"
          placeholder="Cari produk..."
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-batik-primary"
          />
        </div>
          <Link to="/" className="text-gray-800 hover:text-batik-primary">
            Beranda
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-batik-primary" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;