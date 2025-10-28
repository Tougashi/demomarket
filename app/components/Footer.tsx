'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreedToTerms) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">TENTANG</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Syarat Dan Ketentuan</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LAYANAN PELANGGAN</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Pengembalian</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Kontak Kami</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Peta Situs</a></li>
            </ul>
          </div>

          {/* Popular Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LINK POPULER</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Jersey Pria</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Jersey Wanita</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Jersey Anak</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Sportswear</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">BERLANGGANAN</h3>
            
            {/* Terms Agreement */}
            <div className="mb-4">
              <label className="flex items-start space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1"
                />
                <span className="text-sm">
                  Dengan memilih "Daftar Sekarang", saya menyetujui{' '}
                  <a href="#" className="underline hover:text-gray-300">
                    kebijakan keamanan data NadinSportwear Indonesia
                  </a>
                </span>
              </label>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Alamat Email Anda"
                  className="w-full px-3 py-2 bg-white text-black placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={!agreedToTerms || !email}
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                DAFTAR
              </button>
            </form>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-2 text-green-400 text-sm">
                Terima kasih! Anda telah berhasil berlangganan.
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 mt-4">
              Dengan berlangganan, Anda setuju untuk menerima komunikasi apapun dari kami dan Anda telah membaca{' '}
              <a href="#" className="underline hover:text-gray-300">Kebijakan Privasi</a> dan{' '}
              <a href="#" className="underline hover:text-gray-300">syarat & ketentuan kami</a>.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* About Section */}
          <div className="border-b border-gray-700 py-4">
            <button
              onClick={() => toggleDropdown('tentang')}
              className="text-lg font-bold flex items-center justify-between w-full text-left"
            >
              TENTANG
              <span className="text-xl font-light">
                {openDropdown === 'tentang' ? '−' : '+'}
              </span>
            </button>
            {openDropdown === 'tentang' && (
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Syarat Dan Ketentuan</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Kebijakan Privasi</a></li>
              </ul>
            )}
          </div>

          {/* Customer Service Section */}
          <div className="border-b border-gray-700 py-4">
            <button
              onClick={() => toggleDropdown('layanan')}
              className="text-lg font-bold flex items-center justify-between w-full text-left"
            >
              LAYANAN PELANGGAN
              <span className="text-xl font-light">
                {openDropdown === 'layanan' ? '−' : '+'}
              </span>
            </button>
            {openDropdown === 'layanan' && (
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Pengembalian</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Kontak Kami</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Peta Situs</a></li>
              </ul>
            )}
          </div>

          {/* Popular Links Section */}
          <div className="border-b border-gray-700 py-4">
            <button
              onClick={() => toggleDropdown('populer')}
              className="text-lg font-bold flex items-center justify-between w-full text-left"
            >
              LINK POPULER
              <span className="text-xl font-light">
                {openDropdown === 'populer' ? '−' : '+'}
              </span>
            </button>
            {openDropdown === 'populer' && (
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Jersey Pria</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Jersey Wanita</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Jersey Anak</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors text-sm">Sportswear</a></li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Newsletter Section */}
        <div className="md:hidden mt-6">
          {/* Terms Agreement */}
          <div className="mb-4">
            <label className="flex items-start space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-left">
                Dengan memilih "Daftar Sekarang", saya menyetujui{' '}
                <a href="#" className="underline hover:text-gray-300">
                  kebijakan keamanan data NadinSportwear Indonesia
                </a>
              </span>
            </label>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Alamat Email Anda"
                className="w-full px-3 py-2 bg-white text-black placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={!agreedToTerms || !email}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              DAFTAR
            </button>
          </form>

          {/* Success Message */}
          {isSubscribed && (
            <div className="mt-2 text-green-400 text-sm">
              Terima kasih! Anda telah berhasil berlangganan.
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 mt-4 text-left">
            Dengan berlangganan, Anda setuju untuk menerima komunikasi apapun dari kami dan Anda telah membaca{' '}
            <a href="#" className="underline hover:text-gray-300">Kebijakan Privasi</a> dan{' '}
            <a href="#" className="underline hover:text-gray-300">syarat & ketentuan kami</a>.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 justify-center">
            {/* Instagram */}
            <a href="#" className="hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a href="#" className="hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            
            {/* WhatsApp */}
            <a href="#" className="hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
        
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              Indonesia | IDR
            </div>
            <div className="text-sm text-gray-400">
              COPYRIGHT © 2023 NADINSPORTWEAR.COM. <br className="md:hidden" /> ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>

      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
