"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const cards = [
  {
    img: "/tips1.jpg",
    title: "5 Super Products For Car Care, Performance!",
    desc: "Today, we are here with 5 Super Helpful Products which you can use for care, performance and convenience...",
  },
  {
    img: "/tips2.jpg",
    title: "How To Clean The Car Undercarriage? Step-Wise Guide",
    desc: "The car undercarriage is like the middle child of a family, takes the hardest hits...",
  },
  {
    img: "/tips3.jpg",
    title: "Car Maintenance Tips Everyone Should Know",
    desc: "Every car requires regular maintenance to keep it into top-notch condition...",
  },
  {
    img: "/tips4.jpg",
    title: "How To Maintain Car Paint",
    desc: "Protect your car paint with easy and effective care tips...",
  },
  {
    img: "/tips5.jpg",
    title: "Best Interior Cleaning Tips",
    desc: "Interior cleaning tips that increase comfort and hygiene...",
  },
  {
    img: "/tips6.jpg",
    title: "Engine Care Guide",
    desc: "Simple engine care practices for long-lasting performance...",
  },
];

const make = [
  { title: "Honda CB 150F", image: "/Honda.png", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/hyundai.png", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/makes29.png", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/mercedes.png", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/tyota.png", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/makes21.png", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/makes22.png", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/makes23.png", count: "319 Bikes Listed" },
  { title: "Super Power 125", image: "/makes24.png", count: "128 Bikes Listed" },
  { title: "Hi Speed 70", image: "/makes25.png", count: "94 Bikes Listed" },
]

const brand = [
  { title: "Honda CB 150F", image: "/y1.jpg", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/y2.png", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/y3.jpg", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/y4.png", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/y5.jpg", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/y6.png", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/y7.png", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/y8.png", count: "319 Bikes Listed" },
  { title: "Super Power 125", image: "/y9.png", count: "128 Bikes Listed" },
  { title: "Hi Speed 70", image: "/y10.png", count: "94 Bikes Listed" },
]

const model = [
  { title: "Honda CB 150F", image: "/m1.jpg", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/m2.jpg", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/m3.jpg", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/m4.jpg", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/m5.jpg", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/m6.jpg", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/m7.jpg", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/m8.jpg", count: "319 Bikes Listed" },
]

const bikes = [
  { title: "Honda CB 150F", image: "/p1.jpg", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/p2.jpg", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/p3.webp", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/p4.webp", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/p5.webp", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/p6.webp", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/p7.webp", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/p8.webp", count: "319 Bikes Listed" },
  
]

const bike = [
  { title: "Honda CB 150F", image: "/s1.webp", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/s2.webp", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/s3.webp", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/s4.webp", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/s5.webp", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/s6.webp", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/s7.webp", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/s2.webp", count: "319 Bikes Listed" },
  
]

const hot = [
  { title: "Honda CB 150F", image: "/h1.webp", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/h2.webp", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/h3.webp", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/h4.webp", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/h5.webp", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/h6.webp", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/h7.webp", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/h8.webp", count: "319 Bikes Listed" },
 
]

const below = [
  { title: "Honda CB 150F", image: "/i6.jpg", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/i7.jpg", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/i3.jpg", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/i4.jpg", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/i5.jpg", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/i1.jpg", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/i2.jpg", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/i8.jpg", count: "319 Bikes Listed" },
]

const arrival = [
  { title: "Honda CB 150F", image: "/a1.webp", count: "387 Bikes Listed" },
  { title: "Honda CD 70", image: "/a2.webp", count: "3,031 Bikes Listed" },
  { title: "Honda CG 125", image: "/a3.webp", count: "5,275 Bikes Listed" },
  { title: "Honda CG 125 SE", image: "/a4.webp", count: "407 Bikes Listed" },
  { title: "Suzuki GS 150", image: "/a5.webp", count: "512 Bikes Listed" },
  { title: "Yamaha YBR 125", image: "/a6.webp", count: "698 Bikes Listed" },
  { title: "United US 125", image: "/a7.webp", count: "245 Bikes Listed" },
  { title: "Road Prince 70", image: "/a8.webp", count: "319 Bikes Listed" },
  
]

// ✅ SABSE PEHLE CONSTANTS DECLARE KARO
const ITEMS_PER_PAGE = 6;

const images = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner1.jpg",
];

// TOOLS & GADGETS
const toolsCategories = [
  "Car Tool Kits",
  "Jumper Cables",
  "Tyre Inflators",
  "Vacuum Cleaners",
  "Car Chargers",
  "Car Phone Holders",
  "Emergency Tools",
  "Pressure Washers",
]

// BRAKES
const brakesCategories = [
  "Brake Pads",
  "Brake Shoes",
  "Brake Discs",
  "Brake Drums",
  "Brake Fluids",
  "ABS Sensors",
  "Brake Calipers",
]

// LIGHTS & ELECTRICAL
const lightsCategories = [
  "Head Lights",
  "Tail Lights",
  "Fog Lights",
  "Indicator Lights",
  "LED Lights",
  "Car Batteries",
  "Wiring Kits",
  "Car Horns",
]

// OILS & LUBRICANTS
const oilsCategories = [
  "Engine Oil",
  "Gear Oil",
  "Brake Oil",
  "Coolants",
  "Power Steering Oil",
  "Transmission Fluids",
  "Lubricants",
]

// TYRES & WHEELS
const tyresCategories = [
  "Car Tyres",
  "Alloy Wheels",
  "Wheel Covers",
  "Tubeless Tyres",
  "Spare Tyres",
  "Wheel Balancing Weights",
]

// BIKES
const bikesCategories = [
  "Bike Helmets",
  "Bike Oils",
  "Bike Chains",
  "Bike Brake Pads",
  "Bike Lights",
  "Bike Tyres",
  "Bike Covers",
] 

// ✅ TOOLS PRODUCTS KO UPDATE KARO
const toolsProducts = [
  { title: "Car Tool Kit", price: "Rs 3,200", old: "Rs 3,800", off: "15%", img: "/tool1.jpg" },
  { title: "Jumper Cables", price: "Rs 1,800", old: "Rs 2,100", off: "12%", img: "/tool2.webp" },
  { title: "Tyre Inflator", price: "Rs 4,500", old: "Rs 5,000", off: "10%", img: "/tool3.jpg" },
  { title: "Vacuum Cleaner", price: "Rs 6,200", old: "Rs 6,800", off: "9%", img: "/tool4.webp" },
  { title: "Car Charger", price: "Rs 1,200", old: "Rs 1,500", off: "20%", img: "/tool5.jpg" },
  { title: "Phone Holder", price: "Rs 950", old: "Rs 1,200", off: "21%", img: "/tool6.webp" },
  { title: "Emergency Kit", price: "Rs 3,900", old: "Rs 4,500", off: "13%", img: "/tool7.jpg" },
  { title: "Pressure Washer", price: "Rs 12,500", old: "Rs 14,000", off: "11%", img: "/tool8.webp" },
  { title: "Toolkit Pro", price: "Rs 4,800", old: "Rs 5,300", off: "9%", img: "/tool9.jpg" },
  { title: "Air Inflator", price: "Rs 5,200", old: "Rs 5,800", off: "10%", img: "/tool10.jpg" },
  { title: "USB Charger", price: "Rs 1,100", old: "Rs 1,300", off: "15%", img: "/tool11.jpg" },
  { title: "Magnetic Holder", price: "Rs 1,600", old: "Rs 1,900", off: "16%", img: "/tool12.jpg" },
];

const brakesProducts = [
  { title: "Brake Pads", img: "/br1.jpg", price: "PKR 2,999", old: "PKR 3,699", off: "19%" },
  { title: "Brake Discs", img: "/br2.jpg", price: "PKR 6,999", old: "PKR 8,499", off: "18%" },
  { title: "Brake Shoes", img: "/br3.jpg", price: "PKR 2,199", old: "PKR 2,899", off: "24%" },
  { title: "Brake Fluid", img: "/br4.jpg", price: "PKR 899", old: "PKR 1,199", off: "25%" },
  { title: "ABS Sensor", img: "/br5.jpg", price: "PKR 4,499", old: "PKR 5,699", off: "21%" },
  { title: "Brake Caliper", img: "/br6.jpg", price: "PKR 7,999", old: "PKR 9,499", off: "16%" },
  { title: "Brake Pads Set", img: "/br1.jpg", price: "PKR 5,499", old: "PKR 6,499", off: "15%" },
  { title: "Brake Disc Pair", img: "/br2.jpg", price: "PKR 12,999", old: "PKR 14,999", off: "13%" },
  { title: "Brake Shoes Set", img: "/br3.jpg", price: "PKR 3,999", old: "PKR 4,799", off: "17%" },
  { title: "Brake Fluid 500ml", img: "/br4.jpg", price: "PKR 1,299", old: "PKR 1,599", off: "19%" },
  { title: "ABS Sensor Pair", img: "/br5.jpg", price: "PKR 8,499", old: "PKR 9,999", off: "15%" },
  { title: "Brake Caliper Set", img: "/br6.jpg", price: "PKR 14,999", old: "PKR 17,999", off: "17%" },
]

const lightsProducts = [
  { title: "LED Head Lights", img: "/li1.jpg", price: "PKR 3,499", old: "PKR 4,499", off: "22%" },
  { title: "Fog Lights", img: "/li2.webp", price: "PKR 2,799", old: "PKR 3,599", off: "22%" },
  { title: "Car Battery", img: "/li3.jpg", price: "PKR 18,999", old: "PKR 21,999", off: "14%" },
  { title: "Car Horn", img: "/li4.jpg", price: "PKR 899", old: "PKR 1,199", off: "25%" },
  { title: "Tail Lights", img: "/li5.jpg", price: "PKR 4,999", old: "PKR 6,299", off: "21%" },
  { title: "Wiring Kit", img: "/li6.jpg", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
  { title: "LED Daytime Lights", img: "/li7.jpg", price: "PKR 4,299", old: "PKR 5,299", off: "19%" },
  { title: "Projector Headlights", img: "/li8.jpg", price: "PKR 6,999", old: "PKR 8,499", off: "18%" },
  { title: "Car Battery 75AH", img: "/li9.jpg", price: "PKR 22,999", old: "PKR 26,999", off: "15%" },
  { title: "Dual Tone Horn", img: "/li10.jpg", price: "PKR 1,299", old: "PKR 1,699", off: "24%" },
  { title: "LED Tail Lights", img: "/li11.jpg", price: "PKR 6,499", old: "PKR 7,999", off: "19%" },
  { title: "Complete Wiring Harness", img: "/li12.jpg", price: "PKR 2,499", old: "PKR 3,199", off: "22%" },
]

const oilsProducts = [
  { title: "Engine Oil 5W-30", img: "/oi1.jpg", price: "PKR 5,499", old: "PKR 6,499", off: "15%" },
  { title: "Gear Oil", img: "/oi2.webp", price: "PKR 2,299", old: "PKR 2,999", off: "23%" },
  { title: "Brake Oil", img: "/oi3.jpg", price: "PKR 899", old: "PKR 1,199", off: "25%" },
  { title: "Coolant", img: "/oil4.jpg", price: "PKR 1,299", old: "PKR 1,699", off: "24%" },
  { title: "Power Steering Oil", img: "/oi5.jpg", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
  { title: "Transmission Fluid", img: "/oi6.jpg", price: "PKR 2,999", old: "PKR 3,699", off: "19%" },
  { title: "Engine Oil 10W-40", img: "/oi7.webp", price: "PKR 4,799", old: "PKR 5,699", off: "16%" },
  { title: "Gear Oil 80W-90", img: "/oi8.jpg", price: "PKR 2,899", old: "PKR 3,599", off: "19%" },
  { title: "Brake Oil DOT4", img: "/oi9.jpg", price: "PKR 1,199", old: "PKR 1,499", off: "20%" },
  { title: "Coolant Premium", img: "/oi10.jpg", price: "PKR 1,799", old: "PKR 2,199", off: "18%" },
  { title: "PS Oil Synthetic", img: "/oi11.jpg", price: "PKR 2,099", old: "PKR 2,599", off: "19%" },
  { title: "ATF Fluid", img: "/oi12.jpg", price: "PKR 3,499", old: "PKR 4,199", off: "17%" },
]

const tyresProducts = [
  { title: "Car Tyre 185/65", img: "/tyre1.jpg", price: "PKR 18,999", old: "PKR 21,999", off: "14%" },
  { title: "Alloy Wheel", img: "/tyre2.webp", price: "PKR 29,999", old: "PKR 34,999", off: "14%" },
  { title: "Wheel Cover", img: "/tyre3.jpg", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
  { title: "Tubeless Tyre", img: "/tyre4.webp", price: "PKR 21,999", old: "PKR 25,999", off: "15%" },
  { title: "Spare Tyre", img: "/tyre5.jpg", price: "PKR 16,999", old: "PKR 19,999", off: "15%" },
  { title: "Balancing Weights", img: "/tyre6.webp", price: "PKR 799", old: "PKR 1,099", off: "27%" },
  { title: "Tyre 195/65 R15", img: "/tyre7.jpg", price: "PKR 22,999", old: "PKR 26,999", off: "15%" },
  { title: "Alloy Wheel 16 Inch", img: "/tyre8.webp", price: "PKR 34,999", old: "PKR 39,999", off: "13%" },
  { title: "Wheel Cover Set", img: "/tyre9.jpg", price: "PKR 5,999", old: "PKR 7,499", off: "20%" },
  { title: "Tubeless Tyre 205/55", img: "/tyre10.webp", price: "PKR 24,999", old: "PKR 28,999", off: "14%" },
  { title: "Spare Tyre Kit", img: "/tyre11.webp", price: "PKR 19,999", old: "PKR 23,999", off: "17%" },
  { title: "Wheel Weights Kit", img: "/tyre12.webp", price: "PKR 1,499", old: "PKR 1,899", off: "21%" },
]

const bikesProducts = [
  { title: "Bike Helmet", img: "/ke1.jpg", price: "PKR 4,999", old: "PKR 6,499", off: "23%" },
  { title: "Bike Engine Oil", img: "/ke2.webp", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
  { title: "Bike Chain", img: "/ke3.jpg", price: "PKR 2,299", old: "PKR 2,999", off: "23%" },
  { title: "Bike Brake Pads", img: "/ke4.webp", price: "PKR 1,199", old: "PKR 1,599", off: "25%" },
  { title: "Bike Tyre", img: "/ke5.jpg", price: "PKR 6,999", old: "PKR 8,499", off: "18%" },
  { title: "Bike Cover", img: "/ke6.webp", price: "PKR 1,099", old: "PKR 1,499", off: "27%" },
  { title: "Helmet Full Face", img: "/ke1.jpg", price: "PKR 6,499", old: "PKR 8,299", off: "22%" },
  { title: "Bike Oil 4T", img: "/ke2.jpg", price: "PKR 1,799", old: "PKR 2,299", off: "22%" },
  { title: "Chain & Sprocket Kit", img: "/ke3.jpg", price: "PKR 4,999", old: "PKR 6,199", off: "19%" },
  { title: "Brake Pads Pair", img: "/ke4.jpg", price: "PKR 2,299", old: "PKR 2,899", off: "21%" },
  { title: "Bike Tyre Pair", img: "/ke5.jpg", price: "PKR 12,999", old: "PKR 15,499", off: "16%" },
  { title: "Bike Cover Premium", img: "/ke6.jpg", price: "PKR 1,699", old: "PKR 2,199", off: "23%" },
]

const exteriorCategories = [
  "Car Covers",
  "Car Wax",
  "Car Polish",
  "Car Exterior Cleaning Products",
  "Car Protectants",
  "Car Detailing Brushes",
  "Microfiber Cloth",
  "All Purpose Cleaners",
]

const engineCategories = [
  "Car Engine Cleaners",
  "Engine Degreasers",
  "Engine Oil Additives",
  "Coolants",
  "Radiator Flush",
  "Engine Protectants",
  "All Purpose Cleaners",
]

const categories = [
  "Car Covers","Car Air Fresheners","Microfiber Cloth","Bundles",
  "Car washer/Pressure washer","Car Wax","Car Engine Cleaners",
  "Car Interior Cleaners","Car Shampoo","Car Polish","Car Coolants",
  "Car Exterior Cleaning Products","Car Detailing Brushes",
  "Car Protectants","All Purpose Cleaners",
]

const products = [
  { title: "PakWheels All Purpose Cleaner", img: "/crds1.jpg", price: "PKR 999", old: "PKR 1,299", off: "23%" },
  { title: "PakWheels 6 in 1 Car Care Kit", img: "/crds2.webp", price: "PKR 3,799", old: "PKR 5,599", off: "32%" },
  { title: "PakWheels All Purpose Cleaner", img: "/crds3.webp", price: "PKR 1,399", old: "PKR 1,998", off: "30%" },
  { title: "PakWheels Spotless Car Wash", img: "/crds4.webp", price: "PKR 799", old: "PKR 1,099", off: "27%" },
  { title: "Tonyin Ceramic Crystal Coating Wax", img: "/crds5.webp", price: "PKR 1,349", old: "PKR 1,799", off: "25%" },
  { title: "PakWheels Waterless Car Wash", img: "/crds6.webp", price: "PKR 799", old: "PKR 1,099", off: "27%" },
  { title: "Car Air Freshener Pack", img: "/crds7.webp", price: "PKR 499", old: "PKR 699", off: "28%" },
  { title: "Microfiber Cleaning Cloth", img: "/crds8.webp", price: "PKR 299", old: "PKR 399", off: "25%" },
  { title: "Car Wax Premium", img: "/crds9.webp", price: "PKR 1,199", old: "PKR 1,599", off: "25%" },
  { title: "Car Detailing Brush Set", img: "/crds10.webp", price: "PKR 799", old: "PKR 999", off: "20%" },
  { title: "Engine Cleaner Spray", img: "/crds11.webp", price: "PKR 1,099", old: "PKR 1,499", off: "27%" },
  { title: "Car Polish Kit", img: "/crds12.webp", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
]

const interior = [
  "Car Covers","Car Air Fresheners","Microfiber Cloth","Bundles",
  "Car washer/Pressure washer","Car Wax","Car Engine Cleaners",
  "Car Interior Cleaners","Car Shampoo","Car Polish","Car Coolants",
  "Car Exterior Cleaning Products","Car Detailing Brushes",
  "Car Protectants","All Purpose Cleaners",
]

const prod = [
  { title: "PakWheels All Purpose Cleaner", img: "/cr1.jpg", price: "PKR 999", old: "PKR 1,299", off: "23%" },
  { title: "PakWheels 6 in 1 Car Care Kit", img: "/cr2.webp", price: "PKR 3,799", old: "PKR 5,599", off: "32%" },
  { title: "PakWheels All Purpose Cleaner", img: "/cr3.jpg", price: "PKR 1,399", old: "PKR 1,998", off: "30%" },
  { title: "PakWheels Spotless Car Wash", img: "/cr4.jpg", price: "PKR 799", old: "PKR 1,099", off: "27%" },
  { title: "Tonyin Ceramic Crystal Coating Wax", img: "/cr5.jpg", price: "PKR 1,349", old: "PKR 1,799", off: "25%" },
  { title: "PakWheels Waterless Car Wash", img: "/cr6.jpg", price: "PKR 799", old: "PKR 1,099", off: "27%" },
  { title: "Car Air Freshener Pack", img: "/cr7.jpg", price: "PKR 499", old: "PKR 699", off: "28%" },
  { title: "Microfiber Cleaning Cloth", img: "/cr8.jpg", price: "PKR 299", old: "PKR 399", off: "25%" },
  { title: "Car Wax Premium", img: "/cr9.jpg", price: "PKR 1,199", old: "PKR 1,599", off: "25%" },
  { title: "Car Detailing Brush Set", img: "/cr10.jpg", price: "PKR 799", old: "PKR 999", off: "20%" },
  { title: "Engine Cleaner Spray", img: "/cr11.jpg", price: "PKR 1,099", old: "PKR 1,499", off: "27%" },
  { title: "Car Polish Kit", img: "/cr12.jpg", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
]

const exteriorProducts = [
  { title: "Car Wax Premium", img: "/ex1.jpg", price: "PKR 1,199", old: "PKR 1,599", off: "25%" },
  { title: "Car Polish Kit", img: "/ex2.jpg", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
  { title: "Car Detailing Brush", img: "/ex3.jpg", price: "PKR 799", old: "PKR 999", off: "20%" },
  { title: "Engine Cleaner Spray", img: "/ex4.jpg", price: "PKR 1,099", old: "PKR 1,499", off: "27%" },
  { title: "Car Shampoo", img: "/ex5.jpg", price: "PKR 699", old: "PKR 899", off: "22%" },
  { title: "Microfiber Cloth", img: "/ex6.jpg", price: "PKR 299", old: "PKR 399", off: "25%" },
  { title: "Car Wax Premium", img: "/ex7.jpg", price: "PKR 1,199", old: "PKR 1,599", off: "25%" },
  { title: "Car Polish Kit", img: "/ex8.webp", price: "PKR 1,499", old: "PKR 1,999", off: "25%" },
  { title: "Car Detailing Brush", img: "/ex9.webp", price: "PKR 799", old: "PKR 999", off: "20%" },
  { title: "Engine Cleaner Spray", img: "/ex410.webp", price: "PKR 1,099", old: "PKR 1,499", off: "27%" },
  { title: "Car Shampoo", img: "/ex11.jpg", price: "PKR 699", old: "PKR 899", off: "22%" },
  { title: "Microfiber Cloth", img: "/ex12.webp", price: "PKR 299", old: "PKR 399", off: "25%" },
]

const engineProducts = [
  { title: "Engine Oil 1L", img: "/mac1.jpg", price: "PKR 1,599", old: "PKR 1,999", off: "20%" },
  { title: "Fuel Injector Cleaner", img: "/mac2.webp", price: "PKR 899", old: "PKR 1,199", off: "25%" },
  { title: "Coolant Liquid", img: "/mac7.jpg", price: "PKR 1,099", old: "PKR 1,399", off: "22%" },
  { title: "Engine Degreaser", img: "/mac4.webp", price: "PKR 1,249", old: "PKR 1,599", off: "22%" },
  { title: "Engine Oil 1L", img: "/mac5.jpg", price: "PKR 1,599", old: "PKR 1,999", off: "20%" },
  { title: "Fuel Injector Cleaner", img: "/mac6.jpg", price: "PKR 899", old: "PKR 1,199", off: "25%" },
  { title: "Coolant Liquid", img: "/mac3.jpg", price: "PKR 1,099", old: "PKR 1,399", off: "22%" },
  { title: "Engine Degreaser", img: "/mac8.jpg", price: "PKR 1,249", old: "PKR 1,599", off: "22%" },
  { title: "Engine Oil 1L", img: "/mac9.jpg", price: "PKR 1,599", old: "PKR 1,999", off: "20%" },
  { title: "Fuel Injector Cleaner", img: "/mac10.jpg", price: "PKR 899", old: "PKR 1,199", off: "25%" },
  { title: "Coolant Liquid", img: "/mac11.jpg", price: "PKR 1,099", old: "PKR 1,399", off: "22%" },
  { title: "Engine Degreaser", img: "/mac12.jpg", price: "PKR 1,249", old: "PKR 1,599", off: "22%" },
]

export default function CarCarePage() {

  const [index, setIndex] = useState(0);
  const cardsPerSlide = 3;
  const maxIndex = Math.ceil(cards.length / cardsPerSlide) - 1;


  const [current, setCurrent] = useState(0)
  const [pageLoading, setPageLoading] = useState(true)

  // ✅ ALL STATES FOR DIFFERENT SECTIONS
  const [toolsPage, setToolsPage] = useState(0);
  const toolsTotalPages = Math.ceil(toolsProducts.length / ITEMS_PER_PAGE);

  const [carPage, setCarPage] = useState(0)
  const carTotalPages = Math.ceil(products.length / ITEMS_PER_PAGE)

  const [interiorPage, setInteriorPage] = useState(0)
  const interiorTotalPages = Math.ceil(prod.length / ITEMS_PER_PAGE)

  const [exteriorPage, setExteriorPage] = useState(0)
  const [enginePage, setEnginePage] = useState(0)
  const exteriorTotalPages = Math.ceil(exteriorProducts.length / ITEMS_PER_PAGE)
  const engineTotalPages = Math.ceil(engineProducts.length / ITEMS_PER_PAGE)

  // ✅ NEW STATES FOR ADDED SECTIONS
  const [brakesPage, setBrakesPage] = useState(0)
  const [lightsPage, setLightsPage] = useState(0)
  const [oilsPage, setOilsPage] = useState(0)
  const [tyresPage, setTyresPage] = useState(0)
  const [bikesPage, setBikesPage] = useState(0)
  
  const brakesTotalPages = Math.ceil(brakesProducts.length / ITEMS_PER_PAGE)
  const lightsTotalPages = Math.ceil(lightsProducts.length / ITEMS_PER_PAGE)
  const oilsTotalPages = Math.ceil(oilsProducts.length / ITEMS_PER_PAGE)
  const tyresTotalPages = Math.ceil(tyresProducts.length / ITEMS_PER_PAGE)
  const bikesTotalPages = Math.ceil(bikesProducts.length / ITEMS_PER_PAGE)

  // AUTO TOP SLIDER
  useEffect(() => {
    const interval = setInterval(() => next(), 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setPageLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  const next = () => setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1))
  const prev = () => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1))

  // ✅ REUSABLE SLIDER COMPONENT FUNCTION (WITHOUT TYPESCRIPT TYPES)
  const renderSlider = (page, setPage, totalPages, products, title) => (
    <div className="lg:col-span-3 relative overflow-hidden">
      {/* ARROWS */}
      <button
        onClick={() => setPage(p => Math.max(p - 1, 0))}
        disabled={page === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-9 h-9 flex items-center justify-center z-30 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
        disabled={page === totalPages - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-9 h-9 flex items-center justify-center z-30 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4"
            >
              {products
                .slice(pageIndex * ITEMS_PER_PAGE, pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
                .map((p, i) => (
                  // ✅ ROUNDED CORNERS REMOVED HERE
                  <div key={i} className="relative border bg-white group overflow-hidden h-[270px] shadow-sm hover:shadow-md transition-shadow">
                    {/* DISCOUNT BADGE */}
                    <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden z-10">
                      <div className="absolute bg-red-600 text-white w-32 h-14 -top-7 -left-10 rotate-[-45deg] flex flex-col items-center justify-center rounded-tr-full">
                        <span className="text-sm font-bold -ml-5 mt-5">{p.off}</span>
                        <span className="text-[10px]">Off</span>
                      </div>
                    </div>

                    {/* HOVER OVERLAY - ✅ ROUNDED REMOVED HERE TOO */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-black/40 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex flex-col gap-2">
                        <Button className="bg-sky-500 hover:bg-sky-600 text-white w-28 rounded-none transition-all duration-300 shadow hover:shadow-md active:scale-95 cursor-pointer">
                          Buy Now
                        </Button>
                        <Button className="bg-blue-700 hover:bg-blue-800 text-white w-28 rounded-none transition-all duration-300 shadow hover:shadow-md active:scale-95 cursor-pointer">
                          View
                        </Button>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="h-[190px] flex items-center justify-center border-b p-4">
                      <Image 
                        src={p.img} 
                        alt={p.title}
                        width={200}
                        height={200}
                        className="object-contain p-2"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="px-3 py-3">
                      <h3 className="text-blue-700 text-sm line-clamp-2 font-medium">{p.title}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-green-600 font-semibold text-sm">{p.price}</span>
                        <span className="line-through text-gray-400 text-xs">{p.old}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (pageLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#1f3b75] py-10 h-50 w-full relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
            Car Accessories & Auto Parts Store in Pakistan
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 md:mb-10">
            Your one stop online shop for all car parts and accessories
          </p>

          {/* SEARCH BAR */}
          <div className="bg-white p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center shadow-md mt-10">
            <input
              type="text"
              placeholder="e.g. lights, tyres, etc."
              className="w-full sm:flex-1 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full sm:w-[220px] border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Category</option>
              <option>Lights</option>
              <option>Tyres</option>
              <option>Accessories</option>
              <option>Auto Parts</option>
            </select>
            <button className="w-full sm:w-[180px] bg-[#45b649] hover:bg-green-600 text-white font-semibold text-lg py-3 rounded-md transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* TOP SLIDER */}
      <section className="bg-[#f2f3f3] py-12 w-full mt-10">
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div className="flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${current * 100}%)` }}>
              {images.map((img, index) => (
                <div key={index} className="min-w-full">
                  <img src={img} alt={`slide-${index}`} className="w-full h-[280px] sm:h-[360px] object-cover" />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CAR CARE SLIDER */}
      <section className="max-w-7xl mx-20 p-4">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon6.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Car Care</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {categories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(carPage, setCarPage, carTotalPages, products, "Car Care")}
        </div>
      </section>

      {/* INTERIOR SLIDER */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon5.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Interior</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {interior.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(interiorPage, setInteriorPage, interiorTotalPages, prod, "Interior")}
        </div>
      </section>

      {/* EXTERIOR */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon4.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Exterior</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {exteriorCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(exteriorPage, setExteriorPage, exteriorTotalPages, exteriorProducts, "Exterior")}
        </div>
      </section>

      {/* ENGINE PRODUCTS */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Engine & Mechanical</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {engineCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(enginePage, setEnginePage, engineTotalPages, engineProducts, "Engine & Mechanical")}
        </div>
      </section>

      {/* TOOLS AND GADGETS */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="Tools & Gadgets Icon" />
              <h2 className="text-xl font-semibold text-blue-800">Tools & Gadgets</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {toolsCategories.map((cat, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{cat}</li>
              ))}
            </ul>
          </div>
          {renderSlider(toolsPage, setToolsPage, toolsTotalPages, toolsProducts, "Tools & Gadgets")}
        </div>
      </section>

      {/* ✅ BRAKES SECTION */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Brakes</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {brakesCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(brakesPage, setBrakesPage, brakesTotalPages, brakesProducts, "Brakes")}
        </div>
      </section>

      {/* ✅ LIGHTS & ELECTRICAL SECTION */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Lights & Electrical</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {lightsCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(lightsPage, setLightsPage, lightsTotalPages, lightsProducts, "Lights & Electrical")}
        </div>
      </section>

      {/* ✅ OILS & LUBRICANTS SECTION */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Oils & Lubricants</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {oilsCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(oilsPage, setOilsPage, oilsTotalPages, oilsProducts, "Oils & Lubricants")}
        </div>
      </section>

      {/* ✅ TYRES & WHEELS SECTION */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Tyres & Wheels</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {tyresCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(tyresPage, setTyresPage, tyresTotalPages, tyresProducts, "Tyres & Wheels")}
        </div>
      </section>

      {/* ✅ BIKES SECTION */}
      <section className="max-w-7xl mx-20 p-4 mt-10">
        <div className="border p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* LEFT PANEL */}
          <div className="border-r pr-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon3.png" width={24} height={24} alt="" />
              <h2 className="text-xl font-semibold text-blue-800">Bikes</h2>
            </div>
            <hr className="mb-3" />
            <ul className="space-y-1.5 text-sm">
              {bikesCategories.map((c, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer">{c}</li>
              ))}
            </ul>
          </div>
          {renderSlider(bikesPage, setBikesPage, bikesTotalPages, bikesProducts, "Bikes")}
        </div>
      </section>


      {/*  PakWheels autostore */}
      
          <section className="w-full py-16 px-16 bg-[#f2f3f3]">
                <div className="max-w-7xl mx-auto px-12">
          
                  {/* HEADING */}
                 <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-semibold">
                 PakWheels Auto Store
                </h2>
                <a
                  href="https://www.pakwheels.com/bikes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View 
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


              {/* Top Selling Products */}

        <section className="w-full py-16 px-16">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
            Top Selling Products
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All 
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

       {/* Hot Deals */}

       <section className="w-full py-16 px-16">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
           Hot Deals
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All 
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
                {hot.map((hot, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-white border hover:shadow-md transition">
    
                      {/* IMAGE – NO SIDE SPACING */}
                      <div className="relative h-44">
                        <Image
                          src={hot.image}
                          alt={hot.title}
                          fill
                          className="object-cover"
                        />
                      </div>
    
                      {/* TEXT */}
                      <div className="p-4 text-left">
                        <h3 className="text-blue-700 font-medium text-lg">
                          {hot.title}
                        </h3>
                        <p className="text-green-600 text-sm">
                          {hot.count}
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




{/* Item Below Rs.499
 */}

       <section className="w-full py-16 px-16">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
           Item Below Rs.499
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All 
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
                {below.map((below, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-white border hover:shadow-md transition">
    
                      {/* IMAGE – NO SIDE SPACING */}
                      <div className="relative h-44">
                        <Image
                          src={below.image}
                          alt={below.title}
                          fill
                          className="object-cover"
                        />
                      </div>
    
                      {/* TEXT */}
                      <div className="p-4 text-left">
                        <h3 className="text-blue-700 font-medium text-lg">
                          {below.title}
                        </h3>
                        <p className="text-green-600 text-sm">
                          {below.count}
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




{/* New Arrivals */}

       <section className="w-full py-16 px-16">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
          New Arrivals
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All 
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
                {arrival.map((arrival, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-white border hover:shadow-md transition">
    
                      {/* IMAGE – NO SIDE SPACING */}
                      <div className="relative h-44">
                        <Image
                          src={arrival.image}
                          alt={arrival.title}
                          fill
                          className="object-cover"
                        />
                      </div>
    
                      {/* TEXT */}
                      <div className="p-4 text-left">
                        <h3 className="text-blue-700 font-medium text-lg">
                          {arrival.title}
                        </h3>
                        <p className="text-green-600 text-sm">
                          {arrival.count}
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

{/* Car Parts by Make */}
<section className="w-full py-10 bg-gray-100 px-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">
        Car Parts by Make
      </h2>
      <a
        href="https://www.pakwheels.com/bikes/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm hover:underline"
      >
        View All
      </a>
    </div>

    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 5,
      }}
      className="relative"
    >
      <CarouselContent className="-ml-4">
        {make.map((make, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/6"
          >
            {/* WHITE SMALL BOX */}
            <div className="bg-white  rounded-sm shadow-sm hover:shadow-md transition">

              {/* IMAGE */}
              <div className="relative h-24 flex items-center justify-center">
                <Image
                  src={make.image}
                  alt={make.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* NAME (NO BORDER) */}
              <div className="px-2 py-2 text-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {make.title}
                </h3>
              </div>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="-left-5" />
      <CarouselNext className="-right-5" />
    </Carousel>

  </div>
</section>


{/* Car Parts by Brands */}

<section className="w-full py-10 bg-gray-100 px-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">
        Car Parts by Brands
      </h2>
      <a
        href="https://www.pakwheels.com/bikes/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm hover:underline"
      >
        View All
      </a>
    </div>

    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 5,
      }}
      className="relative"
    >
      <CarouselContent className="-ml-4">
        {brand.map((brand, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/6"
          >
            {/* WHITE SMALL BOX */}
            <div className="bg-white  rounded-sm shadow-sm hover:shadow-md transition">

              {/* IMAGE */}
              <div className="relative h-24 flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* NAME (NO BORDER) */}
              <div className="px-2 py-2 text-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {brand.title}
                </h3>
              </div>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="-left-5" />
      <CarouselNext className="-right-5" />
    </Carousel>

  </div>
</section>


{/* Car Parts by Popular Models */}

<section className="w-full py-16 px-16">
          <div className="max-w-7xl mx-auto px-12">
    
            {/* HEADING */}
           <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
          Car Parts by Popular Models
          </h2>
          <a
            href="https://www.pakwheels.com/bikes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View All 
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
                {model.map((model, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-white border hover:shadow-md transition">
    
                      {/* IMAGE – NO SIDE SPACING */}
                      <div className="relative h-44">
                        <Image
                          src={model.image}
                          alt={model.title}
                          fill
                          className="object-cover"
                        />
                      </div>
    
                      {/* TEXT */}
                      <div className="p-4 text-left">
                        <h3 className="text-blue-700 font-medium text-lg">
                          {model.title}
                        </h3>
                        <p className="text-green-600 text-sm">
                          {model.count}
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

        {/* Car Maintenance Tips */}

 <section className="max-w-7xl mx-20 px-6 py-16 relative">
      <h2 className="text-3xl font-semibold mb-8">
        Car Maintenance Tips
      </h2>

      {/* ARROWS */}
      <button
        onClick={() => setIndex(index > 0 ? index - 1 : index)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setIndex(index < maxIndex ? index + 1 : index)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
      >
        <ChevronRight />
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {cards
                .slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide
                )
                .map((card, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border shadow hover:shadow-xl transition"
                  >
                    <div className="relative h-52">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {card.desc}
                      </p>
                      <span className="text-blue-600 text-sm cursor-pointer">
                        more »
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
<div className="flex justify-center mt-6 gap-3">
  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`h-3 w-3 rounded-full transition-all duration-300 ${
        index === i
          ? "bg-blue-600 scale-110"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
    />
  ))}
</div>

    </section>


    {/* AutoStoreContent */}


     <section className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      
      {/* INTRO */}
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        Looking to upgrade or maintain your car? PakWheels AutoStore is your trusted
        source for car accessories and auto parts in Pakistan. From everyday essentials
        to performance upgrades, we make it easy to shop online for everything your
        vehicle needs – all from verified sellers and trusted brands.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-3xl font-semibold mb-4">
        Find the Right Car Accessories Online
      </h2>

      <p className="mb-5 leading-relaxed">
        Whether you want to enhance comfort, style, or functionality, we offer a wide
        range of interior and exterior car accessories:
      </p>

      <div className="space-y-3 mb-6">
        <p>
          <strong>Interior Upgrades</strong> – seat covers, car mats, steering grips,
          sunshades, organizers, gear knobs, dashboard covers, and LED lighting.
        </p>

        <p>
          <strong>Exterior Enhancements</strong> – body kits, rain guards, car windscreen,
          wipers, sunshades, window tints, spoilers, fenders, doors, front grills, and
          number plate frames.
        </p>

        <p>
          <strong>Car Electronics & Gadgets</strong> – dash cams, parking sensors,
          chargers, Bluetooth kits, and entertainment systems.
        </p>
      </div>

      <p className="mb-12 leading-relaxed">
        Instead of browsing multiple shops, PakWheels AutoStore brings all accessories
        under one platform, helping you save time and money while shopping securely.
      </p>

      {/* SECTION 2 */}
      <h2 className="text-3xl font-semibold mb-4">
        Original Auto Parts & Spare Parts for Every Vehicle
      </h2>

      <p className="mb-5 leading-relaxed">
        Need reliable spare parts or automotive components? We stock genuine auto parts
        for major car brands in Pakistan, including:
      </p>

      <div className="space-y-3 mb-6">
        <p>
          <strong>Engine & Maintenance Parts</strong> – filters, spark plugs, lubricants,
          and batteries.
        </p>

        <p>
          <strong>Suspension & Braking Components</strong> – shocks, brake shoes, rotors,
          and springs.
        </p>

        <p>
          <strong>Body & Electrical Parts</strong> – bumpers, headlights, sensors, and
          wiring.
        </p>
      </div>

      <p className="mb-12 leading-relaxed">
        Every part is quality-checked and sourced from trusted suppliers, so you can
        shop with confidence knowing your vehicle will perform at its best.
      </p>

      {/* SECTION 3 */}
      <h2 className="text-3xl font-semibold mb-4">
        Why Shop at PakWheels AutoStore?
      </h2>

      <ul className="list-disc pl-5 space-y-3 mb-12">
        <li>
          <strong>All-in-One Platform:</strong> Browse thousands of car accessories and
          spare parts in one place.
        </li>
        <li>
          <strong>Verified Sellers:</strong> Only trusted suppliers with original
          products.
        </li>
        <li>
          <strong>Affordable Pricing:</strong> Quality parts and accessories at
          competitive rates.
        </li>
        <li>
          <strong>Nationwide Delivery:</strong> Get your order anywhere in Pakistan,
          quickly and reliably.
        </li>
        <li>
          <strong>Trusted Since 2003:</strong> Over two decades of helping car owners and
          enthusiasts.
        </li>
      </ul>

      {/* SECTION 4 */}
      <h2 className="text-3xl font-semibold mb-4">
        Refunds & Returns
      </h2>

      <p className="leading-relaxed mb-4">
        PakWheels has a consumer-friendly returns policy to ensure peace of mind. If a
        product doesn’t meet expectations, you can request a refund or replacement
        within 3 days after claim approval.
      </p>

      <a
        href="#"
        className="text-blue-600 font-medium hover:underline"
      >
        Read our full Refunds & Returns Policy →
      </a>

    </section>


{/* TrustBadges */}
    <section className="bg-[#f5f5f4] py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

        {/* ITEM 1 */}
        <div>
          <div className="mx-auto mb-4 h-20 w-20  flex items-center justify-center">
            <Image
              src="/ship1.svg"
              alt="Years of Excellence"
              width={80}
              height={80}
            />
          </div>
          <h3 className="font-semibold text-lg mb-3">Years of Excellence</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              Trusted since 21 years
            </li>
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              100K+ satisfied customers
            </li>
          </ul>
        </div>

        {/* ITEM 2 */}
        <div>
          <div className="mx-auto mb-4 h-20 w-20  flex items-center justify-center">
            <Image
              src="/ship2.svg"
              alt="Secure Payments"
              width={80}
              height={80}
            />
          </div>
          <h3 className="font-semibold text-lg mb-3">Secure Payments</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              Money back guarantee
            </li>
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              100% secure payments
            </li>
          </ul>
        </div>

        {/* ITEM 3 */}
        <div>
          <div className="mx-auto mb-4 h-20 w-20  flex items-center justify-center">
            <Image
              src="/ship3.svg"
              alt="Shipping Policy"
              width={80}
              height={80}
            />
          </div>
          <h3 className="font-semibold text-lg mb-3">Shipping Policy</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              Nationwide coverage
            </li>
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              Refund and returns
            </li>
          </ul>
        </div>

        {/* ITEM 4 */}
        <div>
          <div className="mx-auto mb-4 h-20 w-20  flex items-center justify-center">
            <Image
              src="/ship4.svg"
              alt="Customer Support"
              width={80}
              height={80}
            />
          </div>
          <h3 className="font-semibold text-lg mb-3">Days Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              Online customer support
            </li>
            <li className="flex justify-center gap-2">
              <Check size={16} className="text-green-600" />
              Dedicated call support
            </li>
          </ul>
        </div>

      </div>
    </section>
          
    </>
  )
}