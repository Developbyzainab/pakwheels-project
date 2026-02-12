"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// Accessories data
const accessories = [
  { title: "Bike Parts", img: "/access2.png" },
  { title: "Bike Accessories", img: "/access3.png" },
  { title: "Bike Exhaust", img: "/access12.png" },
  { title: "Bike Helmet", img: "/access6.png" },
  { title: "Bike Air Filter", img: "/access10.png" },
  { title: "Bike Brake Shoe", img: "/access11.png" },
  { title: "Bike Gloves", img: "/access8.png" },
  { title: "Bike Headlights", img: "/access13.png" },
  { title: "All Purpose...", img: "/access9.png" },
  { title: "Microfiber Cloth", img: "/access7.png" },
  { title: "Engine Oil", img: "/access4.png" },
  { title: "Gps Tracker", img: "/access5.png" },
  { title: "Bike Indicator", img: "/access1.png" },
]

// Helper: split array into slides of 12 items each
const chunkArray = (arr, size) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export default function BikeAccessoriesCarousel() {
  const slides = chunkArray(accessories, 12)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-6 py-14 relative">
      <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
        Bike Accessories
      </h2>

      <Carousel opts={{ align: "start" }} className="relative">
        <CarouselContent className="-ml-2">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-2 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {slide.map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-xl shadow-sm hover:shadow-md transition mx-1"
                  >
                    <CardContent className="flex flex-col items-center justify-center py-2">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="object-contain mb-1"
                      />
                      <p className="text-[14px] sm:text-[15px] text-gray-700 text-center">
                        {item.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Left Arrow */}
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-5 md:-left-8 bg-white shadow-lg z-10 p-2 rounded-full hover:bg-gray-100 transition" />

        {/* Right Arrow */}
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-5 md:-right-8 bg-white shadow-lg z-10 p-2 rounded-full hover:bg-gray-100 transition" />
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === 0 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  )
}
