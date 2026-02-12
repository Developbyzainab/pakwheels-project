import Image from "next/image";
import { Heart } from 'lucide-react';

export default function CardPage({ car }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex gap-4 bg-white h-[150px]">

      {/* LEFT IMAGE BOX */}
      <div className="w-48 h-full relative rounded border overflow-hidden">

        {/* FEATURED BADGE */}
        <span className="absolute top-2 left-2 z-10 bg-red-700 text-white text-xs px-2 py-1 rounded">
          FEATURED
        </span>

        {/* CAR IMAGE */}
        <Image
          src={car.img}
          alt={car.title}
          fill
          className="object-cover z-0"
        />

        {/* IMAGES COUNT */}
        <span className="absolute bottom-2 left-2 z-10 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
          📷 {car.images}
        </span>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex-1">
        <h2 className="text-md font-semibold text-blue-900 cursor-pointer hover:underline">
          {car.title}
        </h2>

        <p className="text-gray-600 text-sm">{car.city}</p>

        <p className="text-sm text-gray-600 mt-1 flex gap-2 truncate">
  <span>{car.year}</span>|
  <span>{car.km}</span>|
  <span>{car.fuel}</span>|
  <span>{car.engine}</span>|
  <span>{car.transmission}</span>
</p>

        <p className="text-xs text-gray-500 mt-1">Updated {car.updated}</p>
      </div>

      {/* RIGHT SIDE (PRICE + PHONE) */}
      <div className="w-44 h-full flex flex-col justify-between items-end">

        {/* PRICE */}
        <p className="text-lg font-bold text-blue-900">{car.price}</p>

        {/* HEART + PHONE BUTTON */}
        <div className="w-full flex items-center justify-between">
          <button className="border px-2 py-1 rounded text-gray-600 hover:text-red-600">
  <Heart size={12} />
</button>


          <button className="bg-green-600 text-white px-3 py-1.5 rounded text-xs w-[77%]">
            📞 Show Phone No.
          </button>
        </div>
      </div>
    </div>
  );
}
