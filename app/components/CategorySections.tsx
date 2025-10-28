'use client';

import Image from 'next/image';

interface Category {
  id: number;
  title: string;
  backgroundImage: string;
}

export default function CategorySections() {
  const categories: Category[] = [
    {
      id: 1,
      title: "PRIA",
      backgroundImage: "/category/man.jpg"
    },
    {
      id: 2,
      title: "WANITA",
      backgroundImage: "/category/woman.jpg"
    },
    {
      id: 3,
      title: "SPORTS JERSEY",
      backgroundImage: "/category/sportjersey.jpg"
    },
    {
      id: 4,
      title: "TRAINING JERSEY",
      backgroundImage: "/category/training.jpg"
    }
  ];

  return (
    <div className="w-full">
      {/* Desktop Layout - 4 columns */}
      <div className="hidden md:flex">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="flex-1 h-80 flex items-end justify-center pb-8 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={category.backgroundImage}
              alt={category.title}
              fill
              className="object-cover"
              priority
            />

            {/* Separator line */}
            {index < categories.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white z-10"></div>
            )}
            
            {/* Text */}
            <h3 className="text-2xl font-bold uppercase text-white z-10 drop-shadow-[0_0_4px_rgba(0,0,0,1)]">
              {category.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Mobile Layout - 2x2 grid */}
      <div className="md:hidden grid grid-cols-2 gap-0">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="h-64 flex items-end justify-center pb-6 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={category.backgroundImage}
              alt={category.title}
              fill
              className="object-cover"
              priority
            />

            {/* Separator lines for mobile */}
            {index % 2 === 0 && index < categories.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white z-10"></div>
            )}
            {index < 2 && (
              <div className="absolute left-0 right-0 bottom-0 h-px bg-white z-10"></div>
            )}
            
            {/* Text */}
            <h3 className="text-lg font-bold uppercase text-white z-10 drop-shadow-[0_0_4px_rgba(0,0,0,1)]">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
