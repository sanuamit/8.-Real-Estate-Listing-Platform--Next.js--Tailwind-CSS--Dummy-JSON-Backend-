// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import "./globals.css";

interface Property {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch("http://localhost:3001/properties");
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleAddProperty = async (newProperty: Property) => {
    try {
      const response = await fetch("http://localhost:3001/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty),
      });
      if (response.ok) {
        fetchProperties();
      } else {
        console.error("Error adding property:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  const handleDeleteProperty = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/properties/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProperties();
      } else {
        console.error("Error deleting property:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">
        Real Estate Listings
      </h1>
      <AddProperty onAddProperty={handleAddProperty} />
      <PropertyList
        properties={properties}
        onDeleteProperty={handleDeleteProperty}
      />
    </div>
  );
};

export default Home;
