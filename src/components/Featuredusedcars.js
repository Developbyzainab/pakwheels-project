"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Lucide icons

const carData = {
  Popular: [
    { name: "Suzuki Cultus", price: "PKR 40.9 - 45.9 lacs", reviews: 275, rating: 3, image: "/cars2.png" },
    { name: "Toyota Yaris Sedan", price: "PKR 46.5 - 64.5 lacs", reviews: 156, rating: 4, image: "/cars3.png" },
    { name: "Suzuki Swift", price: "PKR 44.6 - 47.7 lacs", reviews: 208, rating: 4, image: "/cars4.jpg" },
    { name: "Toyota Fortuner", price: "PKR 1.24 - 2.05 crore", reviews: 49, rating: 4, image: "/cars5.jpg" },
    { name: "Honda City", price: "PKR 45 - 55 lacs", reviews: 100, rating: 4, image: "/cars6.png" },
    { name: "Kia Sportage", price: "PKR 1.2 - 1.6 crore", reviews: 60, rating: 4, image: "/cars7.jpg" },
    { name: "Honda Civic", price: "PKR 50 - 60 lacs", reviews: 80, rating: 4, image: "/cars8.png" },
     { name: "Honda Civic", price: "PKR 50 - 60 lacs", reviews: 80, rating: 4, image: "/cars9.jpg" }
  ],
  Upcoming: [
     { name: "Suzuki Cultus", price: "PKR 40.9 - 45.9 lacs", reviews: 275, rating: 3, image: "/cars10.jpg" },
    { name: "Toyota Yaris Sedan", price: "PKR 46.5 - 64.5 lacs", reviews: 156, rating: 4, image: "/cars11.jpg" },
    { name: "Suzuki Swift", price: "PKR 44.6 - 47.7 lacs", reviews: 208, rating: 4, image: "/cars12.jpg" },
    { name: "Toyota Fortuner", price: "PKR 1.24 - 2.05 crore", reviews: 49, rating: 4, image: "/cars13.jpg" },
    { name: "Honda City", price: "PKR 45 - 55 lacs", reviews: 100, rating: 4, image: "/cars14.jpg" },
    { name: "Kia Sportage", price: "PKR 1.2 - 1.6 crore", reviews: 60, rating: 4, image: "/cars15.jpg" },
    { name: "Honda Civic", price: "PKR 50 - 60 lacs", reviews: 80, rating: 4, image: "/cars16.jpg" },
     { name: "Honda Civic", price: "PKR 50 - 60 lacs", reviews: 80, rating: 4, image: "/cars17.jpg" }
  ],
  "Newly Launched": [
     { name: "Suzuki Cultus", price: "PKR 40.9 - 45.9 lacs", reviews: 275, rating: 3, image: "/cars18.jpg" },
    { name: "Toyota Yaris Sedan", price: "PKR 46.5 - 64.5 lacs", reviews: 156, rating: 4, image: "/cars19.jpg" },
    { name: "Suzuki Swift", price: "PKR 44.6 - 47.7 lacs", reviews: 208, rating: 4, image: "/cars20.png" },
    { name: "Toyota Fortuner", price: "PKR 1.24 - 2.05 crore", reviews: 49, rating: 4, image: "/cars21.jpg" },
    { name: "Honda City", price: "PKR 45 - 55 lacs", reviews: 100, rating: 4, image: "/cars22.png" },
    { name: "Kia Sportage", price: "PKR 1.2 - 1.6 crore", reviews: 60, rating: 4, image: "/cars23.jpg" },
    { name: "Honda Civic", price: "PKR 50 - 60 lacs", reviews: 80, rating: 4, image: "/cars24.png" },
     { name: "Honda Civic", price: "PKR 50 - 60 lacs", reviews: 80, rating: 4, image: "/cars25.jpg" }
  ],
};

const CarCarousel = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 4;

  const cars = carData[activeTab];
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  const visibleCars = cars.slice(currentPage * carsPerPage, (currentPage + 1) * carsPerPage);

  return (
    <div className="py-8 bg-gray-50 rounded-xl relative px-15">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured New Cars</h2>
        <a href="#" className="text-blue-500 hover:underline font-medium">
          View All New Cars
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b pb-2">
        {Object.keys(carData).map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(0);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        {/* Center the cards */}
        <div className="flex justify-center gap-3">
          {visibleCars.map((car, index) => (
            <div key={index} className="w-[23%] min-w-[20%] p-2 flex-shrink-0">
              <div className="border rounded-lg p-4 text-center hover:shadow-lg transition bg-white">
                <img src={car.image} alt={car.name} className="mx-auto mb-4 h-44 object-contain" />
                <h3 className="font-semibold text-sm mb-1">{car.name}</h3>
                <p className="text-green-600 text-sm mb-2">{car.price}</p>
                {/* Stars + Reviews inline */}
                <div className="flex justify-center items-center gap-2 text-yellow-500 text-sm mb-1">
                  <span>{"★".repeat(car.rating) + "☆".repeat(5 - car.rating)}</span>
                  <span className="text-gray-500 text-xs">{car.reviews} Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow disabled:opacity-50 hover:bg-blue-600 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow disabled:opacity-50 hover:bg-blue-600 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarCarousel;
