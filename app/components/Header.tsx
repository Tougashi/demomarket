'use client';

import { useState } from 'react';
import { FaShoppingCart, FaUser, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* Utility Navigation - Hidden on Mobile */}
      <div className="hidden md:block border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1.5 text-xs">
            <div className="flex items-center space-x-3">
              <span className="hover:text-gray-300 cursor-pointer whitespace-nowrap">MASUK | DAFTAR</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hover:text-gray-300 cursor-pointer whitespace-nowrap">LOKASI TOKO</span>
              <span className="hover:text-gray-300 cursor-pointer whitespace-nowrap">LACAK PESANAN</span>
              <span className="hover:text-gray-300 cursor-pointer whitespace-nowrap">BANTUAN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="NadinSportwear" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">NEW ARRIVALS</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">JERSEY</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">PRIA</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">WANITA</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">ANAK-ANAK</a>
            <a href="#" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">COMING SOON</a>
            <a href="#" className="text-sm text-red-500 font-semibold hover:text-red-400 transition-colors whitespace-nowrap">SALE UP TO 50%</a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-md px-2 py-1.5">
              <input
                type="text"
                placeholder="Cari..."
                className="bg-transparent text-black placeholder-gray-500 outline-none w-32 text-sm"
              />
              <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Cart Icon */}
            <div className="relative cursor-pointer hover:text-gray-300 transition-colors">
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <>
        {/* Overlay */}
        <div className={`fixed inset-0 bg-black/10 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col">
              {/* Main Navigation */}
              <div className="px-4 py-2">
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">New Arrivals</span>
                </a>
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">Eksklusif</span>
                </a>
                <a href="#" className="flex items-center justify-between py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">Pria</span>
                  <FaChevronRight className="w-3 h-3 text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">Wanita</span>
                  <FaChevronRight className="w-3 h-3 text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">Anak-Anak</span>
                  <FaChevronRight className="w-3 h-3 text-gray-400" />
                </a>
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">Coming Soon</span>
                </a>
                <a href="#" className="flex items-center py-3 text-red-600 hover:text-red-700 transition-colors border-b border-gray-100">
                  <span className="text-base font-semibold">SALE UP TO 50%</span>
                </a>
              </div>

              {/* User Section */}
              <div className="px-4 py-2 border-t border-gray-200">
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <FaUser className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-base">MASUK | DAFTAR</span>
                </a>
              </div>

              {/* Utility Links */}
              <div className="px-4 py-2">
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">LOKASI TOKO</span>
                </a>
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">LACAK PESANAN</span>
                </a>
                <a href="#" className="flex items-center py-3 text-gray-800 hover:text-gray-600 transition-colors border-b border-gray-100">
                  <span className="text-base">BANTUAN</span>
                </a>
              </div>

              {/* Operating Hours */}
              <div className="px-4 py-4 mt-auto">
                <p className="text-sm text-gray-500 text-center">
                  SENIN - MINGGU, 08.00 - 21.00 WIB
                </p>
              </div>
            </div>
          </div>
      </>
    </header>
  );
}
