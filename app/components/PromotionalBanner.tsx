'use client';

import Image from 'next/image';

export default function PromotionalBanner() {
  return (
    <div className="w-full relative">
      <Image
        src="/discount.png"
        alt="Promotional Discount Banner"
        width={1920}
        height={578}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
