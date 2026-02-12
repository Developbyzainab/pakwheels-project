"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NewCarsDescription() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white">
      
      <p className="text-gray-800 text-base leading-relaxed">
        Find new cars from PakWheels.com to avoid any hassle. You can see the{" "}
        <span className="font-semibold">new car prices in Pakistan</span>{" "}
        through our new car price section. Moreover, one can get the exact
        price of the vehicles through the{" "}
        <span className="font-semibold">on-road price calculator</span>{" "}
        as well. You can choose your desired vehicles and buy your dream
        car within the right budget through our find new cars section.
      </p>

      {showMore && (
        <p className="text-gray-800 text-base leading-relaxed mt-4">
          As we are the leading automotive website in the country, you can
          also get first-hand knowledge of new car launch in Pakistan, and
          also the{" "}
          <span className="font-semibold">latest vehicles in Pakistan</span>{" "}
          that are being introduced by the companies such as Honda, Toyota,
          Suzuki, Kia, Hyundai, Changan, MG and Proton.
        </p>
      )}

      {/* SHOW MORE BUTTON */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline"
        >
          {showMore ? "Show Less" : "Show More"}
          {showMore ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>
      </div>

    </div>
  );
}
