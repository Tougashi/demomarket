'use client';

import { FaTruck } from 'react-icons/fa';

export default function AnnouncementBar() {
  return (
    <div className="bg-white text-black py-2 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          <FaTruck className="w-4 h-4 text-green-600" />
          <span className="text-sm font-bold">Gratis Ongkir </span><span className="text-sm">se-Indonesia!</span>
        </div>
      </div>
    </div>
  );
}
