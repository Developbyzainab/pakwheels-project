"use client";
import { useState } from "react";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Search } from 'lucide-react';
import Image from "next/image"
import Featuredusedcars from "@/components/Featuredusedcars"
import { Star, StarOff } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";


const reviews = [
    {
      id: 1,
      title: "Value of money",
      car: "Haval Jolion 1.5T",
      user: "Shoukat Mekan",
      date: "Dec 07, 2025",
      img: "/cover1.jpg",
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
      img: "/cover.jpg",
      stars: 5,
      review:
        "Overall the car is beast I got 9 months buyed it is my best car ever. I want comfort I think I should give 4.5 because it is not 5 star but that's impressive for me that car have to change the shape it's a lot of time and is beast."
    }
  ];


const make = [
  { id: 1, name: "suzuki", img: "/Suzuki.png" },
  { id: 2, name: "Toyta", img: "/Tyota.png" },
  { id: 3, name: "Honda", img: "/Honda.png" },
  { id: 4, name: "KIA", img: "/2.png" },
  { id: 5, name: "Hyundai", img: "/hyundai.png" },
  { id: 6, name: "MG", img: "/c.png" },
  { id: 7, name: "BYD", img: "/BYD.png" },
  { id: 8, name: "Changan", img: "/4.png" },
  { id: 9, name: "BMW", img: "/BMW.png" },
  { id: 10, name: "Audi", img: "/Audi.png" },
  { id: 11, name: "Porsche", img: "/porche.png" },
  { id: 12, name: "Mercedes Benz", img: "/mercedes.png" },

  { id: 13, name: "Prince", img: "/Prince.png" },
  { id: 14, name: "DFSK", img: "/DFSK.png" },
  { id: 15, name: "Isuzu", img: "/Isuzu.png" },
  { id: 16, name: "Haval", img: "/Haval.png" },
  { id: 17, name: "BAIC", img: "/3.png" },
  { id: 18, name: "ORA", img: "/ORA.png" },

  { id: 19, name: "JAC", img: "/jac.png" },
  { id: 20, name: "Peogeot", img: "/7.png" },
  { id: 21, name: "JW-Forland", img: "/JW-Forland.png" },
  { id: 22, name: "Tank", img: "/Tank.png" },
  { id: 23, name: "Chery", img: "/chery.png" },
  { id: 24, name: "JMC", img: "/JMC.png" },

  { id: 25, name: "GUGO", img: "/GUGO.png" },
  { id: 26, name: "Daehan", img: "/Daehan.png" },
  { id: 27, name: "Deepal", img: "/Deepal.png" },
  { id: 28, name: "Alektra", img: "/alektra.png" },
  { id: 29, name: "Zeekr", img: "/Zeekr.jpg" },
  { id: 30, name: "Dongfeng", img: "/Dongfeng.png" },

  { id: 31, name: "JMEV", img: "/JMEV.jpg" },
  { id: 32, name: "Forthing", img: "/Forthing.png" },
  { id: 33, name: "Jaecoo", img: "/Jaecoo.png" },
  { id: 34, name: "Riddara", img: "/ridara.png" },
  { id: 35, name: "Omoda", img: "/Omoda.png" },
  { id: 36, name: "Inverex", img: "/Inverex.png" },

  { id: 37, name: "BAW", img: "/BAW.png" },
  { id: 38, name: "Jetour", img: "/Jetour.png" },
  { id: 39, name: "Tesla", img: "/Teasla.png" },
  { id: 40, name: "Honri", img: "/Honri.png" },
  { id: 41, name: "seres", img: "/Seres.png" }
];


/* ================= popular ================= */
const popular = [
  { name: "Automatic Cars", img: "/c1.svg" },
  { name: "Family Cars", img: "/c2.svg" },
  { name: "5 Seater", img: "/c3.svg" },
  { name: "Small Cars", img: "/c4.svg" },
  { name: "Big Cars", img: "/c5.svg" },
  { name: "Imported Cars", img: "/c6.svg" },
  { name: "Old Cars", img: "/c7.svg" },
  { name: "5 Door", img: "/c8.svg" },
  { name: "4 Door", img: "/c9.svg" },
  { name: "1000cc Cars", img: "/c10.svg" },
  { name: "1300cc Cars", img: "/c11.svg" },
  { name: "Japanese Cars", img: "/c12.svg" },

  { name: "Hybrid Cars", img: "/c13.svg" },
  { name: "Electric Cars", img: "/c14.svg" },
  { name: "Luxury Cars", img: "/c15.svg" },
  { name: "Diesel Cars", img: "/c16.svg" },
  { name: "Petrol Cars", img: "/c17.svg" },
  { name: "Manual Cars", img: "/c18.svg" },
  { name: "4x4 Cars", img: "/c19.svg" },
  { name: "Sports Cars", img: "/c20.svg" },
  { name: "Budget Cars", img: "/c21.svg" },
  { name: "Commercial Cars", img: "/c22.svg" },
  { name: "Used Cars", img: "/c23.svg" },
  { name: "New Cars", img: "/c24.svg" },
];

/* ================= upcoming ================= */
const upcoming = [
  { name: "Toyota", img: "/c25.svg" },
  { name: "Honda", img: "/c26.svg" },
  { name: "Suzuki", img: "/c27.svg" },
  { name: "Hyundai", img: "/c28.svg" },
  { name: "Kia", img: "/c29.svg" },
  { name: "Daihatsu", img: "/c30.svg" },
  { name: "Nissan", img: "/c31.svg" },
  { name: "Mitsubishi", img: "/c32.svg" },

  { name: "BMW", img: "/c33.svg" },
  { name: "Audi", img: "/c34.svg" },
  { name: "Mercedes", img: "/c35.svg" },
  { name: "Lexus", img: "/c36.svg" },
  { name: "Changan", img: "/c37.svg" },
  { name: "Haval", img: "/c38.svg" },
  { name: "MG", img: "/c39.svg" },
  { name: "Peugeot", img: "/c40.svg" },

  { name: "Proton", img: "/c41.svg" },
  { name: "FAW", img: "/c42.svg" },
  { name: "DFSK", img: "/c43.svg" },
  { name: "Isuzu", img: "/c44.svg" },
  { name: "United", img: "/c45.svg" },
  { name: "Prince", img: "/c46.svg" },
  { name: "Tesla", img: "/c47.svg" },
  { name: "Porsche", img: "/c48.svg" },
];

/* ================= newly launched ================= */
const newly = [
  { name: "SUV", img: "/c49.svg" },
  { name: "Sedan", img: "/c50.svg" },
  { name: "Hatchback", img: "/c51.svg" },
  { name: "Coupe", img: "/c52.svg" },
  { name: "Truck", img: "/c53.svg" },
  { name: "Van", img: "/c54.svg" },
  { name: "Crossover", img: "/c55.svg" },
  { name: "Convertible", img: "/c56.svg" },

  { name: "Mini Van", img: "/c57.svg" },
  { name: "Pickup", img: "/c58.svg" },
  { name: "Wagon", img: "/c59.svg" },
  { name: "Micro", img: "/c60.svg" },
  { name: "Compact", img: "/c61.svg" },
  { name: "Luxury", img: "/c62.svg" },
  { name: "Off Road", img: "/c63.svg" },
  { name: "Electric", img: "/c6.svg" },

  { name: "Hybrid", img: "/c9.svg" },
  { name: "Crew Cab", img: "/c16.svg" },
  { name: "Extended Cab", img: "/c19.svg" },
  { name: "Fastback", img: "/c21.svg" },
  { name: "Roadster", img: "/c31.svg" },
  { name: "Panel Van", img: "/c41.svg" },
  { name: "Chassis", img: "/c51.svg" },
  { name: "Utility", img: "/c28.svg" },
];

const bikes = [
  { title: "Honda CB 150F", image: "/b1.webp", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/b2.webp", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/b3.webp", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/b4.webp", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/b5.webp", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/b6.webp", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/b7.webp", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/b8.webp", count: "319 Bikes Listed" },
  { title: "Super Power 125", image: "/b9.webp", count: "128 Bikes Listed" },
  { title: "Hi Speed 70", image: "/b10.webp", count: "94 Bikes Listed" },
]

const bike = [
  { title: "Honda CB 150F", image: "/b11.webp", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/b12.webp", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/b13.webp", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/b14.webp", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/b15.webp", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/b16.webp", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/b17.webp", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/b18.webp", count: "319 Bikes Listed" },
  { title: "Super Power 125", image: "/b19.webp", count: "128 Bikes Listed" },
  { title: "Hi Speed 70", image: "/b20.webp", count: "94 Bikes Listed" },
]
/* ================= DATA ================= */

/* ================= CITY ================= */
const cityData = [
  "Karachi","Lahore","Islamabad","Rawalpindi","Faisalabad","Multan",
  "Hyderabad","Peshawar","Quetta","Sialkot","Gujranwala","Sukkur",
  "Bahawalpur","Sargodha","Abbottabad","Mardan","Swat","Okara",
  "Kasur","Sheikhupura","Jhelum","Gujrat","Rahim Yar Khan","Larkana",
  "Mirpur","Chaman","Kohat","Dera Ghazi Khan","Jacobabad","Turbat",
];

/* ================= MODEL ================= */
const modelData = [
  "Corolla","Civic","City","Alto","Cultus","Wagon R",
  "Yaris","Swift","Hilux","Fortuner","Vitz","Aqua",
  "Mira","Passo","Prius","Land Cruiser","Revo","BR-V",
  "Sportage","Tucson","Sonata","Elantra","Picanto","Stonic",
  "Haval H6","Haval Jolion","MG HS","MG ZS","Oshan X7","Alsvin",
];

/* ================= BUDGET ================= */
const budgetData = [
  "Under 5 Lakh","5 – 10 Lakh","10 – 15 Lakh","15 – 20 Lakh",
  "20 – 25 Lakh","25 – 30 Lakh","30 – 40 Lakh","40 – 50 Lakh",
  "50 – 70 Lakh","70 Lakh – 1 Crore","1 – 2 Crore","Above 2 Crore",
];

/* ================= CATEGORY ================= */
const categoryData = [
  { name: "Automatic Cars", img: "/c1.svg" },
  { name: "Family Cars", img: "/c2.svg" },
  { name: "5 Seater", img: "/c3.svg" },
  { name: "Small Cars", img: "/c4.svg" },
  { name: "Big Cars", img: "/c5.svg" },
  { name: "Imported Cars", img: "/c6.svg" },
  { name: "Old Cars", img: "/c7.svg" },
  { name: "5 Door", img: "/c8.svg" },
  { name: "4 Door", img: "/c9.svg" },
  { name: "1000cc Cars", img: "/c10.svg" },
  { name: "1300cc Cars", img: "/c11.svg" },
  { name: "Japanese Cars", img: "/c12.svg" },

  { name: "Hybrid Cars", img: "/c13.svg" },
  { name: "Electric Cars", img: "/c14.svg" },
  { name: "Luxury Cars", img: "/c15.svg" },
  { name: "Diesel Cars", img: "/c16.svg" },
  { name: "Petrol Cars", img: "/c17.svg" },
  { name: "Manual Cars", img: "/c18.svg" },
  { name: "4x4 Cars", img: "/c19.svg" },
  { name: "Sports Cars", img: "/c20.svg" },
  { name: "Budget Cars", img: "/c21.svg" },
  { name: "Commercial Cars", img: "/c22.svg" },
  { name: "Used Cars", img: "/c23.svg" },
  { name: "New Cars", img: "/c24.svg" },
];

/* ================= MAKE ================= */
const makeData = [
  { name: "Toyota", img: "/c25.svg" },
  { name: "Honda", img: "/c26.svg" },
  { name: "Suzuki", img: "/c27.svg" },
  { name: "Hyundai", img: "/c28.svg" },
  { name: "Kia", img: "/c29.svg" },
  { name: "Daihatsu", img: "/c30.svg" },
  { name: "Nissan", img: "/c31.svg" },
  { name: "Mitsubishi", img: "/c32.svg" },

  { name: "BMW", img: "/c33.svg" },
  { name: "Audi", img: "/c34.svg" },
  { name: "Mercedes", img: "/c35.svg" },
  { name: "Lexus", img: "/c36.svg" },
  { name: "Changan", img: "/c37.svg" },
  { name: "Haval", img: "/c38.svg" },
  { name: "MG", img: "/c39.svg" },
  { name: "Peugeot", img: "/c40.svg" },

  { name: "Proton", img: "/c41.svg" },
  { name: "FAW", img: "/c42.svg" },
  { name: "DFSK", img: "/c43.svg" },
  { name: "Isuzu", img: "/c44.svg" },
  { name: "United", img: "/c45.svg" },
  { name: "Prince", img: "/c46.svg" },
  { name: "Tesla", img: "/c47.svg" },
  { name: "Porsche", img: "/c48.svg" },
];

/* ================= BODY TYPE ================= */
const bodyTypeData = [
  { name: "SUV", img: "/c49.svg" },
  { name: "Sedan", img: "/c50.svg" },
  { name: "Hatchback", img: "/c51.svg" },
  { name: "Coupe", img: "/c52.svg" },
  { name: "Truck", img: "/c53.svg" },
  { name: "Van", img: "/c54.svg" },
  { name: "Crossover", img: "/c55.svg" },
  { name: "Convertible", img: "/c56.svg" },

  { name: "Mini Van", img: "/c57.svg" },
  { name: "Pickup", img: "/c58.svg" },
  { name: "Wagon", img: "/c59.svg" },
  { name: "Micro", img: "/c60.svg" },
  { name: "Compact", img: "/c61.svg" },
  { name: "Luxury", img: "/c62.svg" },
  { name: "Off Road", img: "/c63.svg" },
  { name: "Electric", img: "/c6.svg" },

  { name: "Hybrid", img: "/c9.svg" },
  { name: "Crew Cab", img: "/c16.svg" },
  { name: "Extended Cab", img: "/c19.svg" },
  { name: "Fastback", img: "/c21.svg" },
  { name: "Roadster", img: "/c31.svg" },
  { name: "Panel Van", img: "/c41.svg" },
  { name: "Chassis", img: "/c51.svg" },
  { name: "Utility", img: "/c28.svg" },
];

const offerings = [
  {
    title: "SELL IT FOR ME",
    img: "/offer1.png",
  },
  {
    title: "AUCTION SHEET VERIFICATION",
    img: "/offer2.png",
  },
  {
    title: "CAR INSPECTION",
    img: "/offer3.png",
  },
  {
    title: "CAR INSURANCE",
    img: "/offer4.png",
  },
  {
    title: "CAR FINANCE",
    img: "/offer5.png",
  },
  {
    title: "CAR REGISTRATION",
    img: "/offer6.png",
  },
  {
    title: "OWNERSHIP TRANSFER",
    img: "/offer7.png",
  },
];

/* ================= COMPONENT ================= */
export default function BrowseUsedCars() {
  const [activeTab, setActiveTab] = useState("Category");
  const [slide, setSlide] = useState(0);
  const ITEMS_PER_SLIDE = 12;

  const sliderTabs = ["Category", "Make", "Body Type"];
  const sliderData =
    activeTab === "Category"
      ? categoryData
      : activeTab === "Make"
      ? makeData
      : activeTab === "Body Type"
      ? bodyTypeData
      : [];

  const totalSlides = Math.ceil(sliderData.length / ITEMS_PER_SLIDE);

  return (
    <>

    {/* first section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#071b3a] to-[#0a4a8a]">
      
      {/* CONTENT */}
      <div className="w-full max-w-5xl px-4 text-center text-white">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">
          Find Used Cars in Pakistan
        </h1>
        <p className="text-xs md:text-base text-gray-200 mb-8">
          With thousands of cars, we have just the right one for you
        </p>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row mx-auto max-w-4xl">
          
          {/* Make / Model */}
          <input
            type="text"
            placeholder="Car Make or Model"
            className="w-full md:w-[35%] px-4 py-3 text-sm text-gray-700 outline-none border-b md:border-b-0 md:border-r"
          />

          {/* City */}
          <select className="w-full md:w-[25%] px-4 py-3 text-sm text-gray-700 outline-none border-b md:border-b-0 md:border-r">
            <option>All Cities</option>
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>

          {/* Price */}
          <select className="w-full md:w-[25%] px-4 py-3 text-sm text-gray-700 outline-none border-b md:border-b-0 md:border-r">
            <option>Price Range</option>
            <option>Under 10 Lakh</option>
            <option>10 - 20 Lakh</option>
            <option>20 - 30 Lakh</option>
          </select>

          {/* Search Button */}
          <button className="w-full md:w-[15%] bg-green-500 hover:bg-green-600 flex items-center justify-center py-3">
           
            <Search />
          </button>
        </div>

        {/* ADVANCED FILTER */}
        <div className="mt-6">
          <button className="border border-white px-5 py-2 rounded-md text-xs hover:bg-white hover:text-blue-900 transition">
            Advanced Filter →
          </button>
        </div>
      </div>
    </section>


{/* second section */}

 <section className="w-full py-10 bg-white">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl font-semibold text-center mb-6">
Sell Your Car on PakWheels and Get the Best Price
</h2>


{/* Outer Border */}
<div className="border border-gray-200 p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
{/* Left Card */}
<Card className="md:col-span-1 border-0 shadow-none rounded-none">
<CardContent className="p-6 flex flex-col h-full">
<h3 className="text-xl font-semibold text-blue-700 mb-6">
Sell It Myself!
</h3>


<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3">
<Check className="text-green-600" size={20} />
<span>Post an ad in 2 minutes</span>
</li>
<li className="flex items-center gap-3">
<Check className="text-green-600" size={20} />
<span>20 million users</span>
</li>
<li className="flex items-center gap-3">
<Check className="text-green-600" size={20} />
<span>Connect directly with buyers</span>
</li>
</ul>


<Button className="mt-auto bg-red-600 hover:bg-red-700 rounded-xl py-5 text-base">
Post Your Ad
</Button>
</CardContent>
</Card>


{/* OR Divider */}
<div className="hidden md:flex items-center justify-center">
<div className="flex flex-col items-center">
<div className="h-24 w-px bg-gray-300" />
<span className="my-3 text-gray-500 font-medium">OR</span>
<div className="h-24 w-px bg-gray-300" />
</div>
</div>


{/* Right Card */}
<Card className="md:col-span-1 border-0 shadow-none rounded-none">
<CardContent className="p-6 flex flex-col h-full">
<h3 className="text-xl font-semibold text-blue-700 mb-6">
Sell It For Me
</h3>


<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3">
<Check className="text-green-600" size={20} />
<span>Sell your car without hassle</span>
</li>
<li className="flex items-center gap-3">
<Check className="text-green-600" size={20} />
<span>Free Inspection & Featured ad</span>
</li>
<li className="flex items-center gap-3">
<Check className="text-green-600" size={20} />
<span>Maximize offer with sales agent</span>
</li>
</ul>


<Button className="mt-auto bg-blue-600 hover:bg-blue-700 rounded-xl py-5 text-base">
Help Me Sell My Car!
</Button>
</CardContent>
</Card>
</div>
</div>
</div>
</section>

{/* Browse Used Cars */}

    <section className="bg-[#f2f3f3] py-16 transition-all duration-300 px-15">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10">Browse Used Cars</h2>

        {/* ================= TABS ================= */}
        <div className="flex gap-10 border-b mb-10 text-gray-500">
          {[
            "Category",
            "City",
            "Make",
            "Model",
            "Budget",
            "Body Type",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSlide(0);
              }}
              className={`pb-3 text-sm font-semibold relative transition-all duration-200 ${
                activeTab === tab
                  ? "text-gray-900"
                  : "hover:text-blue-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </div>

       {/* ================= SLIDER (IMAGE STYLE) ================= */}
{sliderTabs.includes(activeTab) && (
  <div className="relative overflow-hidden  ">

    {/* Slides */}
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${slide * 100}%)` }}
    >
      {Array.from({ length: totalSlides }).map((_, sIndex) => (
        <div key={sIndex} className="w-full shrink-0">
          
          {/* GRID 2 x 6 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
            {sliderData
              .slice(
                sIndex * ITEMS_PER_SLIDE,
                sIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
              )
              .map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white rounded-lg h-28 md:h-32 w-40
                    flex flex-col items-center justify-center
                    shadow-sm cursor-pointer
                    transition-all duration-200
                    hover:shadow-md
                  "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-10 md:h-12 mb-2  opacity-90"
                  />
                  <p className="text-sm text-gray-600 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
          </div>

        </div>
      ))}
    </div>

    {/* LEFT ARROW */}
    <button
      onClick={() => setSlide((s) => Math.max(s - 1, 0))}
      disabled={slide === 0}
      className="
        absolute left-0 top-1/2 -translate-y-1/2
         bg-white w-10 h-10 rounded-full text-gray-400
        shadow flex items-center justify-center
        disabled:opacity-40 hover:bg-blue-600 hover:text-white
        -mt-6
      "
    >
       <ChevronLeft />
    </button>

    {/* RIGHT ARROW */}
    <button
      onClick={() => setSlide((s) => Math.min(s + 1, totalSlides - 1))}
      disabled={slide === totalSlides - 1}
      className="
        absolute right-0 top-1/2 -translate-y-1/2
        bg-white w-10 h-10 rounded-full text-gray-400
        shadow flex items-center justify-center
        disabled:opacity-40 hover:bg-blue-600 hover:text-white
        -mt-6 
      "
    >
      <ChevronRight />
    </button>

    {/* DOTS */}
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <span
          key={i}
          onClick={() => setSlide(i)}
          className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
            slide === i ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></span>
      ))}
    </div>
  </div>
)}


        {/* ================= CITY ================= */}
        {activeTab === "City" && (
          <div className="grid grid-cols-6 gap-y-4 gap-x-6">
            {cityData.map((city, i) => (
              <p
                key={i}
                className="text-gray-600 cursor-pointer transition
                hover:text-black hover:font-semibold"
              >
                {city}
              </p>
            ))}
          </div>
        )}

        {/* ================= MODEL ================= */}
        {activeTab === "Model" && (
          <div className="grid grid-cols-6 gap-y-4 gap-x-6">
            {modelData.map((model, i) => (
              <p
                key={i}
                className="text-gray-600 cursor-pointer transition
                hover:text-black hover:font-semibold"
              >
                {model}
              </p>
            ))}
          </div>
        )}

        {/* ================= BUDGET ================= */}
        {activeTab === "Budget" && (
          <div className="grid grid-cols-4 gap-y-4 gap-x-10">
            {budgetData.map((budget, i) => (
              <p
                key={i}
                className="text-gray-600 cursor-pointer transition
                hover:text-black hover:font-semibold"
              >
                {budget}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>


    {/*PakWheels Offerings*/}

    <section className="bg-white py-16 mx-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold mb-10">
          PakWheels Offerings
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-6
                border border-gray-200 rounded-md
                p-6 bg-white
                hover:shadow-md transition
                cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-auto object-contain"
              />

              {/* TEXT */}
              <div>
                <p className="text-blue-700 font-semibold mb-1">
                  PakWheels
                </p>
                <p className="text-gray-900 font-medium tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

{/* Managed by PakWheels */}

    <section className="w-full py-16 px-16 bg-[#f2f3f3]">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
            Managed by PakWheels
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All Bikes on PakWheels
          </a>
        </div>
    
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
                      <div className="relative h-44">
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



{/* featured used cars */}
        <section className="w-full py-16 px-16">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
            Featured Used Cars for Sale
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All Featured Used Cars
          </a>
        </div>
    
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 4,
              }}
              className="relative"
            >
              <CarouselContent className="-ml-6">
                {bike.map((bike, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-white border hover:shadow-md transition">
    
                      {/* IMAGE – NO SIDE SPACING */}
                      <div className="relative h-44">
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

        <Featuredusedcars/>


          {/* new cars by make */}
        <div className="px-4 md:px-10 py-8 bg-[#f2f3f3]">
        
          <h1 className="
            text-2xl font-semibold mb-8
            text-center md:text-left
            md:ml-20
          ">
            New Cars by Make
          </h1>
        
          <div className="
            grid
            grid-cols-2        /* mobile */
            sm:grid-cols-3     /* small screens */
            md:grid-cols-4     /* tablet */
            lg:grid-cols-6     /* desktop */
            gap-6 md:gap-10
            mx-0 md:mx-40
          ">
            {make.map((make) => (
              <div key={make.id} className="flex flex-col items-center gap-2">
        
                {/* Circle Image */}
                <div
                  className="border border-gray-300 rounded-full
                             w-20 h-20 md:w-24 md:h-24
                             bg-white cursor-pointer
                             flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={make.img}
                    alt={make.name}
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
        
                {/* Brand Name */}
                <p className="text-sm font-semibold text-[#003366]
                              hover:text-[#1a73e8]
                              transition duration-200
                              text-center cursor-pointer">
                  {make.name}
                </p>
        
              </div>
            ))}
          </div>
        </div>


{/* comparison */}

        <div className="bg-gray-100 min-h-[100px] flex flex-col p-4 sm:p-6 md:p-10">
        
          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 max-w-4xl mx-auto gap-2 md:gap-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Car Comparisons
            </h1>
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline"
            >
              View All Comparisons
            </a>
          </div>
        
          {/* White Box */}
          <div className="bg-white flex flex-col md:flex-row p-4 md:p-6 rounded shadow-md max-w-4xl mx-auto gap-6">
        
            {/* LEFT: Main Comparison */}
            <div className="flex flex-col w-full md:w-1/2 gap-4">
        
              {/* Cars */}
              <div className="relative flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-6 md:gap-14">
        
                {/* Car 1 */}
                <div className="flex flex-col items-start md:items-center w-32">
                  <Image
                    src="/cover1.jpg"
                    width={160}
                    height={100}
                    alt="Chery Tiggo 8 Pro"
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-semibold text-blue-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
                    Chery Tiggo 8 Pro
                  </p>
                </div>
        
                {/* VS */}
                <div className="absolute md:relative left-1/2 md:left-auto top-1/2 md:top-auto -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 bg-red-600 text-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center font-bold text-xs">
                  VS
                </div>
        
                {/* Car 2 */}
                <div className="flex flex-col items-start md:items-center w-32">
                  <Image
                    src="/cover.jpg"
                    width={160}
                    height={100}
                    alt="Chery Tiggo 4 Pro"
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-semibold text-blue-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
                    Chery Tiggo 4 Pro
                  </p>
                </div>
              </div>
        
              {/* Button */}
              <button className="mt-6 md:mt-12 w-full border border-blue-500 text-blue-500 py-3 rounded text-sm font-medium hover:text-blue-900">
                View Comparison
              </button>
            </div>
        
            {/* RIGHT: Smaller Comparisons */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-center justify-start md:justify-center relative mt-8 md:mt-0">
        
              {/* Horizontal Line */}
              <div className="absolute hidden md:block w-4/5 h-[2px] bg-gray-300 top-1/2 -translate-y-1/2"></div>
        
              {[ 
                { car1: "GUGO GIGI", car2: "Honri Ve" },
                { car1: "Changan Oshan X7", car2: "Chery Tiggo 8 Pro" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start md:items-center mb-6 z-10">
                  <p className="text-sm font-medium text-gray-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
                    {item.car1}
                  </p>
        
                  <div className="bg-red-600 text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center text-xs font-bold my-2">
                    VS
                  </div>
        
                  <p className="text-sm font-medium text-gray-800 whitespace-nowrap hover:text-blue-900 text-left md:text-center">
                    {item.car2}
                  </p>
                </div>
              ))}
        
            </div>
          </div>
        </div>
        

        {/* reviews */}




        {/* reviews */}
        <div className="px-4 sm:px-6 md:px-10 py-10 bg-white">
        
          {/* Top bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#333]">Car Reviews</h2>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Read All Car Reviews
            </a>
          </div>
        
          {/* Reviews Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {reviews.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-4 md:gap-6">
        
                {/* IMAGE */}
                <div className="w-full md:w-40 h-32 border border-gray-300 bg-white flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.car}
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>
        
                {/* RIGHT SIDE CONTENT */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-[#1a4fa3]">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 font-medium">{item.car}</p>
        
                  {/* ⭐ Rating + User + Date */}
                  <div className="flex flex-wrap items-center gap-2 my-1">
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
                    <span className="text-gray-600 text-sm">{item.user}</span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
        
                  {/* REVIEW TEXT */}
                  <p className="text-gray-700 text-sm leading-5 mt-2 md:mt-3">
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




