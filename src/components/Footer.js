import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-batik-primary text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        {/* Tentang Kami */}
        <div>
          <h3 className="text-xl font-bold mb-4">HikeRent</h3>
          <p>Mendaki aman bahagia sejahtera </p>
        </div>

        {/* Tautan Cepat */}
        <div>
          <h4 className="font-bold mb-4">Tautan Cepat</h4>
          <ul>
            <li><Link to="/" className="hover:text-amber-200">Beranda</Link></li>
            <li><Link to="/products" className="hover:text-amber-200">Produk</Link></li>
            <li><Link to="/cart" className="hover:text-amber-200">Keranjang</Link></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h4 className="font-bold mb-4">Bantuan</h4>
          <ul>
            <li>Kebijakan Privasi</li>
            <li>Syarat & Ketentuan</li>
            <li>Pengiriman</li>
            <li>Pengembalian</li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <p>Email: info@hikerent.com</p>
          <p>Telepon: +62 812 3456 7890</p>
          
          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <Facebook className="hover:text-amber-200 cursor-pointer" />
            <Instagram className="hover:text-amber-200 cursor-pointer" />
            <Twitter className="hover:text-amber-200 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-amber-700 pt-4">
        © 2024 HikeRent. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;