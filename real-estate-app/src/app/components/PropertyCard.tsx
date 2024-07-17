// src/app/components/PropertyCard.tsx

"use client";

import Image from "next/image";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  onDelete: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  description,
  image,
  onDelete,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <Image
        className="w-full"
        src={image}
        alt={title}
        width={500}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {price}
        </span>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
