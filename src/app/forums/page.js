"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Pin } from 'lucide-react';
import Link from "next/link";

export default function CategoriesPage() {
  const [showCategories, setShowCategories] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [activeTab, setActiveTab] = useState("Categories");

  const categories = [
    { name: "Toyota", color: "bg-blue-500" },
    { name: "Honda", color: "bg-red-500" },
    { name: "Suzuki", color: "bg-green-500" },
    { name: "BMW", color: "bg-purple-500" },
    { name: "Mercedes", color: "bg-gray-800" },
    { name: "Audi", color: "bg-black" },
    { name: "Hyundai", color: "bg-teal-500" },
    { name: "Kia", color: "bg-orange-500" },
    { name: "Nissan", color: "bg-indigo-500" },
    { name: "Mitsubishi", color: "bg-pink-500" },
    { name: "Ford", color: "bg-blue-600" },
    { name: "Chevrolet", color: "bg-yellow-500" },
    { name: "Lexus", color: "bg-red-600" },
  ];

  const tags = [
    "Engine Problems","Fuel Economy","CNG Conversion","Maintenance",
    "Insurance","Modifications","Tyres","Battery","AC Problems",
    "Transmission","Suspension","Brakes","Electrical","Interior"
  ];

  const tabs = ["Categories","Latest","Top","Subscribed","Following","FAQ"];

  return (
    <div className="w-full bg-gray-100 pb-12 px-8">
      <main className="max-w-7xl mx-auto pb-20 bg-white shadow-sm">

        {/* NOTICE */}
        <div className="bg-sky-100 text-sm px-6 py-3 text-gray-700 mx-4">
          All outgoing email has been globally disabled by an administrator.
          No email notifications of any kind will be sent.
        </div>

        {/* TOP BAR */}
        <div className="border-b">
          <div className="flex items-center gap-4 px-6 py-4 text-sm">

            {/* ALL CATEGORIES */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCategories(!showCategories);
                  setShowTags(false);
                }}
                className="flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded hover:bg-gray-300"
              >
                all categories <ChevronDown size={14} />
              </button>

              {showCategories && (
                <div className="absolute z-50 mt-1 w-56 bg-white border rounded shadow max-h-60 overflow-y-auto">
                  {categories.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <span className={`w-3 h-3 rounded ${c.color}`}></span>
                      {c.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ALL TAGS */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowTags(!showTags);
                  setShowCategories(false);
                }}
                className="flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded hover:bg-gray-300"
              >
                all tags <ChevronDown size={14} />
              </button>

              {showTags && (
                <div className="absolute z-50 mt-1 w-56 bg-white border rounded shadow max-h-60 overflow-y-auto">
                  {tags.map((tag, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TABS */}
            <div className="flex gap-2 ml-6 border cursor-pointer">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* HEADER */}
        <div className="px-6 pt-6">
          <div className="grid grid-cols-12 text-sm text-gray-500 border-b pb-3">
            <div className="col-span-7">Category</div>
            <div className="col-span-3">Latest</div>
            <div className="col-span-2 text-right">Topics</div>
          </div>
        </div>

       {/* TOYOTA */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-3 bg-red-600"></div>
<div>
<h2 className="text-xl font-semibold">Toyota</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to Toyota cars goes into this section. Find solution to your problems, ask questions and talk about your Toyota cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Passo","Belta/Platz/Vios","Other Toyota Models","Vitz/Yaris","Prius","Corolla","Aqua","Hilux","Premio","Fielder","Hiace","Mark X","Camry","Platz","Rush",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
  <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Corolla 2.0D 2D owner’s club 2025
      <span className="text-gray-400 ml-2">3h</span>
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Leppon authorised distributor
      <span className="text-gray-400 ml-2">1d</span>
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla GT Club
      <span className="text-gray-400 ml-2">Aug ’25</span>
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
</div>



<div className="col-span-2 text-right text-sm text-gray-600">
<div>2 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* HONDA */}
<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Honda</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to Honda cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* suzuki */}


<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Suzuki</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* diahatsu */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Diahatsu</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to diahatsu cars goes into this section. Find solution to your problems, ask questions and talk about your MG cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>

{/* MG */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">MG</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to MG cars goes into this section. Find solution to your problems, ask questions and talk about your MG cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Kia */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Kia</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to Kia cars goes into this section. Find solution to your problems, ask questions and talk about your Kia cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>



{/* hyundai */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Hyundai</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to hyundai cars goes into this section. Find solution to your problems, ask questions and talk about your hyundai cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Changan */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Changan</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to Changan cars goes into this section. Find solution to your problems, ask questions and talk about your Changan cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>




<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Suzuki</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>

{/* Other car automaker */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Other Cars Automakers</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to automaker cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>

{/* General Car Discussion */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-red-600 -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">General Car Discussion</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-red-600"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>



{/* Bike Forums */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#153581] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Bike Forums</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#153581]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Vintage and Classic Cars */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#800800] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Vintage and Classic Cars</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#800800]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Modified and Sports Cars */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#6ffe08] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Modified and Sports Cars</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#6ffe08]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* 4×4 and Off-Road Vehicles */}


<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#8c6238] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">4×4 and Off-Road Vehicles</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#8c6238]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Technical Forums */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#25aae2] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Technical Forums</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#25aae2]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Travel N Tours */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#3ab54a] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Travel N Tours</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#3ab54a]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Casual Forums */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#92278f] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Casual Forums</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#92278f]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>

{/* Buy Sell & Exchange */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#f7941d] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Buy Sell & Exchange</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Civic","City","Vezel","Accord","Other Honda Models","BR-V","Fit","Freed","Life","N-One","N-Wgn",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#f7941d]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


{/* Non Wheels Discussion */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-2 bg-[#ed207b] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Non Wheels Discussion</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Technology","photography","Real Estate","Public Service Annoucements","Career and Education","General Lounge",
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#ed207b]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>

{/* Site Feedback */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb-6 grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-1.5 bg-[#808281] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Site Feedback</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl">
All discussion related to suxuki cars goes into this section. Find solution to your problems, ask questions and talk about your Honda cars, all in one place.
</p>
<div className="flex flex-wrap gap-4 mt-3 text-sm">
{[
"Site Feedback & Suggestion"
].map((item) => (
<span key={item} className="flex items-center gap-2">
<span className="w-3 h-3 bg-[#808281]"></span>{item}
</span>
))}
</div>
</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
<div>10th Generation Civic Owners/ FanClub Discussion Thread <span className="text-gray-400 ml-2">14h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>



{/* Auto Show */}

<div className="max-w-7xl mx-auto px-6 pt-2 pb- grid grid-cols-12 border-b">
<div className="col-span-6 flex gap-4">
<div className="w-1.5 bg-[#ab9364] -mt-9"></div>
<div>
<h2 className="text-xl font-semibold">Auto Show</h2>
<p className="text-gray-600 text-sm mt-1 max-w-xl pb-5">
All discussions related to Auto Shows are gathered in this section. Here, you can find inquiries about auto shows, engage in conversations about the rides featured, and share suggestions—all in one place. Feel free to ask questions and share your thoughts!
</p>

</div>
</div>


<div className="col-span-4 text-[12px] text-blue-800 font-medium space-y-2">
<div>Honda civic 2002 model D17 cold start problem <span className="text-gray-400 ml-2">3h</span></div>
 <div className="flex items-center gap-2">
    <Pin size={14} className="text-gray-400" />
    <span>
      Toyota Corolla KE-35 restoration
      <span className="text-gray-400 ml-2">20d</span>
    </span>
  </div>
<div>Ride Submission and Selection  <span className="text-gray-400 ml-2">21h</span></div>
<div>My honest opinion about the Honda civic 11th gen facelift <span className="text-gray-400 ml-2">23h</span></div>
</div>


<div className="col-span-2 text-right text-sm text-gray-600">
<div>1 / day</div>
<div className="mt-2">5 / week</div>
</div>
</div>


      </main>


      {/* cars directory */}
<section className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-700">
      {/* ================= MAIN HEADING ================= */}
      <h2 className="text-[30px] md:text-2xl font-semibold text-gray-900 text-center mb-10">
       Looking for New Car Information, Used Cars, Bikes & Auto Parts?
      </h2>
      {/* ================= Looking for New Car ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">
         Browse Popular New Cars by Make
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Suzuki","Toyota","Honda","Kia",
            "Hyundai","Changan","MG","Proton",
            "Audi","BMW","United","Prince",
            "Mercedes Benz","FAW","Haval","Porsche",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Popular New Cars by Model ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-[20px] text-gray-800 mb-2">
          Browse Popular New Cars by Model
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Kia Sportage","Hyundai Tucson","Changan Alsvin","Honda Civic",
            "Toyota Yaris","Kia Picanto","Proton Saga","Honda City",
            "Hyundai Elantra","Suzuki Alto","Toyota Corolla","Honda Accord",
            "Audi A4","Toyota Fortuner","MG HS","Proton X70",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Popular Used Cars ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">Browse Popular Used Cars</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Toyota Corolla for sale","Honda Civic for sale","Honda City for sale","Suzuki Mehran for sale",
            "Suzuki Wagon R for sale","Suzuki Cultus for sale","Daihatsu Mira for sale","Daihatsu Move for sale",
            "Suzuki Alto for sale","Toyota Vitz for sale","Toyota Aqua for sale","Toyota Prado for sale",
            "Honda Vezel for sale","Honda N Wgn for sale","Honda Fit for sale","Daihatsu Cuore for sale",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Cars by City ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">Browse Cars by City</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Cars for sale in Lahore","Cars for sale in Karachi","Cars for sale in Islamabad","Cars for sale in Rawalpindi",
            "Cars for sale in Peshawar","Cars for sale in Faisalabad","Cars for sale in Multan","Cars for sale in Gujranwala",
            "Cars for sale in Bahawalpur","Cars for sale in Sialkot","Cars for sale in Abbottabad","Cars for sale in Sargodha",
            "Cars for sale in Mardan","Cars for sale in Wah Cantt","Cars for sale in Hyderabad","Cars for sale in Gujrat",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Popular Bikes ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">Browse Popular Bikes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Honda CG125 for sale","Honda CD 70 for sale","Suzuki GD 110S for sale","Yamaha YBR 125 for sale",
            "Yamaha YBZ 125 for sale","Suzuki GS 150 for sale","Yamaha YB 125Z for sale","Benelli 302R for sale",
            "Honda CB 150F for sale","Honda CG 125 Deluxe for sale","Yamaha YZF R15 for sale","Yamaha YZF R6 for sale",
            "Suzuki GSX-R600 for sale","Road Prince Wego 150 for sale","Honda Pridor for sale","Suzuki GS 150SE for sale",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Car Categories ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">Browse Car Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Budget Cars","1000cc Cars","1300cc Cars","Japanese Cars",
            "Cheap Cars","Low Priced Cars","Automatic Cars","Small Cars",
            "Big Cars","Carry Dabba","Jeep","Hybrid Cars",
            "Sports Cars","Imported Cars","Cars on Installments","4x4 Cars",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Trending Used Cars by City ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">
          Browse Trending Used Cars by City
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Suzuki Mehran for sale in Lahore","Cultus for sale in Karachi","Alto for sale in Karachi","Suzuki Mehran for sale in Karachi",
            "Cultus for sale in Rawalpindi","Suzuki Bolan for sale in Rawalpindi","Suzuki Bolan for sale in Karachi","Suzuki FX for sale in Karachi",
            "Suzuki FX for sale in Faisalabad","Suzuki Corsa for sale in Faisalabad","Suzuki Corsa for sale in Lahore","Suzuki For sale in Karachi",
            "Chardo for sale in Karachi","Chardo for sale in Islamabad","Chardo for sale in Lahore","Santro for sale in Karachi",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Auto Parts ================= */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-800 text-[20px] mb-2">
          Browse Car Accessories & Auto Parts
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {[
            "Car Tyres for Sale","Alloy Rims Accessories for Sale","Car Engines for Sale","Headlights Engine Oil for Sale",
            "Helmets for Sale","Car Top Covers for Sale","Car Jack for Sale","Car Air Pump for Sale",
            "Car Amplifier for Sale","Car Batteries for Sale","Car Sun Shades for Sale","Car LED Lights for Sale",
            "Car Furniture Washers for Sale","Car Tail Lights for Sale","Car Dashboard Mats for Sale","Car Seat Covers for Sale",
          ].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Sell Section ================= */}
      <div>
        <h3 className="font-bold text-[20px] text-gray-800 mb-2">
          Looking to Sell Your Car, Bike or Car Accessories?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1">
          {["Sell Car", "Sell Bike", "Sell Automobile Parts & Accessories"].map((item) => (
            <Link key={item} href="#" className="text-blue-600 visited:text-blue-600 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </section>

    
      
    </div>


  );
}
