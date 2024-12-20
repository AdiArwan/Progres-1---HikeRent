import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );

  if (cart.length === 0) {
    return (
      <div className="container mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-batik-primary mb-4">
          Keranjang Anda Kosong
        </h1>
        <p>Silakan tambahkan produk ke keranjang</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-batik-primary mb-8">
        Keranjang Belanja
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Daftar Produk */}
        <div className="md:col-span-2">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-batik-primary">
                  {item.name}
                </h3>
                <p>Rp{item.price.toLocaleString()}</p>
                <p>Jumlah: {item.quantity}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:bg-red-100 p-2 rounded-full"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* Ringkasan Pesanan */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-batik-primary mb-4">
            Ringkasan Pesanan
          </h2>
          <div className="flex justify-between mb-4">
            <span>Total Produk:</span>
            <span>{cart.length}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total Harga:</span>
            <span>Rp{totalPrice.toLocaleString()}</span>
          </div>
          <button 
            onClick={clearCart}
            className="btn-primary w-full mb-4"
          >
            Kosongkan Keranjang
          </button>
          <button className="btn-primary w-full">
            Lanjutkan Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;