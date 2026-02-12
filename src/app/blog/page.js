"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Flame } from 'lucide-react';
import Link from "next/link";
import TipsOpinionsSection from "@/components/TipsOpinionsSection";

const TABS = ["Cars", "Bikes", "Accessories"];


const DATA = {
  Cars: [
    {
      id: 1,
      title: "PakWheels Car Floor Mats",
      price: "PKR 5,926",
      image: "/e13.webp",
    },
    {
      id: 2,
      title: "PakWheels Car Sun Shades",
      price: "PKR 1,620",
      image: "/e14.webp",
    },
    {
      id: 3,
      title: "PakWheels Car Cover",
      price: "PKR 12,672",
      image: "/e15.webp",
    },
    
  ],

  Bikes: [
    {
      id: 4,
      title: "PakWheels Bike Helmet",
      price: "PKR 9,500",
      image: "/e8.webp",
    },
    {
      id: 5,
      title: "PakWheels Bike Gloves",
      price: "PKR 3,200",
      image: "/e9.webp",
    },
    {
      id: 6,
      title: "PakWheels Bike Cover",
      price: "PKR 6,300",
      image: "/e10.webp",
    },
   
  ],

  Accessories: [
    {
      id: 7,
      title: "PakWheels Carpet Floor Mats",
      price: "PKR 7,079",
      image: "/e1.png",
    },
    {
      id: 8,
      title: "PakWheels Car Perfume",
      price: "PKR 1,850",
      image: "/e2.jpg",
    },
    {
      id: 9,
      title: "PakWheels Microfiber Cloth",
      price: "PKR 950",
      image: "/e3.webp",
    },
     
  ],
};
const recentPosts = [
  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t1.jpeg", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },
  {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/t2.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },
  {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/t10.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },


   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x2.png", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },


   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x1.webp", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },

   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x3.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },

   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x4.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },


   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x5.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },


   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x6.webp", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },


   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x7.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },

   {
    title: "Locally Assembled GWM TANK 500 HEV – Exclusive Images",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1291,
    category: "CAR LAUNCH",
    image: "/x8.jpg", // Replace with your public folder image path
    description:
      "Sazgar has just launched the locally assembled GWM TANK 500 HEV and PHEV, making them Pakistan's first locally assembled full-size SUVs. So far, PakWheels has reported its price, booking details, and...",
  },

{
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },
  
  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },

  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/x2.png", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/x2.png", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },


  {
    title: "What Do You Get For Rs. 2.25 Crore? GWM TANK 500 PHEV Specs And Features",
    author: "Ahsan Tahir",
    date: "Jan 20, 2026",
    views: 1914,
    category: "CAR LAUNCH",
    image: "/t9.webp", // Replace with your public folder image path
    description:
      "Sazgar has officially launched the locally assembled GWM TANK 500 HEV and PHEV in Pakistan, and we’ve already covered its price, booking and delivery details, waiting period, and shared exclusive images...",
  },
  
];

const guides = [
  {
    title: "Top 11 Most Sold Auto Products At PakWheels Autostore 2025",
    image: "/t8.jpg",
  },
  {
    title: "How to Check and Pay E-Challan in Pakistan: A Guide",
    image: "/t4.webp",
  },
  {
    title: "Why High Beams in Fog Are Dangerous in Pakistan?",
    image: "/t5.jpeg",
  },
  {
    title: "Cold Roads, Foggy Mornings: Car Features for Pakistani...",
    image: "/t6.jpg",
  },
  {
    title: "Interior and Windshield Defogging Mistakes Pakistanis Make",
    image: "/t7.webp",
  },
];


const reviews = [
    {
      title: "Pakistan’s First Sonata N Line Bought By Rajab Butt - ...",
      img: "/e23.jpg",
    },
    {
      title: "JAC T9 Hunter Price Hike Coming Soon? - Discussion &...",
      img: "/e22.jpg",
    },
    {
      title: "Suneel Pushing Limits of Hyundai Sonata N Line – Test...",
      img: "/e21.jpg",
    },
    {
      title: "New Hyundai Sonata N-Line – First look Review by...",
      img: "/e20.jpg",
    },
    {
      title: "Toyota Revo vs JAC T9 Hunter, Which One Wins? - ...",
      img: "/e19.jpg",
    },
  ];

  const tags = [
  "10th Generation Honda Civic",
  "2016 Honda Civic",
  "Atlas Honda",
  "Audi",
  "BMW",
  "cars",
  "Car Sales",
  "Cars in Pakistan",
  "Civic",
  "Corolla",
  "Honda",
  "Honda Atlas",
  "Honda City",
  "honda civic",
  "Hybrid",
  "Hyundai",
  "imported cars",
  "Karachi",
  "Kia Sportage",
  "Lahore",
  "Mercedes",
  "Nissan",
  "Pakistan",
  "Pak Suzuki",
  "pakwheels",
  "PAMA",
  "petrol",
  "Petrol Price",
  "Petrol Price in Pakistan",
  "petrol prices",
  "Suzuki",
  "Suzuki Alto",
  "Suzuki Mehran",
  "Suzuki Swift",
  "Tesla",
  "Toyota",
  "Toyota Corolla",
  "Toyota Pakistan",
  "Toyota Prius",
  "Toyota Yaris",
  "used cars",
  "Yamaha",
  "ٹويوٹا",
  "ٹویوٹا کرولا",
  "ہونڈا سوک",
];


const trendingTexts = [
  "MG U9 Review: Pakistan’s 2.5L Turbo Diesel Pick-Up Truck",
  "Jaecoo J5 Hybrid SUV Launching Soon",
  "Expected Cars In Pakistan 2026",
  "Petrol Prices Reduced By Rs.10",
];


const news = [
  {
    title: "Punjab Approves Rs. 50bn Road And Bus Plan For Rawalpindi",
    image: "/x13.jpg",
    tag: "NEWS",
    author: "Ayesha Ali",
    date: "Jan 27, 2026",
    desc:
      "The Punjab government has approved a Rs. 50 billion mega uplift plan for Rawalpindi, focusing on major road...",
    link: "/news/punjab-road-plan",
  },
];

const newsList = [
  { title: "Europe’s EV Milestone: Electric Cars Overtake Gas Sales", date: "Jan 27, 2026", image: "/news/ev.jpg", link: "/news/ev" },
  { title: "Pakistan’s Auto Industry Is Officially Booming", date: "Jan 27, 2026", image: "/news/auto.jpg", link: "/news/auto" },
  { title: "ADAC 2026 Winter Test: EVs Lose Up to 50% Range in Cold", date: "Jan 27, 2026", image: "/news/winter.jpg", link: "/news/winter" },
  { title: "CM Murad Opens Rs6.1 Billion Korangi Causeway Bridge", date: "Jan 27, 2026", image: "/news/bridge.jpg", link: "/news/bridge" },
];

const events = [
  {
    title: "Karachi, PakWheels Car Mela Is Coming – Register Your Car Now!",
    image: "/x2.png",
    tag: "AUTO EVENTS",
    author: "Ayesha Ali",
    date: "Jan 27, 2026",
    desc:
    "PakWheels is bringing its famous Car Mela to Karachi, and if you are looking to sell your car quickly, at the right…",
    link: "/events/karachi",

  },
];


const sections = [
  {
    title: "Popular Cars",
    links: [
      "Toyota Corolla","Honda Civic","Honda City","Suzuki Mehran",
      "Suzuki WagonR","Suzuki Cultus","Daihatsu Mira","Daihatsu Move",
      "Suzuki Alto","Toyota Vitz","Toyota Aqua","Toyota Prado",
      "Honda Vezel","Honda N Wgn","Honda Fit","Daihatsu Cuore",
    ],
  },
  {
    title: "Browse Cars by City",
    links: [
      "Cars Lahore","Cars Karachi","Cars Islamabad","Cars Rawalpindi",
      "Cars Peshawar","Cars Faisalabad","Cars Multan","Cars Gujranwala",
      "Cars Bahawalpur","Cars Sialkot","Cars Abbottabad","Cars Sargodha",
      "Cars Mardan","Cars Wah Cantt","Cars Hyderabad","Cars Gujrat",
    ],
  },
  {
    title: "Popular Bikes",
    links: [
      "Honda CG125","Honda CD70","Suzuki GD 110S","Yamaha YBR 125",
      "Yamaha YBR 125G","Suzuki GS 150","Yamaha YB 125Z","Benelli 302r",
      "Honda CB 150F","Honda CG 125 Deluxe","Yamaha YZF R1","Yamaha YZF R6",
      "Suzuki GSX-R600","Road Prince Wego 150","Honda Pridor","Suzuki GS 150SE",
    ],
  },
  {
    title: "Top Categories",
    links: [
      "660cc Cars","1000cc Cars","1300cc Cars","Japanese Cars",
      "Cheap Cars","Low Priced Cars","Automatic Cars","Small Cars",
      "Big Cars","Carry Daba","Jeep","Hybrid Cars",
      "Sports Cars","Imported Cars",
    ],
  },
  {
    title: "Top Auto Parts Categories",
    links: [
      "Tyres & Wheels","Audio & Video Accessories","Lights & Electrical","Car Care Accessories",
      "Exterior Parts & Accessories","Engine & Mechanical Parts","Brake Parts","Interior Parts & Accessories",
      "Security Sensors","Oils & Lubricants","Tools & Gadgets","Bike Parts & Accessories",
      "Bicycle Parts & Accessories","Other Parts & Accessories",
    ],
  },
  {
    title: "Top Auto Parts Sub-Categories",
    links: [
      "Alloy Wheels","Bike Parts","Complete Engines","Tyres",
      "Car LCD & Video Displays","Helmets","Woofers","Seat Covers",
      "Speakers","Car Seats","Spoilers & Body Kits","LED Lights",
      "Pressure Washers","Car Door Parts","Amplifiers","HID Lights",
    ],
  },
];

const eventList = [
  { title: "Faisalabad, PakWheels Car Mela is Coming", date: "Jan 20, 2026", image: "/events/faisalabad.png", link: "/events/faisalabad" },
  { title: "Multan, PakWheels Car Mela is Coming", date: "Jan 14, 2026", image: "/events/multan.png", link: "/events/multan" },
  { title: "Don’t Miss Out – PakWheels Car Mela Is Live in Islamabad!", date: "Jan 11, 2026", image: "/events/live.png", link: "/events/islamabad-live" },
  { title: "Islamabad, PakWheels Car Mela is Coming", date: "Jan 6, 2026", image: "/events/islamabad.png", link: "/events/islamabad" },
];

export default function Page() {

  const POSTS_PER_PAGE = 11; // 1 page me kitne posts show karne hain
const [currentPage, setCurrentPage] = useState(1); // current page track karne ke liye
const totalPages = Math.ceil(recentPosts.length / POSTS_PER_PAGE);

// slice the posts according to current page
const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
const currentPosts = recentPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("Cars");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trendingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPaginationButtons = () => {
  const buttons = [];

  if (currentPage < totalPages - 2) {
    // Start mode: first pages
    for (let i = 1; i <= 3; i++) buttons.push(i);
    buttons.push("...");
    buttons.push(totalPages);
    buttons.push("NEXT");
  } else {
    // End mode: after clicking last pages
    buttons.push("PREVIOUS");
    buttons.push(1);
    buttons.push("...");
    for (let i = totalPages - 1; i <= totalPages; i++) buttons.push(i);
    buttons.push("NEXT");
  }

  return buttons;
};


  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-8">

      {/* 🔹 TRENDING BAR */}
      <div className="flex items-center border-b pb-4 mb-6 gap-3">

        <span className="font-bold text-black">TRENDING</span>

        <span className="text-gray-500 text-sm">
          {trendingTexts[current]}
        </span>

        {/* RIGHT CONTROLS */}
        <div className="ml-auto flex items-center gap-2">

          {/* ARROWS */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? trendingTexts.length - 1 : current - 1)
            }
            className="border p-2 cursor-pointer hover:bg-red-600 hover:text-white transition"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => setCurrent((current + 1) % trendingTexts.length)}
            className="border p-2 cursor-pointer hover:bg-red-600 hover:text-white transition"
          >
            <ChevronRight size={16} />
          </button>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 text-sm outline-none w-48"
          />

          <button className="bg-red-600 text-white px-4 py-2 text-sm cursor-pointer hover:bg-red-700">
            SEARCH
          </button>
        </div>
      </div>

      {/* 🔹 IMAGE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* BIG IMAGE */}
        <div className="lg:col-span-2 relative group overflow-hidden cursor-pointer h-105 w-190">
          <Image
            src="/blog1.jpeg"
            width={900}
            height={500}
            className="w-190 h-105 object-cover transition-transform duration-500 group-hover:scale-110"
            alt=""
          />

          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1">
            CAR LAUNCH
          </span>

          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-semibold">
              Jaecoo J5 Price Revealed: Hybrid SUV
            </h2>
            <p className="text-sm opacity-90">
              Ahsan Tahir • Jan 11, 2026
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 -ml-12">

          {/* TOP SMALL */}
          <div className="relative group overflow-hidden cursor-pointer h-60">
            <Image
              src="/blog4.jpeg"
              width={400}
              height={250}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              alt=""
            />

            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
              CAR LAUNCH
            </span>

            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-sm font-semibold">
                Pakistan’s Most Affordable Hybrid SUV
              </h3>
              <p className="text-xs opacity-80">
                Ayesha Habib • Jan 9, 2026
              </p>
            </div>
          </div>

          {/* BOTTOM TWO */}
          <div className="grid grid-cols-2 gap-4">

            <div className="relative group overflow-hidden cursor-pointer h-40 ">
              <Image
                src="/blog2.jpg"
                width={300}
                height={200}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />

              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                Expected Cars In Pakistan 2026
              </div>
            </div>

            <div className="relative group overflow-hidden cursor-pointer">
              <Image
                src="/blog3.png"
                width={300}
                height={200}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />

              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                Government Slashes Petrol Prices
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

{/* recent post  */}

<div className="max-w-7xl mx-10 px-6 py-12 flex flex-col lg:flex-row gap-10 ">

      {/* LEFT SIDE */}
      <div className="flex-1">

        {/* ================= RECENT POSTS HEADER ================= */}
        <div className="relative flex items-center mb-6">

          {/* Title + line + button container */}
          <div className="flex items-center w-full relative z-10">

            {/* Title */}
            <div className="flex items-center gap-2 bg-white pr-4 z-10">
              <span className="w-4 h-4 bg-red-800"></span>
              <h2 className="text-xl font-semibold text-red-800 whitespace-nowrap">
                Recent Posts
              </h2>
            </div>

            {/* Gray line grows between title and button with gap */}
            <div className="flex-grow h-[2px] bg-gray-400 mx-8"></div>

            {/* Urdu Button on the right */}
            <button className="bg-blue-800 text-white px-20 py-3 text-sm font-semibold flex items-center gap-3 rounded">
              <Image
                src="/ur.png"
                alt="Pakistan"
                width={26}
                height={18}
                className="object-contain"
              />
              اردو
            </button>
          </div>
        </div>

        {/* ================= POSTS ================= */}
        <div className="flex flex-col gap-8">
          {currentPosts.map((post, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-4">
              <div className="relative w-full lg:w-64 h-40 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
                <span className="absolute bottom-2 left-2 bg-red-800 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold hover:underline cursor-pointer">
                  {post.title}
                </h3>

                <div className="flex items-center text-gray-500 text-sm mt-1 gap-4">
                  <span>{post.author}</span>
                  <span>• {post.date}</span>
                  <span className="flex items-center gap-1">
                    <Flame className="text-orange-500" /> {post.views}
                  </span>
                </div>

                <p className="text-gray-600 mt-2">
                  {post.description}
                </p>
              </div>
            </div>
          ))}

          <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Pagination */}
     <div className="flex gap-2 mb-6 text-sm items-center">
  {getPaginationButtons().map((p, idx) => {
    if (p === "NEXT") {
      return (
        <button
          key={idx}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-100"
        >
          NEXT &gt;
        </button>
      );
    } else if (p === "PREVIOUS") {
      return (
        <button
          key={idx}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-100"
        >
          PREVIOUS
        </button>
      );
    } else if (p === "...") {
      return (
        <span key={idx} className="px-3 py-1 border border-gray-300 cursor-default">
          …
        </span>
      );
    } else {
      return (
        <button
          key={idx}
          onClick={() => setCurrentPage(p)}
          className={`px-3 py-1 border cursor-pointer ${
            currentPage === p ? "border-red-500 text-red-500" : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          {p.toLocaleString()}
        </button>
      );
    }
  })}
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* NEWS */}
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-xl mb-4">
            <span className="w-3 h-3 bg-red-600 inline-block" /> News
          </h2>

          {news.map((item, i) => (
            <Link key={i} href={item.link} className="block group">
              <div className="relative">
                <Image src={item.image} alt="" width={600} height={350} className="w-full" />
                <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-semibold text-lg mt-3 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {item.author} • {item.date}
              </p>
              <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
            </Link>
          ))}

          <div className="mt-6 space-y-4">
            {newsList.map((n, i) => (
              <Link key={i} href={n.link} className="flex gap-3 group">
                <Image src={n.image} alt="" width={90} height={60} />
                <div>
                  <p className="text-sm group-hover:text-blue-600">{n.title}</p>
                  <p className="text-xs text-gray-500">{n.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* AUTO EVENTS */}
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-xl mb-4">
            <span className="w-3 h-3 bg-red-600 inline-block" /> Auto Events
          </h2>

          {events.map((item, i) => (
            <Link key={i} href={item.link} className="block group">
              <div className="relative">
                <Image src={item.image} alt="" width={600} height={350} className="w-full" />
                <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-semibold text-lg mt-3 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {item.author} • {item.date}
              </p>
            </Link>
          ))}

          <div className="mt-6 space-y-4">
            {eventList.map((e, i) => (
              <Link key={i} href={e.link} className="flex gap-3 group">
                <Image src={e.image} alt="" width={90} height={60} />
                <div>
                  <p className="text-sm group-hover:text-blue-600">{e.title}</p>
                  <p className="text-xs text-gray-500">{e.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-80 mt-12">

        {/* ================= GUIDES HEADER ================= */}
        <div className="relative flex items-center mb-4">

          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-400"></div>

          <div className="relative flex items-center w-full">
            <div className="flex items-center gap-2 bg-white pr-4">
              <span className="w-4 h-4 bg-red-800"></span>
              <h2 className="text-xl font-semibold text-red-800 whitespace-nowrap">
                Guides
              </h2>
            </div>
          </div>
        </div>

        {/* ================= GUIDES LIST ================= */}
        <div className="flex flex-col gap-4">
          {guides.map((guide, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className="relative w-20 h-14 flex-shrink-0">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <p className="text-blue-700 hover:underline cursor-pointer text-sm">
                {guide.title}
              </p>
            </div>
          ))}
        </div>

         {/* ================= Reviews ================= */}
      <div className="mb-6 mt-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 bg-red-700"></span>
          <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
        </div>

        <div className="space-y-4">
          {reviews.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="relative w-24 h-16 flex-shrink-0">
                <Image
                  src={item.img}
                  alt="review"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-blue-700 leading-snug hover:underline cursor-pointer">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Search Cars & Bikes ================= */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 bg-red-700"></span>
          <h2 className="text-xl font-semibold text-red-700">
            Search Cars & Bikes
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="space-y-3">
          <select className="w-full border border-gray-300 px-3 py-2 text-sm">
            <option>Cars</option>
            <option>Bikes</option>
          </select>

          <select className="w-full border border-gray-300 px-3 py-2 text-sm">
            <option>- Select Make -</option>
          </select>

          <select className="w-full border border-gray-300 px-3 py-2 text-sm">
            <option>- Select Model -</option>
          </select>

          <select className="w-full border border-gray-300 px-3 py-2 text-sm">
            <option>- Select Version -</option>
          </select>

          <select className="w-full border border-gray-300 px-3 py-2 text-sm">
            <option>- Price Upto -</option>
          </select>

          <button className="w-full bg-[#1f3b75] text-white py-3 text-sm font-semibold">
            SEARCH
          </button>
        </div>
      </div>

<div className="mt-10 flex flex-col items-start gap-4">
      {/* ================= MAIN BOX ================= */}
      <div className="w-[320px] border border-gray-200 bg-white text-sm">
        {/* Tabs */}
        <div className="grid grid-cols-3 border-b">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-center border-r last:border-r-0 ${
                activeTab === tab
                  ? "bg-white font-semibold"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        <div>
          {DATA[activeTab].map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex gap-2 px-2 py-2 border-b hover:bg-gray-50"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={70}
                height={50}
                className="border"
              />
              <div>
                <p className="text-blue-700 hover:underline leading-tight">
                  {item.title}
                </p>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="text-center py-2">
          <a href="#" className="text-blue-700 hover:underline">
            View All
          </a>
        </div>
      </div>

      {/* ================= SELL BUTTON (SEPARATE, NO BORDER) ================= */}
      <div className="w-[320px] mt-1">
        <button className="w-full bg-[#1f3b77] text-white py-2 font-semibold">
          SELL YOUR ACCESSORY
        </button>
      </div>

      {/* ================= FACEBOOK BOX (SMALLER WIDTH) ================= */}
      <div className="w-[280px] border p-3 bg-white">
        {/* Inner border */}
        <div className="border p-3">
          <Image
            src="/l.png"
            alt="PakWheels"
            width={48}
            height={48}
          />
        </div>

        {/* Name + followers */}
        <a href="#" className="block mt-2 text-blue-700 font-semibold">
          PakWheels.com
        </a>
        <p className="text-xs text-gray-500">4.5M followers</p>

        {/* Facebook follow */}
        <a
          href="#"
          className="mt-2 flex items-center gap-2 bg-gray-100 border px-3 py-2 text-xs hover:bg-gray-200"
        >
          <span className="font-bold text-blue-600 text-sm">f</span>
          <span>Follow Page</span>
        </a>
      </div>
    </div>

    {/* popular tags */}

    <div className="max-w-5xl mt-10">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-3 h-3 bg-red-600"></span>
        <h2 className="text-2xl font-semibold text-red-600">
          Popular Tags
        </h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={`/search?tag=${encodeURIComponent(tag)}`}
            className="border px-3 py-1 text-sm bg-white hover:bg-red-600 hover:text-white transition"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
      </div>
    </div>
     <TipsOpinionsSection />

     <div className="border-t border-gray-200 mx-15">
      {sections.map((section, i) => (
        <div key={i} className="max-w-7xl mx-auto px-6 py-8 border-b border-gray-200">
          <h3 className="text-md font-semibold text-gray-900 mb-4">
            {section.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2">
            {section.links.map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-sm text-blue-400 hover:text-red-700 transition-colors"

              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
        </>
  );
}
