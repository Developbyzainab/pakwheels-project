"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const bikes = [
  { title: "Honda CB 150F", image: "/bike1.png", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/bike2.png", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/bike3.png", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/bike5.png", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/bike4.png", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/bike6.png", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/bike7.png", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/bike8.png", count: "319 Bikes Listed" },
  { title: "Super Power 125", image: "/bike9.png", count: "128 Bikes Listed" },
  { title: "Hi Speed 70", image: "/bike10.png", count: "94 Bikes Listed" },
]

export default function PopularUsedBikesCarousel() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-12">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold mb-10">
          Popular Used Bikes
        </h2>

        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 4,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-6">
            {bikes.map((bike, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="bg-white border hover:shadow-md transition">

                  {/* IMAGE – NO SIDE SPACING */}
                  <div className="relative h-44 mt-4">
                    <Image
                      src={bike.image}
                      alt={bike.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="p-4 text-left">
                    <h3 className="text-blue-700 font-medium text-lg">
                      {bike.title}
                    </h3>
                    <p className="text-green-600 text-sm">
                      {bike.count}
                    </p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>

      </div>
    </section>
  )
}
