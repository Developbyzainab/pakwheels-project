import NewCarFAQs from "@/components/NewCarFAQs";
import NewCarsDescription from "@/components/NewCarsDescription";
import Image from "next/image";
import { Star, StarOff } from "lucide-react";

export default function NewCarsBox() {

  const  cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      price: "PKR 61.0 - 77.1 lacs",
      reviews: 644,
      stars: 4,
      img: "/cars.png"
    },
    {
      id: 2,
    name: "Suzuki Alto",
    price: "PKR 29.9 - 33.3 lacs",
    reviews: 237,
    stars: 3,
    img: "/cars2.png",
  },
  {
    id: 3,
    name: "Honda City",
    price: "PKR 47.4 - 61.5 lacs",
    reviews: 473,
    stars: 4,
    img: "/cars3.png",
  },
  {
    id: 4,
    name: "Honda Civic",
    price: "PKR 88.3 - 101.0 lacs",
    reviews: 382,
    stars: 4,
    img: "/cars4.jpg",
  },
  {
    id: 5,
    name: "Suzuki Cultus",
    price: "PKR 49.0 - 45.9 lacs",
    reviews: 311,
    stars: 3,
    img: "/cars5.jpg",
  },
  {
     id: 6,
    name: "Toyota Yaris Sedan",
    price: "PKR 46.5 - 64.5 lacs",
    reviews: 201,
    stars: 3,
    img: "/cars6.png",
  },
  {
     id: 7,
    name: "Suzuki Swift",
    price: "PKR 44.6 - 47.2 lacs",
    reviews: 153,
    stars: 4,
    img: "/cars7.jpg",
  },
  {
     id: 8,
    name: "Toyota Fortuner",
    price: "PKR 124.4 - 205 lacs",
    reviews: 192,
    stars: 3,
    img: "/cars8.png",
  },
  ]
// 2nd cars
  const  car = [
    {
      id: 1,
      name: "Toyota Corolla",
      price: "PKR 61.0 - 77.1 lacs",
      reviews: 644,
      stars: 4,
      img: "/cars9.jpg"
    },
    {
      id: 2,
    name: "Suzuki Alto",
    price: "PKR 29.9 - 33.3 lacs",
    reviews: 237,
    stars: 3,
    img: "/cars10.jpg",
  },
  {
    id: 3,
    name: "Honda City",
    price: "PKR 47.4 - 61.5 lacs",
    reviews: 473,
    stars: 4,
    img: "/cars11.jpg",
  },
  {
    id: 4,
    name: "Honda Civic",
    price: "PKR 88.3 - 101.0 lacs",
    reviews: 382,
    stars: 4,
    img: "/cars12.jpg",
  },
  {
    id: 5,
    name: "Suzuki Cultus",
    price: "PKR 49.0 - 45.9 lacs",
    reviews: 311,
    stars: 3,
    img: "/cars13.jpg",
  },
  {
     id: 6,
    name: "Toyota Yaris Sedan",
    price: "PKR 46.5 - 64.5 lacs",
    reviews: 201,
    stars: 3,
    img: "/cars14.jpg",
  },
  {
     id: 7,
    name: "Suzuki Swift",
    price: "PKR 44.6 - 47.2 lacs",
    reviews: 153,
    stars: 4,
    img: "/cars15.jpg",
  },
  {
     id: 8,
    name: "Toyota Fortuner",
    price: "PKR 124.4 - 205 lacs",
    reviews: 192,
    stars: 3,
    img: "/cars16.jpg",
  },
  ]

  // 3rd cars
  const  caR = [
    {
      id: 1,
      name: "Toyota Corolla",
      price: "PKR 61.0 - 77.1 lacs",
      reviews: 644,
      stars: 4,
      img: "/cars17.jpg"
    },
    {
      id: 2,
    name: "Suzuki Alto",
    price: "PKR 29.9 - 33.3 lacs",
    reviews: 237,
    stars: 3,
    img: "/cars18.jpg",
  },
  {
    id: 3,
    name: "Honda City",
    price: "PKR 47.4 - 61.5 lacs",
    reviews: 473,
    stars: 4,
    img: "/cars19.jpg",
  },
  {
    id: 4,
    name: "Honda Civic",
    price: "PKR 88.3 - 101.0 lacs",
    reviews: 382,
    stars: 4,
    img: "/cars20.png",
  },
  {
    id: 5,
    name: "Suzuki Cultus",
    price: "PKR 49.0 - 45.9 lacs",
    reviews: 311,
    stars: 3,
    img: "/cars21.jpg",
  },
  {
     id: 6,
    name: "Toyota Yaris Sedan",
    price: "PKR 46.5 - 64.5 lacs",
    reviews: 201,
    stars: 3,
    img: "/cars22.png",
  },
  {
     id: 7,
    name: "Suzuki Swift",
    price: "PKR 44.6 - 47.2 lacs",
    reviews: 153,
    stars: 4,
    img: "/cars23.jpg",
  },
  {
     id: 8,
    name: "Toyota Fortuner",
    price: "PKR 124.4 - 205 lacs",
    reviews: 192,
    stars: 3,
    img: "/cars24.png",
  },
  ]

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


  return (
    <>
    <div className="w-full bg-[#f3f4f6] h-[600px]">

      {/* Blue Top Section */}
      <div className="w-full bg-[#1d3d80] py-16 text-left pl-15">
        <h1 className="text-3xl font-semibold text-white">
          Find New Cars in Pakistan
        </h1>
        <p className="text-gray-200 mt-3 text-lg mb-5">
          Find information about the latest cars in the market
        </p>
      </div>

      {/* White Search Box */}
      <div className="bg-white max-w-5xl mx-auto -mt-16  shadow-md p-10">

        {/* Inputs Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          
          {/* Make / Model */}
<div className="w-full">
  <input
    type="text"
    placeholder="Make / Model"
    className="w-full border border-gray-200 rounded-md px-5 py-3
               text-gray-700 text-md
               focus:outline-none focus:border-blue-500"
  />
</div>

{/* From */}
<div className="w-full">
  <select
    className="w-full border border-gray-200 rounded-md px-5 py-3
               text-gray-500 text-md
               focus:outline-none focus:border-blue-500
               bg-white"
  >
    <option value="">From</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>

{/* To */}
<div className="w-full">
  <select
    className="w-full border border-gray-200 rounded-md px-5 py-3
               text-gray-500 text-md
               focus:outline-none focus:border-blue-500
               bg-white"
  >
    <option value="">To</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
</div>

        </div>

        {/* Search Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-[#32b44a] text-white text-md px-5 py-3 rounded-md">
            Search
          </button>
        </div>

      </div>

    {/* Lower Box */}


    
<div className="bg-white max-w-5xl mx-auto mt-6 mb-12 border border-gray-200 p-6 md:p-10 
                flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

  {/* Left Side Text */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
    <Image
      src="/calculator.svg"
      width={60}
      height={60}
      alt="Calculator"
      className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
    />

    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
      Calculate the final price that you will pay for your brand new car which includes:
      Ex-Factory Price, <br className="hidden md:block" />
      Freight Charges and applicable Govt. taxes
    </p>
  </div>

  {/* Button */}
  <button className="bg-[#c33737] text-white text-sm md:text-md px-5 py-3 md:py-4 rounded-md w-full md:w-auto hover:bg-red-600 transition">
    On Road Price
  </button>

</div>


    </div>  
   {/* Popular New Cars */}
<div className="
  px-4 py-10 max-w-7xl mx-auto
  mt-60        /* mobile: aur neeche */
  md:mt-0      /* desktop: no change */
">
  <h1 className="text-2xl font-semibold mb-8 text-center md:text-left">
    Popular New Cars
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {cars.map((car) => (
      <div
        key={car.id}
        className="border border-gray-300 rounded-lg bg-white hover:shadow-lg transition cursor-pointer"
      >
        <div className="w-full h-48 relative">
          <Image
            src={car.img}
            alt={car.name}
            fill
            className="object-contain p-4"
          />
        </div>

        <h2 className="text-md font-medium text-blue-900 text-center mt-2">
          {car.name}
        </h2>

        <p className="text-green-600 text-sm font-medium text-center mt-1">
          {car.price}
        </p>

        <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-600 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < car.stars ? "text-yellow-500" : "text-gray-300"}
            >
              ★
            </span>
          ))}
          <span className="ml-1">{car.reviews} Reviews</span>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="px-4 py-10 md:px-10 max-w-7xl mx-auto mt-20">
  <h1 className="text-2xl font-semibold mb-8 text-center md:text-left">
    Newly Launched Cars
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {car.map((c) => (
      <div
        key={c.id}
        className="border border-gray-300 rounded-lg bg-white hover:shadow-lg transition cursor-pointer"
      >
        <div className="w-full h-48 relative">
          <Image
            src={c.img}
            alt={c.name}
            fill
            className="object-contain p-4"
          />
        </div>

        <h2 className="text-md font-medium text-blue-900 text-center mt-2">
          {c.name}
        </h2>

        <p className="text-green-600 text-sm font-medium text-center mt-1">
          {c.price}
        </p>

        <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-600 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < c.stars ? "text-yellow-500" : "text-gray-300"}
            >
              ★
            </span>
          ))}
          <span className="ml-1">{c.reviews} Reviews</span>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="px-4 py-10 md:px-10 max-w-7xl mx-auto mt-20">
  <h1 className="text-2xl font-semibold mb-8 text-center md:text-left">
    Upcoming Cars
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {caR.map((car) => (
      <div
        key={car.id}
        className="border border-gray-300 rounded-lg bg-white hover:shadow-lg transition cursor-pointer"
      >
        <div className="w-full h-48 relative">
          <Image
            src={car.img}
            alt={car.name}
            fill
            className="object-contain p-4"
          />
        </div>

        <h2 className="text-md font-medium text-blue-900 text-center mt-2">
          {car.name}
        </h2>

        <p className="text-green-600 text-sm font-medium text-center mt-1">
          {car.price}
        </p>

        <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-600 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < car.stars ? "text-yellow-500" : "text-gray-300"}
            >
              ★
            </span>
          ))}
          <span className="ml-1">{car.reviews} Reviews</span>
        </div>
      </div>
    ))}
  </div>
</div>



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


{/* Browse cars by body type */}
<div className="w-full py-8 px-4 md:px-10">

  <h1 className="text-[22px] font-semibold mb-6 text-center md:text-left">
    Browse Cars by Other Body Types
  </h1>

  <div className="flex flex-wrap justify-center md:justify-start gap-6">
    {/* Card 1 */}
    <div className="bg-white p-5 w-36 sm:w-40 md:w-44 rounded-md shadow-lg hover:shadow-lg transition">
      <Image
        src="/s.svg"
        width={70}
        height={60}
        alt="Sedan"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Sedan</h1>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-5 w-36 sm:w-40 md:w-44 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/ll.svg"
        width={90}
        height={60}
        alt="Pickup Truck"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Pickup Truck</h1>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-5 w-36 sm:w-40 md:w-44 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/l.svg"
        width={90}
        height={60}
        alt="Hatchback"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Hatchback</h1>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-5 w-36 sm:w-40 md:w-44 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/small.svg"
        width={90}
        height={60}
        alt="Van"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Van</h1>
    </div>

    {/* Card 5 */}
    <div className="bg-white p-5 w-36 sm:w-40 md:w-44 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/sam.svg"
        width={90}
        height={60}
        alt="Coupe"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Coupe</h1>
    </div>
  </div>

</div>

{/* new cars by category */}
<div className="w-full py-8 bg-gray-100 px-4">
  <h1 className="text-[22px] font-semibold mb-6 ml-15 mt-5">
    Browse Cars by Other Body Types
  </h1>

  <div className="flex flex-wrap gap-6 ml-30 mt-15 mb-20m cursor-pointer">
    {/* Card 1 */}
    <div className="bg-white p-5 w-40 rounded-md shadow-lg hover:shadow-lg transition">
      <Image
        src="/s.svg"
        width={70}
        height={60}
        alt="Sedan"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Sedan</h1>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-5 w-40 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/ll.svg"
        width={90}
        height={60}
        alt="Pickup Truck"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Pickup Truck</h1>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-5 w-40 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/l.svg"
        width={90}
        height={60}
        alt="Hatchback"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Hatchback</h1>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-5 w-40 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/small.svg"
        width={90}
        height={60}
        alt="Van"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Van</h1>
    </div>

    {/* Card 5 */}
    <div className="bg-white p-5 w-40 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/sam.svg"
        width={90}
        height={60}
        alt="Coupe"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Coupe</h1>
    </div>

     <div className="bg-white p-5 w-40 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/sam.svg"
        width={90}
        height={60}
        alt="Coupe"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Coupe</h1>
    </div>


     <div className="bg-white p-5 w-40 rounded-md shadow-md hover:shadow-lg transition">
      <Image
        src="/sam.svg"
        width={90}
        height={60}
        alt="Coupe"
        className="mx-auto w-20 h-12"
      />
      <h1 className="text-center mt-3 font-medium">Coupe</h1>
    </div>
  </div>
</div>


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



<div className="min-h-screen bg-white">
<div className="max-w-6xl mx-auto px-6 py-16">
<h1 className="text-3xl font-semibold text-gray-800 mb-12">
New Car Prices And Dealers
</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
{/* Left Column */}
<div>
<h2 className="text-xl font-medium text-gray-700 mb-6">
Suzuki Car Prices
</h2>
<ul className="space-y-4 text-gray-600">
<li>Toyota Car Prices</li>
<li>Honda Car Prices</li>
<li>KIA Car Prices</li>
<li>Hyundai Car Prices</li>
<li>BYD Car Prices</li>
</ul>


<button className="mt-8 px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
View All Car Prices
</button>
</div>


{/* Right Column */}
<div>
<h2 className="text-xl font-medium text-gray-700 mb-6">
Toyota Dealers
</h2>
<ul className="space-y-4 text-gray-600">
<li>Suzuki Dealers</li>
<li>Honda Dealers</li>
<li>BMW Dealers</li>
<li>Changan Dealers</li>
<li>FAW Dealers</li>
</ul>


<button className="mt-8 px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
View All Dealers
</button>
</div>
</div>
</div>
</div>

{/* insurance section 1 */}

<div className="bg-gray-50 py-16">
<div className="max-w-6xl mx-auto px-12">
{/* Header */}
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-semibold text-gray-800">
Banks for New Cars Financing
</h2>
<a
href="#"
className="text-blue-500 hover:underline text-base"
>
Car Insurance Calculator
</a>
</div>


{/* Logos Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 justify-items-center">
{[
{ src: "/faysal_bank.png", alt: "Pak Qatar Takaful" },
{ src: "/mcb.png", alt: "IGI General" },
{ src: "/dubai.png", alt: "TPL Insurance" },
{ src: "/bb.png", alt: "Jubilee Insurance" },
{ src: "/al_baraka.png", alt: "UIC Pakistan" },
{ src: "/bank_alfalah.png", alt: "EFU General" },
].map((item, index) => (
<div
key={index}
className="border border-gray-300 rounded-md flex items-center justify-center h-32 w-full max-w-[160px] bg-white hover:shadow-md transition"
>
<Image
src={item.src}
alt={item.alt}
width={120}
height={80}
className="object-contain"
/>
</div>
))}
</div>
</div>
</div>


{/* insurance section 2 */}

<div className="py-16">
<div className="max-w-6xl mx-auto px-12">
{/* Header */}
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-semibold text-gray-800">
Car Insurance Companies
</h2>
<a
href="#"
className="text-blue-500 hover:underline text-base"
>
Car Insurance Calculator
</a>
</div>


{/* Logos Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 justify-items-center">
{[
{ src: "/pak_qatar.png", alt: "Pak Qatar Takaful" },
{ src: "/igi.png", alt: "IGI General" },
{ src: "/TPL.png", alt: "TPL Insurance" },
{ src: "/jubilee.png", alt: "Jubilee Insurance" },
{ src: "/UIC.png", alt: "UIC Pakistan" },
{ src: "/EFU.png", alt: "EFU General" },
].map((item, index) => (
<div
key={index}
className="border border-gray-300 rounded-md flex items-center justify-center h-32 w-full max-w-[160px] bg-white hover:shadow-md transition"
>
<Image
src={item.src}
alt={item.alt}
width={120}
height={80}
className="object-contain"
/>
</div>
))}
</div>
</div>
</div>
<NewCarFAQs />
<NewCarsDescription />

    </>
  );
}

