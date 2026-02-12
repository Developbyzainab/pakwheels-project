"use client"

import { useState } from "react"
import Image from "next/image"

const bikes = [
  { id: 1, name: "Honda CB 150F", price: "PKR 4.9 - 5.2 lacs", img: "/bikes1.png" },
  { id: 2, name: "Honda CD 70", price: "PKR 1.5 - 1.6 lacs", img: "/bikes2.png" },
  { id: 3, name: "Honda CG 125", price: "PKR 2.3 - 2.9 lacs", img: "/bikes3.png" },
  { id: 4, name: "Suzuki GS 150", price: "PKR 4.1 - 4.6 lacs", img: "/bikes4.png" },
  { id: 5, name: "Yamaha YBR 125", price: "PKR 4.4 - 4.9 lacs", img: "/bikes5.png" },
  { id: 6, name: "United US 125", price: "PKR 2.1 - 2.4 lacs", img: "/bikes6.png" },
  { id: 7, name: "Road Prince 70", price: "PKR 1.2 - 1.4 lacs", img: "/bikes7.png" },
  { id: 8, name: "Super Power 125", price: "PKR 2.0 - 2.3 lacs", img: "/bikes8.png" },
  { id: 9, name: "Metro MR 70", price: "PKR 1.3 - 1.5 lacs", img: "/bikes9.png" },
  { id: 10, name: "Hi Speed 70", price: "PKR 1.2 - 1.4 lacs", img: "/bikes10.png" },
  { id: 11, name: "Benelli TNT 150", price: "PKR 6.1 - 6.5 lacs", img: "/bikes11.png" },
  { id: 12, name: "Kawasaki Ninja 400", price: "PKR 18 - 20 lacs", img: "/bikes12.png" },
  { id: 13, name: "BMW G310R", price: "PKR 24 - 26 lacs", img: "/bikes13.png" },
  { id: 14, name: "Road Prince Wego 150", price: "PKR 3.1 - 3.4 lacs", img: "/bikes14.png" },
  { id: 15, name: "United Bravo 200", price: "PKR 3.8 - 4.2 lacs", img: "/bikes15.png" },
]

export default function PopularNewBikes() {
  const [showMore, setShowMore] = useState(false)

  const visibleBikes = showMore ? bikes : bikes.slice(0, 8)

  return (
    <section className="w-full py-12">

      {/* HEADING */}
      <h2 className="text-2xl font-semibold mb-6 ml-20">
        Popular New Bikes
      </h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-20">
        {visibleBikes.map((bike) => (
          <div key={bike.id} className="flex justify-center">

            {/* CARD */}
            <div className="w-[240px] border rounded-lg bg-white hover:shadow-md transition">

              {/* IMAGE */}
              <div className="w-full h-[220px] relative">
                <Image
                  src={bike.img}
                  alt={bike.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="py-4 text-center">
                <h3 className="text-sm font-semibold text-blue-900">
                  {bike.name}
                </h3>

                <p className="text-green-600 text-sm font-medium mt-1">
                  {bike.price}
                </p>

                <div className="text-yellow-500 text-sm mt-1">
                  ⭐⭐⭐⭐☆
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* SEE MORE */}
      <div className="flex justify-end mx-20 mt-4">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-600 text-sm hover:underline"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>

    </section>
  )
}
