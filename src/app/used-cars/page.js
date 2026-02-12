"use client";
import Image from "next/image";
import { useState } from "react";
import CardPage from "@/components/CarsPage";
import InspectionBanner from "@/components/InspectionBanner";
import FeaturedAd from "@/components/FeaturedAd";
import NotifyMe from "@/components/NotifyMe";
import SellAdPage from "@/components/SellAdPage";
import BrowseMoreUsedCars from "@/components/BrowseMoreUsedCars";



export default function CarsPage() {
  const [openFilter, setOpenFilter] = useState(true);
  const [openKeyword, setOpenKeyword] = useState(true);
  const [openCity, setOpenCity] = useState(true);

  const [openCityArea, setOpenCityArea] = useState(false);
const [selectedCityArea, setSelectedCityArea] = useState("");

const [openMake, setOpenMake] = useState(false);
const [selectedMake, setSelectedMake] = useState("");

const [openPrice, setOpenPrice] = useState(false);
const [priceRange, setPriceRange] = useState({ min: "", max: "" });

// YEAR Filter
const [openYear, setOpenYear] = useState(false);
const [yearFrom, setYearFrom] = useState("");
const [yearTo, setYearTo] = useState("");

// Mileage Filter
const [openMileage, setOpenMileage] = useState(false);
const [mileageFrom, setMileageFrom] = useState("");
const [mileageTo, setMileageTo] = useState("");

// Registered In
const [openRegistered, setOpenRegistered] = useState(false);
const [selectedRegistered, setSelectedRegistered] = useState([]);

// Trusted Cars
const [openTrusted, setOpenTrusted] = useState(false);
const [selectedTrusted, setSelectedTrusted] = useState([]);


// Transmission
const [openTransmission, setOpenTransmission] = useState(false);
const [selectedTransmission, setSelectedTransmission] = useState([]);

// Color
const [openColor, setOpenColor] = useState(false);
const [selectedColor, setSelectedColor] = useState([]);

// Engine Type
const [openEngineType, setOpenEngineType] = useState(false);
const [selectedEngineType, setSelectedEngineType] = useState([]);

// Engine CC
const [openEngineCC, setOpenEngineCC] = useState(false);
const [EngineCCFrom, setEngineCCFrom] = useState("");
const [EngineCCTo, setEngineCCTo] = useState("");


// Assembly
const [openAssembly, setOpenAssembly] = useState(false);
const [selectedAssembly, setSelectedAssembly] = useState([]);

// Body Type
const [openBodyType, setOpenBodyType] = useState(false);
const [selectedBodyType, setSelectedBodyType] = useState([]);

// Doors
const [openDoors, setOpenDoors] = useState(false);
const [selectedOpenDoors, setSelectedOpenDoors] = useState([]);

// Seating Capacity
const [openSeating, setOpenSeating] = useState(false);
const [selectedSeating, setSelectedSeating] = useState([]);

// Model Category
const [openModelCategory, setOpenModelCategory] = useState(false);
const [selectedModelCategory, setSelectedModelCategory] = useState([]);

// Seller Type
const [openSellerType, setOpenSellerType] = useState(false);
const [selectedSellerType, setSelectedSellerType] = useState([]);

// Picture Availability
const [openPictureAvailability, setOpenPictureAvailability] = useState(false);
const [selectedPictureAvailability, setSelectedPictureAvailability] = useState([]);

// Video Availability
const [openVideoAvailability, setOpenVideoAvailability] = useState(false);
const [selectedVideoAvailability, setSelectedVideoAvailability] = useState([]);

// Ad Type
const [openAdType, setOpenAdType] = useState(false);
const [selectedAdType, setSelectedAdType] = useState([]);

 const [openIndex, setOpenIndex] = useState(null);

  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [showCityForm, setShowCityForm] = useState(false);

  const allCities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Peshawar",
    "Multan",
    "Quetta",
    "Sialkot",
  ];

const cars = [
  {
    id: 1,
    title: "Suzuki Alto VXR 2022",
    city: "Lahore",
    year: 2022,
    km: "28,000 km",
    fuel: "Petrol",
    engine: "660cc",
    transmission: "Automatic",
    updated: "2 days ago",
    price: "PKR 25.5 lacs",
    images: 11,
    img: "/img1.webp",
  },
  {
    id: 2,
    title: "Toyota Aqua 2016 S Package",
    city: "Islamabad",
    year: 2016,
    km: "95,000 km",
    fuel: "Hybrid",
    engine: "1500cc",
    transmission: "Automatic",
    updated: "5 hours ago",
    price: "PKR 34.2 lacs",
    images: 9,
    img: "/img2.webp",
  },
  {
    id: 3,
    title: "Honda City Aspire 2019",
    city: "Karachi",
    year: 2019,
    km: "54,000 km",
    fuel: "Petrol",
    engine: "1300cc",
    transmission: "Manual",
    updated: "1 hour ago",
    price: "PKR 38.7 lacs",
    images: 8,
    img: "/img.webp",
  },

  {
    id: 4,
    title: "Kia Sportage 2021",
    city: "Faisalabad",
    year: 2021,
    km: "32,000 km",
    fuel: "Petrol",
    engine: "2000cc",
    transmission: "Automatic",
    updated: "3 days ago",
    price: "PKR 55 lacs",
    images: 10,
    img: "/img5.webp",
  },

  {
    id: 5,
    title: "Honda Civic 2020",
    city: "Lahore",
    year: 2020,
    km: "40,000 km",
    fuel: "Petrol",
    engine: "1800cc",
    transmission: "Automatic",
    updated: "1 day ago",
    price: "PKR 42 lacs",
    images: 12,
    img: "/img6.webp",
  } 
];

 const faqs = [
    "How many used cars are available for sale in Lahore?",
    "What is the starting price of a used car in Lahore?",
    "What are the popular used car models for sale in Lahore?",
  ];

  return (
   <div className="w-full min-h-screen bg-[#f3f4f6]">
  <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Cars for sale in Lahore
        </h1>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Home / Used Cars / Cars for sale in Lahore
        </p>

        {/* ---------- SIDEBAR + RIGHT CONTENT ---------- */}
       <div className="flex flex-col lg:flex-row gap-6 w-full overflow-x-hidden">



          {/* ---------------- SIDEBAR ---------------- */}
          <aside className="w-full lg:w-64 bg-white h-fit hidden lg:block">


            {/* TOP HEADER */}
            <p className="w-full bg-[#518ecb] text-white py-3  text-[12px] font-semibold mb-4 pl-4">
              SHOW RESULTS BY:
            </p>

            {/* ---------- SEARCH FILTERS ---------- */}
            <div className="border-b border-gray-300 pb-3.5 mb-4 text-[13px] ">
              <div
                className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
                onClick={() => setOpenFilter(!openFilter)}
              >
                <p className="font-semibold text-gray-700 ">SEARCH FILTERS</p>
                <span className="text-[12px]">{openFilter ? "▲" : "▼"}</span>
              </div>

              {openFilter && (
                <div className="mt-3">
                  {selectedCity && (
                    <div className="flex justify-between  px-4 py-2 text-[12px]">
                      <span>{selectedCity}</span>

                      <span
                        className="text-white text-[12px] w-5 text-center bg-[#518ecb] cursor-pointer rounded-xl font-bold"
                        onClick={() => setSelectedCity("")}
                      >
                        ✕
                      </span>
                    </div>
                  )}

                  {/* CLEAR ALL */}
                  <p
                    className="text-[#518ecb] text-[12px] mt-1 ml-4 cursor-pointer"
                    onClick={() => {
                      setSelectedCity("");
                      setOpenFilter(false);
                      setOpenKeyword(false);
                      setOpenCity(false);
                    }}
                  >       
                    Clear All
                  </p>
                </div>
              )}
            </div>

            {/* ---------- SEARCH BY KEYWORD ---------- */}
            <div className=" pb-3 mb-4 text-[13px]">
              <div
                className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
                onClick={() => setOpenKeyword(!openKeyword)}
              >
                <p className="font-semibold text-gray-700">SEARCH BY KEYWORD</p>
                <span className="text-[12px]">{openKeyword ? "▲" : "▼"}</span>
              </div>

              {openKeyword && (
                <div className="mt-5 relative w-50 ml-5">
                  <input
                    type="text"
                    placeholder="e.g. Honda in Lahore"
                    className="border p-1.5 rounded w-full text-[13px] pr-12"
                  />

                  {/* GO BUTTON INSIDE INPUT */}
                  <button className="absolute  bg-blue-900 text-white px-2 py-2 text-xs ml-[-33px]">
                    Go
                  </button>
                </div>
              )}
            </div>

            {/* ---------- CITY SECTION ---------- */}
            <div className="text-[13px] border-t border-gray-300 pt-3">
              <div
                className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
                onClick={() => setOpenCity(!openCity)}
              >
                <p className="font-semibold text-gray-700">CITY</p>
                <span className="text-[12px]">{openCity ? "▲" : "▼"}</span>
              </div>

              {openCity && (
                <div className="mt-3 ml-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedCity === "Lahore"}
                      onChange={() => setSelectedCity("Lahore")}
                    />
                    Lahore
                  </label>

                  <p
                    className="text-blue-600 text-sm cursor-pointer mt-1"
                    onClick={() => setShowCityForm(true)}
                  >
                    more choices...
                  </p>
                </div>

                
              )}
              
            </div>
            {/* ---------- CITY AREA SECTION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenCityArea(!openCityArea)}
  >
    <p className="font-semibold text-gray-700">CITY AREA</p>
    <span className="text-[12px]">{openCityArea ? "▲" : "▼"}</span>
  </div>

  {openCityArea && (
    <div className="mt-3 ml-4 space-y-2">
      {[
        { name: "Johar Town", count: "1,053" },
        { name: "DHA Defence", count: "609" },
        { name: "Bahria Town", count: "347" },
        { name: "Allama Iqbal Town", count: "297" },
        { name: "Gulberg", count: "265" },
        { name: "Cantt", count: "259" },
      ].map((area) => (
        <label className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            {area.name}
          </div>
          <span className="text-[11px] bg-gray-200 px-2 rounded-full text-gray-600">
            {area.count}
          </span>
        </label>
      ))}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">more choices...</p>
    </div>
  )}
</div>



{/* ---------- MAKE SECTION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenMake(!openMake)}
  >
    <p className="font-semibold text-gray-700">MAKE</p>
    <span className="text-[12px]">{openMake ? "▲" : "▼"}</span>
  </div>

  {openMake && (
    <div className="mt-3 ml-4 space-y-2">
      {[
        { name: "Suzuki", count: "3,564" },
        { name: "Honda", count: "2,850" },
        { name: "Toyota", count: "2,778" },
        { name: "Daihatsu", count: "610" },
        { name: "Hyundai", count: "524" },
      ].map((make) => (
        <label className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            {make.name}
          </div>
          <span className="text-[11px] bg-gray-200 px-2 rounded-full text-gray-600">
            {make.count}
          </span>
        </label>
      ))}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">more choices...</p>
    </div>
  )}
</div>

{/* ---------- PRICE RANGE ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4 pb-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenPrice(!openPrice)}
  >
    <p className="font-semibold text-gray-700">PRICE RANGE</p>
    <span className="text-[12px]">{openPrice ? "▲" : "▼"}</span>
  </div>

  {openPrice && (
    <div className="mt-4 px-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="From"
          className="border rounded p-2 w-full text-[12px]"
        />
        <input
          type="text"
          placeholder="To"
          className="border rounded p-2 w-full text-[12px]"
        />
        <button className="bg-blue-900 text-white px-4 py-2 text-xs rounded">
          Go
        </button>
      </div>
    </div>
  )}
</div>


{/* ---------- YEAR SECTION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenYear(!openYear)}
  >
    <p className="font-semibold text-gray-700">YEAR</p>
    <span className="text-[12px]">{openYear ? "▲" : "▼"}</span>
  </div>

  {openYear && (
    <div className="mt-3 px-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="From"
          className="border p-1.5 rounded w-full text-sm"
          value={yearFrom}
          onChange={(e) => setYearFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="To"
          className="border p-1.5 rounded w-full text-sm"
          value={yearTo}
          onChange={(e) => setYearTo(e.target.value)}
        />
        <button className="bg-blue-900 text-white px-3 rounded text-xs">
          Go
        </button>
      </div>
    </div>
  )}
</div>

{/* ---------- MILEAGE SECTION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenMileage(!openMileage)}
  >
    <p className="font-semibold text-gray-700">MILEAGE (KM)</p>
    <span className="text-[12px]">{openMileage ? "▲" : "▼"}</span>
  </div>

  {openMileage && (
    <div className="mt-3 px-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="From"
          className="border p-1.5 rounded w-full text-sm"
          value={mileageFrom}
          onChange={(e) => setMileageFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="To"
          className="border p-1.5 rounded w-full text-sm"
          value={mileageTo}
          onChange={(e) => setMileageTo(e.target.value)}
        />
        <button className="bg-blue-900 text-white px-3 rounded text-xs">
          Go
        </button>
      </div>
    </div>
  )}
</div>


{/* ---------- REGISTERED IN SECTION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenRegistered(!openRegistered)}
  >
    <p className="font-semibold text-gray-700">REGISTERED IN</p>
    <span className="text-[12px]">{openRegistered ? "▲" : "▼"}</span>
  </div>

  {openRegistered && (
    <div className="mt-3 ml-4">
      {["Punjab", "Sindh", "Lahore", "Un-Registered", "Islamabad"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedRegistered.includes(item)}
              onChange={() => {
                setSelectedRegistered((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>

{/* ---------- TRUSTED CARS SECTION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4 mb-10">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenTrusted(!openTrusted)}
  >
    <p className="font-semibold text-gray-700">TRUSTED CARS</p>
    <span className="text-[12px]">{openTrusted ? "▲" : "▼"}</span>
  </div>

  {openTrusted && (
    <div className="mt-3 ml-4">
      {[
        "PakWheels Inspected",
        "PakWheels Certified",
        "Auction Sheet Verified",
        "Managed by PakWheels",
      ].map((item) => (
        <label key={item} className="flex items-center gap-2 text-sm mb-1">
          <input
            type="checkbox"
            checked={selectedTrusted.includes(item)}
            onChange={() =>
              setSelectedTrusted((prev) =>
                prev.includes(item)
                  ? prev.filter((x) => x !== item)
                  : [...prev, item]
              )
            }
          />
          {item}
        </label>
      ))}
    </div>
  )}
</div>

{/* ---------- TRANSMISSION ---------- */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenTransmission(!openTransmission)}
  >
    <p className="font-semibold text-gray-700">TRANSMISSION</p>
    <span className="text-[12px]">{openTransmission ? "▲" : "▼"}</span>
  </div>

  {openTransmission && (
    <div className="mt-3 ml-4">
      {[
        { name: "Automatic", count: 7972 },
        { name: "Manual", count: 5016 },
      ].map((item) => (
        <label key={item.name} className="flex items-center gap-2 text-sm mb-1">
          <input
            type="checkbox"
            checked={selectedTransmission.includes(item.name)}
            onChange={() =>
              setSelectedTransmission((prev) =>
                prev.includes(item.name)
                  ? prev.filter((x) => x !== item.name)
                  : [...prev, item.name]
              )
            }
          />
          {item.name}
          <span className="ml-auto mr-4 bg-gray-100 px-2 rounded-full text-[11px]">
            {item.count}
          </span>
        </label>
      ))}
    </div>
  )}
</div>


{/* ---------- COLOR ---------- */}

<div className="text-[13px] border-t border-gray-300 pt-3 mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenColor(!openColor)}
  >
    <p className="font-semibold text-gray-700">COLOR</p>
    <span className="text-[12px]">{openColor ? "▲" : "▼"}</span>
  </div>

  {openColor && (
    <div className="mt-3 ml-4">
      {["white", "Black", "Silver", "Grey", "Unlisted"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedColor.includes(item)}
              onChange={() => {
                setSelectedRegistered((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>


{/* engine type */}


<div className="text-[13px]   mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc]"
    onClick={() => setOpenEngineType(!openEngineType)}
  >
    <p className="font-semibold text-gray-700">ENGINE TYPE</p>
    <span className="text-[12px]">{openEngineType ? "▲" : "▼"}</span>
  </div>

  {openEngineType && (
    <div className="mt-3 ml-4">
      {["Punjab", "Sindh", "Lahore", "Un-Registered", "Islamabad"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedEngineType.includes(item)}
              onChange={() => {
                setSelectedEngineType((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>

{/* engine capacity */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-3">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenEngineCC(!openEngineCC)}
  >
    <p className="font-semibold text-gray-700">ENGINE CAPACITY (CC)</p>
    <span className="text-[12px]">{openEngineCC ? "▲" : "▼"}</span>
  </div>

  {openEngineCC && (
    <div className="mt-3 px-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="From"
          className="border p-1.5 rounded w-full text-sm"
          value={EngineCCFrom}
          onChange={(e) => setEngineCCFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="To"
          className="border p-1.5 rounded w-full text-sm"
          value={EngineCCTo}
          onChange={(e) => setEngineCCTo(e.target.value)}
        />
        <button className="bg-blue-900 text-white px-3 rounded text-xs">
          Go
        </button>
      </div>
    </div>
  )}
</div>




{/* assembly */}

<div className="text-[13px] mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 "
    onClick={() => setOpenAssembly(!openAssembly)}
  >
    <p className="font-semibold text-gray-700">ASSEMBLY</p>
    <span className="text-[12px]">{openAssembly ? "▲" : "▼"}</span>
  </div>

  {openAssembly && (
    <div className="mt-3 ml-4">
      {["Punjab", "Sindh", "Lahore", "Un-Registered", "Islamabad"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedAssembly.includes(item)}
              onChange={() => {
                setSelectedAssembly((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>


{/* BODY TYPE */}
<div className="text-[13px] border-t border-gray-300 pt-3">
  {/* Header */}
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenBodyType(!openBodyType)}
  >
    <p className="font-semibold text-gray-700">BODY TYPE</p>
    <span className={`text-[12px] transition-transform ${openBodyType ? "rotate-90" : ""}`}>
      ▶
    </span>
  </div>

  {/* Options */}
  {openBodyType && (
    <div className="px-4 py-2 space-y-4">

      {[
        { name: "Hatchback", count: 4624, img: "/img.png" },
        { name: "Sedan", count: 4077, img: "/mg.png" },
        { name: "SUV", count: 1093, img: "/g.png" },
        { name: "Crossover", count: 1070, img: "/m.png" },
      ].map((item, index) => (
        <label key={index} className="flex items-center gap-3 cursor-pointer">
          
          {/* Checkbox */}
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />

          {/* Icon + Small Text */}
          <div className="flex flex-col items-center w-12">
            <img src={item.img} alt={item.name} className="w-10 opacity-70" />
            <p className="text-[10px] text-gray-500 mt-1">{item.name}</p>
          </div>

          {/* Count */}
          <span className="text-gray-600 text-[11px] bg-gray-200 rounded-full px-2 py-[1px] ml-auto">
            {item.count.toLocaleString()}
          </span>

        </label>
      ))}

      <p className="text-blue-600 underline text-[12px] mt-1 cursor-pointer">
        more choices...
      </p>
    </div>
  )}
</div>




{/* number of doors */}

<div className="text-[13px]   mt-3">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc]"
    onClick={() => setOpenDoors(!openDoors)}
  >
    <p className="font-semibold text-gray-700">NUMBER OF DOORS</p>
    <span className="text-[12px]">{openDoors ? "▲" : "▼"}</span>
  </div>

  {openDoors && (
    <div className="mt-3 ml-4">
      {["Punjab", "Sindh", "Lahore", "Un-Registered", "Islamabad"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedOpenDoors.includes(item)}
              onChange={() => {
                setSelectedOpenDoors((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>


{/* seating capacity */}
<div className="text-[13px] border-t border-gray-300 pt-3 mt-3">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenSeating(!openSeating)}
  >
    <p className="font-semibold text-gray-700">SEATING CAPACITY</p>
    <span className="text-[12px]">{openSeating ? "▲" : "▼"}</span>
  </div>

  {openSeating && (
    <div className="mt-3 ml-4">
      {["Punjab", "Sindh", "Lahore", "Un-Registered", "Islamabad"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedSeating.includes(item)}
              onChange={() => {
                setSelectedSeating((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>


{/* model category */}

<div className="text-[13px]   mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] "
    onClick={() => setOpenModelCategory(!openModelCategory)}
  >
    <p className="font-semibold text-gray-700">MODEL CATEGORY</p>
    <span className="text-[12px]">{openModelCategory ? "▲" : "▼"}</span>
  </div>

  {openModelCategory && (
    <div className="mt-3 ml-4">
      {["Punjab", "Sindh", "Lahore", "Un-Registered", "Islamabad"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedModelCategory.includes(item)}
              onChange={() => {
                setSelectedModelCategory((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>

{/* seeler type */}

<div className="text-[13px] border-t border-gray-300 pt-3 mt-3">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenSellerType(!openSellerType)}
  >
    <p className="font-semibold text-gray-700">SELLER TYPE</p>
    <span className="text-[12px]">{openSellerType ? "▲" : "▼"}</span>
  </div>

  {openSellerType && (
    <div className="mt-3 ml-4">
      {["Individuals", "Dealers"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedSellerType .includes(item)}
              onChange={() => {
                setSelectedSellerType((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>


{/* picture availability */}

<div className="text-[13px]   mt-3">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc]"
    onClick={() => setOpenPictureAvailability(!openPictureAvailability)}
  >
    <p className="font-semibold text-gray-700">PICTURE AVAILABILITY</p>
    <span className="text-[12px]">{openPictureAvailability ? "▲" : "▼"}</span>
  </div>

  {openPictureAvailability && (
    <div className="mt-3 ml-4">
      {["With pictures"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedPictureAvailability.includes(item)}
              onChange={() => {
                setSelectedPictureAvailability((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>

{/* video availability */}

<div className="text-[13px] border-t border-gray-300 pt-3 mt-3">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenVideoAvailability(!openVideoAvailability)}
  >
    <p className="font-semibold text-gray-700">VIDEO AVAILABILITY</p>
    <span className="text-[12px]">{openVideoAvailability ? "▲" : "▼"}</span>
  </div>

  {openVideoAvailability && (
    <div className="mt-3 ml-4">
      {["With Video"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedVideoAvailability.includes(item)}
              onChange={() => {
                setSelectedVideoAvailability((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              4,977
            </span>
          </label>
        )
      )}

      <p className="text-blue-600 text-sm cursor-pointer mt-1">
        more choices...
      </p>
    </div>
  )}
</div>


{/* ad type */}

<div className="text-[13px]  mt-4">
  <div
    className="flex justify-between items-center cursor-pointer px-4 bg-[#fcfcfc] pb-2 border-b border-gray-300"
    onClick={() => setOpenAdType(!openAdType)}
  >
    <p className="font-semibold text-gray-700">ADD TYPE</p>
    <span className="text-[12px]">{openAdType ? "▲" : "▼"}</span>
  </div>

  {openAdType && (
    <div className="mt-3 ml-4">
      {["Featured Adds"].map(
        (item) => (
          <label key={item} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedAdType.includes(item)}
              onChange={() => {
                setSelectedAdType((prev) =>
                  prev.includes(item)
                    ? prev.filter((x) => x !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
            <span className="ml-auto mr-4 bg-gray-100 px-2 py-[2px] rounded-full text-[11px]">
              3,977
            </span>
          </label>
        )
      )}
    </div>
  )}
</div>




            {/* ---------- CITY POPUP FORM ---------- */}
            {showCityForm && (
              <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                <div className="bg-white w-[350px] rounded shadow-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Select City</h3>

                    <button
                      className="text-xl text-gray-600"
                      onClick={() => setShowCityForm(false)}
                    >
                      ✕
                    </button>
                  </div>

                  <div className="max-h-56 overflow-y-auto">
                    {allCities.map((city) => (
                      <label
                        key={city}
                        className="flex items-center gap-2 text-sm mb-1"
                      >
                        <input
                          type="radio"
                          name="city"
                          checked={selectedCity === city}
                          onChange={() => setSelectedCity(city)}
                        />
                        {city}
                      </label>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-gray-300 px-4 py-1 rounded"
                      onClick={() => setSelectedCity("")}
                    >
                      Clear
                    </button>

                    <button
                      className="bg-blue-700 text-white px-4 py-1 rounded"
                      onClick={() => setShowCityForm(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </aside>

<main className="flex-1 min-w-0 w-full px-6 overflow-x-hidden">


      {/* TOP RESULTS */}
      <p className="text-right text-sm text-gray-600 mb-2 w-full 
">
        1 - 25 of 13179 Results
      </p>

      {/* SORT BAR */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center bg-white border p-4 rounded shadow-sm mb-4 w-full ">

        <div className="flex gap-2 text-sm items-center">
          <span>Sort By:</span>
          <select className="border px-2 py-1 rounded">
            <option>Updated Date: Recent First</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded text-xs">LIST</button>
          <button className="border px-3 py-1 rounded text-xs">GRID</button>
        </div>
      </div>

      {/* CARS LIST */}
     {/* CARS LIST */}
<div className="flex flex-col gap-4 w-full overflow-hidden">
  {cars.map((car) => (
    <CardPage key={car.id} car={car} />
  ))}
</div>

<div className="flex flex-col gap-4 w-full overflow-hidden">
  {cars.map((car) => (
    <CardPage key={car.id} car={car} />
  ))}
  <InspectionBanner />
</div>

<div className="flex flex-col gap-4 w-full overflow-hidden">
  {cars.map((car) => (
    <CardPage key={car.id} car={car} />
  ))}
</div>

<FeaturedAd />

<div className="flex flex-col gap-4 w-full overflow-hidden">
  {cars.map((car) => (
    <CardPage key={car.id} car={car} />
  ))}
</div>

<NotifyMe />

<div className="flex flex-col gap-4 w-full overflow-hidden">
  {cars.map((car) => (
    <CardPage key={car.id} car={car} />
  ))}
</div>

<SellAdPage />

    </main>

    
        </div>
        <div className="max-w-7xl bg-white mx-auto  px-6 py-6">

      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">
        Used Cars Price in Lahore
      </h2>

      {/* Table */}
    <div className="overflow-x-auto border border-gray-300 rounded-md">
      <table className="w-full min-w-[500px] border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 border border-gray-300">Model</th>
            <th className="text-left px-4 py-3 border border-gray-300">Price*</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-3 border border-gray-300 text-blue-700 font-semibold">
              Honda Civic
            </td>
            <td className="px-4 py-3 border border-gray-300 text-green-600 font-semibold">
              PKR 1.7 lacs - PKR 3234.5 lacs
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 border border-gray-300 text-blue-700 font-semibold">
              Honda City
            </td>
            <td className="px-4 py-3 border border-gray-300 text-green-600 font-semibold">
              PKR 5.3 lacs - PKR 62.0 lacs
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 border border-gray-300 text-blue-700 font-semibold">
              Toyota Corolla
            </td>
            <td className="px-4 py-3 border border-gray-300 text-green-600 font-semibold">
              PKR 2.2 lacs - PKR 88.0 lacs
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 border border-gray-300 text-blue-700 font-semibold">
              Suzuki Mehran
            </td>
            <td className="px-4 py-3 border border-gray-300 text-green-600 font-semibold">
              PKR 2.2 lacs - PKR 16.5 lacs
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 border border-gray-300 text-blue-700 font-semibold">
              Suzuki Cultus
            </td>
            <td className="px-4 py-3 border border-gray-300 text-green-600 font-semibold">
              PKR 6.2 lacs - PKR 41.0 lacs
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-sm text-gray-600 mt-3">
      * Used Cars Prices in Lahore vary based on the model, variant and the condition of the car.
    </p>

    <h3 className="text-xl sm:text-2xl font-semibold mt-8">
      Used Cars in Lahore:
    </h3>

    <p className="text-gray-700 mt-3 leading-relaxed">
      There are currently 13,033 available used car in Lahore for sale. Based on the current listings,
      Used cars price in Lahore start from PKR 165,000 and go up to PKR 323,447,799.
    </p>

    <p className="text-gray-700 mt-3 leading-relaxed">
      These used cars for sale in Lahore are uploaded by Individuals and Dealers users.
    </p>

    <p className="text-gray-700 mt-3 leading-relaxed">
      There are also 162 Certified used cars for sale in Lahore available on PakWheels.
    </p>    </div>

    <div className="bg-[#f2f3f3] w-full py-12">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-8">
          FAQs for Used Cars for Sale in Lahore
        </h2>

        {/* FAQ Boxes */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question */}
              <p className="text-base sm:text-lg text-gray-800 font-medium">
{item}</p>

              {/* Plus Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-500">
                <span className="text-blue-500 text-2xl leading-none">+</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
     <BrowseMoreUsedCars />
     
   
      </div>
      
    </div>

    
  );
}


