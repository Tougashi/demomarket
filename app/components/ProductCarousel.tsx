'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  isFavorite: boolean;
  hasSpecialLabel?: boolean;
  specialLabel?: string;
  image: string;
}

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Dri-FIT Football Jersey - Blue/White",
      price: "Rp. 450.000",
      isFavorite: false,
      image: "/product/produk1.jpg"
    },
    {
      id: 2,
      name: "Authentic Basketball Jersey - Black",
      price: "Rp. 380.000",
      isFavorite: false,
      image: "/product/produk2.jpg"
    },
    {
      id: 3,
      name: "Training Jersey Men's - Red",
      price: "Rp. 320.000",
      isFavorite: false,
      image: "/product/produk3.jpg"
    },
    {
      id: 4,
      name: "Women's Training Jersey - Pink",
      price: "Rp. 350.000",
      isFavorite: false,
      image: "/product/produk1.jpg"
    },
    {
      id: 5,
      name: "Kids Football Jersey - Green",
      price: "Rp. 250.000",
      isFavorite: false,
      image: "/product/produk2.jpg"
    },
    {
      id: 6,
      name: "Basketball Jersey - Purple",
      price: "Rp. 420.000",
      isFavorite: false,
      image: "/product/produk3.jpg"
    },
    {
      id: 7,
      name: "Limited Edition Jersey - Gold",
      price: "Rp. 280.000",
      originalPrice: "Rp. 560.000",
      discount: "50% OFF",
      isFavorite: false,
      hasSpecialLabel: true,
      specialLabel: "LIMITED EDITION",
      image: "/product/produk1.jpg"
    },
    {
      id: 8,
      name: "Training Jersey Unisex - White",
      price: "Rp. 300.000",
      isFavorite: false,
      image: "/product/produk2.jpg"
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: 280, // w-64 + space-x-4 = 256px + 16px
      behavior: 'smooth'
    });
  };

  const prevSlide = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: -280, // w-64 + space-x-4 = 256px + 16px
      behavior: 'smooth'
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">Jersey Collection</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div 
          ref={containerRef}
          className="relative overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
            {products.map((product) => (
              <div key={product.id} className="w-64 flex-shrink-0">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority={product.id <= 4}
                    />
                    
                    {/* Special Label */}
                    {product.hasSpecialLabel && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {product.specialLabel}
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-2 left-2 p-1 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
                    >
                      <svg 
                        className={`w-4 h-4 ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-3">
                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">{product.name}</p>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-base font-bold text-black">{product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                          <span className="text-xs text-red-500 font-semibold">{product.discount}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
