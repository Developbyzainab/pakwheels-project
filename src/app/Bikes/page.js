"use client";
import Image from "next/image"
import { useState } from "react";
import { Bike, Tag, ChevronDown, ChevronUp } from "lucide-react";
import PopularUsedBikesSlider from "@/components/PopularUsedBikesSlider"
import PopularNewBikes from "@/components/PopularNewBikes"
import BikeAccessoriesCarousel from "@/components/BikeAccessoriesCarousel"
import { Star, StarOff } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BikesPage() {
  const [activeTab, setActiveTab] = useState("used");
  const [showMore, setShowMore] = useState(false);
  


const reviews = [
    {
      id: 1,
      title: "Value of money",
      car: "Haval Jolion 1.5T",
      user: "Shoukat Mekan",
      date: "Dec 07, 2025",
      img: "/8.png",
      stars: 4,
      review:
        "Exterior is beautiful like Kia etc specification price league main sb SE achi he, ab gari itni bari he to patrol to khaye gi Cultus thori e na he, look Kamal ki he khas kar 2025, is main koi kami he hi ni. sunroof or bhut SE cheezen voice command k sath."
    },
    {
      id: 2,
      title: "it is value for money",
      car: "Toyota Corolla Altis Grande X CVT-i 1.8 Beige Interior",
      user: "Zack Bunny 516",
      date: "Dec 06, 2025",
      img: "/9.png",
      stars: 5,
      review:
        "Overall the car is beast I got 9 months buyed it is my best car ever. I want comfort I think I should give 4.5 because it is not 5 star but that's impressive for me that car have to change the shape it's a lot of time and is beast."
    },

    {
      id: 3,
      title: "Value of money",
      car: "Haval Jolion 1.5T",
      user: "Shoukat Mekan",
      date: "Dec 07, 2025",
      img: "/10.png",
      stars: 4,
      review:
        "Exterior is beautiful like Kia etc specification price league main sb SE achi he, ab gari itni bari he to patrol to khaye gi Cultus thori e na he, look Kamal ki he khas kar 2025, is main koi kami he hi ni. sunroof or bhut SE cheezen voice command k sath."
    },
    {
      id: 4,
      title: "it is value for money",
      car: "Toyota Corolla Altis Grande X CVT-i 1.8 Beige Interior",
      user: "Zack Bunny 516",
      date: "Dec 06, 2025",
      img: "/2.jpg",
      stars: 5,
      review:
        "Overall the car is beast I got 9 months buyed it is my best car ever. I want comfort I think I should give 4.5 because it is not 5 star but that's impressive for me that car have to change the shape it's a lot of time and is beast."
    }
  ];


  const brands = [
  { name: "Super Power", logo: "/brand2.png", models: ["SP 70", "Leo 200", "SP 110", "SP 125"] },
  { name: "Hi Speed", logo: "/brand3.png", models: ["CDI SR-70", "EURO-2", "Infinity 150"] },
  { name: "Super Star", logo: "/brand4.png", models: ["CD 70", "200R", "100cc"] },
  { name: "Union Star", logo: "/brand5.png", models: ["US 70", "70 Deluxe", "125"] },
  { name: "Chinese Bikes", logo: "/brand6.png", models: ["70", "OW Ninja", "150cc"] },
  { name: "Metro", logo: "/brand7.png", models: ["MR 70", "E8S Pro", "T9"] },
  { name: "Road Prince", logo: "/brand8.png", models: ["70", "RX3"] },
  { name: "United", logo: "/brand9.png", models: ["US 70", "US 125"] },
  { name: "Honda", logo: "/brand10.png", models: ["CD 70", "CG 125"] },
  { name: "Yamaha", logo: "/brand11.png", models: ["YBR 125", "YB 125Z"] },
  { name: "Suzuki", logo: "/brand12.png", models: ["GS 150"] },
  { name: "Benelli", logo: "/brand13.png", models: ["TRK 502"] },
  { name: "Kawasaki", logo: "/brand14.png", models: ["Ninja 400"] },
  { name: "BMW", logo: "/brand1.jpg", models: ["G310R"] },
]



const bikes = [
  { id: 1, name: "Honda CB 150F", price: "PKR 4.9 - 5.2 lacs", reviews: 387, img: "/bike1.png" },
  { id: 2, name: "Honda CD 70", price: "PKR 1.5 - 1.6 lacs", reviews: 3031, img: "/bike2.png" },
  { id: 3, name: "Honda CG 125", price: "PKR 2.3 - 2.9 lacs", reviews: 5275, img: "/bike3.png" },
  { id: 4, name: "Suzuki GS 150", price: "PKR 4.1 - 4.6 lacs", reviews: 512, img: "/bike4.png" },
  { id: 5, name: "Yamaha YBR 125", price: "PKR 4.4 - 4.9 lacs", reviews: 698, img: "/bike5.png" },
  { id: 6, name: "United US 125", price: "PKR 2.1 - 2.4 lacs", reviews: 245, img: "/bike6.png" },
  { id: 7, name: "Road Prince 70", price: "PKR 1.2 - 1.4 lacs", reviews: 319, img: "/bike7.png" },
  { id: 8, name: "Super Power 125", price: "PKR 2.0 - 2.3 lacs", reviews: 128, img: "/bike8.png" },

  // extra 7 (See More pe)
  { id: 9, name: "Metro MR 70", price: "PKR 1.3 - 1.5 lacs", reviews: 94, img: "/bike9.png" },
  { id: 10, name: "Hi Speed 70", price: "PKR 1.2 - 1.4 lacs", reviews: 112, img: "/bike10.png" },
  { id: 11, name: "Benelli TNT 150", price: "PKR 6.1 - 6.5 lacs", reviews: 76, img: "/bike11.png" },
  { id: 12, name: "Kawasaki Ninja 400", price: "PKR 18 - 20 lacs", reviews: 52, img: "/bike12.png" },
  { id: 13, name: "BMW G310R", price: "PKR 24 - 26 lacs", reviews: 41, img: "/bike13.png" },
  { id: 14, name: "Road Prince Wego 150", price: "PKR 3.1 - 3.4 lacs", reviews: 87, img: "/bike14.png" },
  { id: 15, name: "United Bravo 200", price: "PKR 3.8 - 4.2 lacs", reviews: 66, img: "/bike15.png" },
]

const make = [
  { id: 1, name: "Honda", img: "/brand5.png" },
  { id: 2, name: "Yamaha", img: "/yamaha.png" },
  { id: 3, name: "Suzuki", img: "/brand11.png" },
  { id: 4, name: "Unique", img: "/brand12.png" },
  { id: 5, name: "Metro", img: "/brand7.png" },
  { id: 6, name: "Hi Speed", img: "/brand4.png" },
  { id: 7, name: "United", img: "/brand13.png" },
  { id: 8, name: "Road Prince", img: "/brand8.png" },
  { id: 9, name: "BMW", img: "/BMW.png" },
  { id: 10, name: "Union Star", img: "/brand14.png" },
  { id: 11, name: "Benelli", img: "/makes27.png" },
  { id: 12, name: "Lectrix", img: "/makes25.png" },

  { id: 13, name: "Evee", img: "/brand3.png" },
  { id: 14, name: "Jolta Electric", img: "/makes39.png" },
  { id: 15, name: "KEEWAY", img: "/makes24.png" },
  { id: 16, name: "Super Power", img: "/brand9.png" },
  { id: 17, name: "Kawasaki", img: "/brand6.png" },
  { id: 18, name: "Benling", img: "/makes24.png" },

  { id: 19, name: "Super Star", img: "/brand10.png" },
  { id: 20, name: "Vlektra", img: "/makes1.jpeg" },
  { id: 21, name: "Crown", img: "/brand2.png" },
  { id: 22, name: "Lifan", img: "/makes40.png" },
  { id: 23, name: "Road King", img: "/makes7.png" },
  { id: 24, name: "E Turbo", img: "/makes5.png" },

  { id: 25, name: "Ezbike", img: "/makes35.png" },
  { id: 26, name: "Yadea", img: "/makes13.png" },
  { id: 27, name: "OVERDRIVE", img: "/makes6.jpg" },
  { id: 28, name: "Ghani", img: "/makes36.png" },
  { id: 29, name: "New Asia", img: "/makes10.jpg" },
  { id: 30, name: "Ravi", img: "/makes17.png" },

  { id: 31, name: "Energica", img: "/makes33.png" },
  { id: 32, name: "Knove", img: "/makes38.png" },
  { id: 33, name: "Pakzone Electric", img: "/makes19.png" },
  { id: 34, name: "YJ Future", img: "/makes21.png" },
  { id: 35, name: "MS Jaguar Motorcycle", img: "/makes15.png" },
  { id: 36, name: "Leader", img: "/makes42.png" },
  { id: 37, name: "REVOO", img: "/makes18.png" },

  { id: 38, name: "Taro", img: "/makes30.png" },
  { id: 39, name: "Eveon", img: "/makes34.png" },
  { id: 40, name: "EcoDost", img: "/makes32.png" },
  { id: 41, name: "Okla", img: "/makes16.png" },
  { id: 42, name: "Aima", img: "/makes26.png" },
  { id: 43, name: "DYL", img: "/makes31.png" },
   { id: 44, name: "Vespa", img: "/makes20.png" },
  { id: 45, name: "Aprilia", img: "/makes14.png" },
  { id: 46, name: "QJ Motor", img: "/makes8.jpg" },
  { id: 47, name: "Luyuan", img: "/makes2.jpg" },
   { id: 48, name: "Orevo", img: "/makes4.jpg" },
  { id: 49, name: "Huaguan", img: "/makes37.png" },
  { id: 50, name: "Sun Young", img: "/makes41.png" },
  { id: 51, name: "Elfa", img: "/makes43.png" },
   { id: 52, name: "Zhongfa EV", img: "/makes23.png" },
  { id: 53, name: "SAIGE", img: "/makes9.png" },
  { id: 54, name: "BRG", img: "/makes11.png" },
  { id: 55, name: "Hyder", img: "/makes3.png" },
   { id: 56, name: "Etorqx", img: "/makes12.png" },
  
];

  return (
    <>
   <div className="w-full bg-[#f2f3f3] min-h-screen">
  {/* HERO */}
  <div className="bg-[#243e78] text-white py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-6">
      <h1 className="text-4xl font-semibold">Find Used Bikes In Pakistan</h1>
      <p className="mt-3 text-lg opacity-90">
        Find from over 24,000 Used Bikes across Pakistan
      </p>
    </div>
  </div>

  {/* SEARCH CARD */}
  <div className="px-4 sm:px-6 md:px-6 lg:px-0 -mt-10">
    <div className="max-w-5xl mx-auto">
      <div className="bg-white shadow-lg px-4 sm:px-8 py-6 sm:py-10 rounded-md overflow-visible">

        {/* TABS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-6">
          <button
            onClick={() => { setActiveTab("used"); setShowMore(false); }}
            className={`font-medium ${
              activeTab === "used"
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-500"
            }`}
          >
            Used Bikes
          </button>
          <button
            onClick={() => { setActiveTab("new"); setShowMore(false); }}
            className={`font-medium ${
              activeTab === "new"
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-500"
            }`}
          >
            New Bikes
          </button>
        </div>

        {/* ================= USED BIKES ================= */}
        {activeTab === "used" && (
          <>
            {/* MAIN 3 FIELDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Bike Make or Model"
                className="border border-gray-300 rounded-md px-4 py-3 w-full"
              />
              <select className="border border-gray-300 rounded-md px-4 py-3 text-gray-600 w-full">
                <option>All Cities</option>
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-3 text-gray-600 w-full">
                <option>Price Range</option>
              </select>
            </div>

            {/* MORE SEARCH OPTIONS – FULL */}
            {showMore && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">City Area</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>Select City Area</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Year</label>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <select className="w-1/2 px-4 py-3 text-gray-600 border-r">
                      <option>From</option>
                    </select>
                    <select className="w-1/2 px-4 py-3 text-gray-600">
                      <option>To</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Mileage</label>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <select className="w-1/2 px-4 py-3 text-gray-600 border-r">
                      <option>From</option>
                    </select>
                    <select className="w-1/2 px-4 py-3 text-gray-600">
                      <option>To</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Engine Details</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>All Engine Types</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Engine Capacity</label>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <select className="w-1/2 px-4 py-3 text-gray-600 border-r">
                      <option>From</option>
                    </select>
                    <select className="w-1/2 px-4 py-3 text-gray-600">
                      <option>To</option>
                    </select>
                  </div>
                </div>

                <div></div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Other Details</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>All body types</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2 invisible">hidden</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>Un-Registered</option>
                  </select>
                </div>

                <div></div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Ad Properties</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>Ads with and without pictures</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2 invisible">hidden</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>All Seller Types</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2 invisible">hidden</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600">
                    <option>All Ad Types</option>
                  </select>
                </div>
              </div>
            )}

            {/* USED BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4 w-full">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium w-full sm:w-auto"
              >
                {showMore ? "Less Search Options" : "More Search Options"}
                {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md px-12 py-3 w-full sm:w-auto">
                Search
              </button>
            </div>
          </>
        )}

        {/* ================= NEW BIKES ================= */}
        {activeTab === "new" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="border border-gray-300 rounded-md px-4 py-3 text-gray-600 w-full">
                <option>All Makes</option>
              </select>

              <select className="border border-gray-300 rounded-md px-4 py-3 text-gray-600 w-full">
                <option>All Models</option>
              </select>

              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <select className="w-1/2 px-4 py-3 text-gray-600 border-r">
                  <option>From</option>
                </select>
                <select className="w-1/2 px-4 py-3 text-gray-600">
                  <option>To</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md px-12 py-3">
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>

  {/* INFO SECTION */}
  <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-6 mt-12 mb-16">
    <div className="bg-white rounded-md flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-6 md:py-8 shadow-sm">
      <div className="flex items-center gap-4">
        <Bike className="w-12 h-12 text-blue-700" />
        <div>
          <h3 className="font-semibold text-lg text-blue-800">Sell Your Bike</h3>
          <p className="text-gray-500 text-sm">
            We've got over 50 Lac buyers for you!
          </p>
        </div>
      </div>

      <div className="hidden md:block h-14 w-px bg-gray-300" />
      <div className="block md:hidden h-px w-20 bg-gray-300 my-4" />

      <div className="flex items-center gap-4">
        <Tag className="w-12 h-12 text-green-600" />
        <div>
          <h3 className="font-semibold text-lg text-blue-800">New Bike Prices</h3>
          <p className="text-gray-500 text-sm">Get the latest market prices for all bike brands</p>
        </div>
      </div>
    </div>
  </div>
</div>

    <PopularUsedBikesSlider />

    {/* slider */}
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-16">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold mb-12 text-left">
          Used Bikes by Make
        </h2>

        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 6,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-10">
            {brands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="pl-10 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="text-left">

                  {/* LOGO */}
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* BRAND NAME */}
                  <h3 className="text-blue-800 font-semibold text-lg mb-3 text-center">
                    {brand.name}
                  </h3>

                  {/* MODELS */}
                  <ul className="space-y-2 text-gray-700 text-sm text-center">
                    {brand.models.map((model, i) => (
                      <li key={i}>{model}</li>
                    ))}
                  </ul>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ARROWS */}
          <CarouselPrevious className="-left-8" />
          <CarouselNext className="-right-8" />
        </Carousel>

      </div>
    </section>
 <PopularNewBikes />
{/* bikes make */}

 <div className="px-4 sm:px-6 md:px-10 py-6 bg-[#f2f3f3]">
  <h1 className="text-2xl font-semibold mb-6 mt-6 sm:mt-8 md:mt-10 text-center md:text-left">
    New Bikes by Make
  </h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 justify-items-center">
    {make.map((make) => (
      <div key={make.id} className="flex flex-col items-center gap-2">
        {/* Circle Image */}
        <div className="border border-gray-300 rounded-full w-20 h-20 sm:w-24 sm:h-24 bg-white cursor-pointer flex items-center justify-center overflow-hidden">
          <Image
            src={make.img}
            alt={make.name}
            width={55}
            height={55}
            className="object-contain"
          />
        </div>

        {/* Brand Name */}
        <p className="text-sm font-semibold text-[#003366] hover:text-[#1a73e8] transition duration-200 text-center cursor-pointer">
          {make.name}
        </p>
      </div>
    ))}
  </div>
</div>

 
 <BikeAccessoriesCarousel />


 <div className="bg-gray-100 min-h-[100px] flex flex-col p-4 sm:p-6 md:p-10">

  {/* Heading */}
  <div className="flex justify-between items-center mb-4 max-w-2xl">
    <h1 className="text-2xl font-bold text-gray-800">
      Bike Comparisons
    </h1>
    <a
      href="#"
      className="text-blue-500 font-medium hover:underline ml-2"
    >
      See All Bike Comparisons
    </a>
  </div>

  {/* White Box */}
  <div className="bg-white flex flex-col md:flex-row p-4 rounded shadow-md max-w-2xl">

    {/* LEFT: Main Comparison */}
    <div className="flex flex-col w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">

      {/* Bikes */}
      <div className="relative flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-14">

        {/* Bike 1 */}
        <div className="flex flex-col items-start md:items-center w-32">
          <Image
            src="/2.jpg"
            width={160}
            height={100}
            alt="Yamaha YBR 125"
          />
          <p className="mt-2 text-sm font-semibold text-blue-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
            Yamaha YBR 125
          </p>
        </div>

        {/* VS */}
        <div className="absolute md:relative left-1/2 md:left-auto top-1/2 md:top-auto -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 bg-red-600 text-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center font-bold text-xs">
          VS
        </div>

        {/* Bike 2 */}
        <div className="flex flex-col items-start md:items-center w-32">
          <Image
            src="/1.png"
            width={160}
            height={100}
            alt="Honda CG 125"
          />
          <p className="mt-2 text-sm font-semibold text-blue-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
            Honda CG 125
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 md:mt-12 w-full border border-blue-500 text-blue-500 py-3 rounded text-sm font-medium hover:text-blue-900">
        View Comparison
      </button>
    </div>

    {/* RIGHT: Smaller Comparisons */}
    <div className="w-full md:w-1/2 flex flex-col items-start md:items-center justify-start md:justify-center relative">

      {/* Horizontal Line */}
      <div className="absolute hidden md:block w-4/5 h-[2px] bg-gray-300 top-1/2 -translate-y-1/2"></div>

      {[
        { bike1: "Honda CD 70", bike2: "Yamaha Dhoom YD-70" },
        { bike1: "Yamaha YBR 125", bike2: "Suzuki GS 150" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-start md:items-center mb-6 z-10">
          <p className="text-sm font-medium text-gray-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
            {item.bike1}
          </p>

          <div className="bg-red-600 text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center text-xs font-bold my-2">
            VS
          </div>

          <p className="text-sm font-medium text-gray-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
            {item.bike2}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


     

    <div className="px-4 sm:px-6 md:px-20 py-10 bg-white">

  {/* Top bar */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#333]">Car Reviews</h2>

    <a href="#" className="text-blue-500 text-sm hover:underline">
      Read All Car Reviews
    </a>
  </div>

  {/* Reviews Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">

    {reviews.map((item) => (
      <div key={item.id} className="flex flex-col sm:flex-row gap-4 bg-white border border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition">

        {/* IMAGE */}
        <div className="flex-shrink-0 w-full sm:w-40 h-28 sm:h-25 border border-gray-300 bg-white flex items-center justify-center rounded">
          <Image
            src={item.img}
            alt={item.car}
            width={150}
            height={100}
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-[#1a4fa3]">
            {item.title}
          </h3>

          <p className="text-gray-800 font-medium">{item.car}</p>

          {/* ⭐ Rating + User + Date */}
          <div className="flex flex-wrap items-center gap-2 my-1 text-sm">
            {[...Array(5)].map((_, i) =>
              i < item.stars ? (
                <Star
                  key={i}
                  className="text-orange-500 fill-orange-500 w-5 h-5"
                />
              ) : (
                <StarOff
                  key={i}
                  className="text-gray-400 w-5 h-5"
                />
              )
            )}
            <span className="text-gray-600">{item.user}</span>
            <span className="text-gray-500">{item.date}</span>
          </div>

          {/* REVIEW TEXT */}
          <p className="text-gray-700 text-sm leading-5 mt-2 sm:mt-3">
            {item.review}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>

     
    
    </>
  );
}
