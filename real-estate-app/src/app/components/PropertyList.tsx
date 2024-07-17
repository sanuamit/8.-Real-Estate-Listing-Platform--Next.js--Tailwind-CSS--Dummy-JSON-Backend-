// src/app/components/PropertyList.tsx

"use client";

import PropertyCard from "./PropertyCard";

interface Property {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

interface PropertyListProps {
  properties: Property[];
  onDeleteProperty: (id: number) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  onDeleteProperty,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          {...property}
          onDelete={() => onDeleteProperty(property.id)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
