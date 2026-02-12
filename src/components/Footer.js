import React from 'react'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { MessageCircleHeart } from 'lucide-react';
import { Youtube } from 'lucide-react';
import Image from "next/image";

 export default function Footer() {
  return (
    <>
    <div className="w-full bg-white py-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* LEFT SIDE TEXT */}
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-2xl font-semibold text-[#1c3d82]">
        Get The PakWheels App
      </h2>

      <p className="text-gray-600 mt-3 text-base leading-relaxed">
        Buy & Sell Cars, Bikes and Auto Parts faster and better
        <br className="hidden lg:block" />
        using our App
      </p>

      {/* APP STORE BUTTONS */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
        <Image src="/img3.png" width={120} height={40} alt="Google Play" />
        <Image src="/img2.png" width={120} height={40} alt="App Store" />
        <Image src="/img1.jpg" width={120} height={40} alt="Huawei AppGallery" />
      </div>
    </div>

    {/* QR + TEXT SIDE */}
    <div className="flex flex-col items-center justify-center flex-1 gap-3">
      <Image
        src="/arrow.svg"
        alt="Arrow"
        width={90}
        height={90}
      />

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
        {/* QR Code */}
        <Image src="/scan.svg" alt="QR Code" width={95} height={95} />

        {/* Scan Text */}
        <div className="text-gray-700 text-center sm:text-left leading-tight">
          <p className="text-base font-medium">Scan the QR</p>
          <p className="text-base font-medium">to get the App</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE PHONE IMAGES */}
    <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
      <Image
        src="/mo.png"
        width={240}
        height={240}
        alt="App Phones"
        className="object-contain"
      />
    </div>

  </div>
</div>




    <footer className="bg-[#2a2f34] text-gray-300 pt-12 pb-6 px-6 md:px-16">
      
      {/* -------------------- ROW 1 -------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-5 ">

        {/* Cars By Make */}
        <div>
          <h3 className="font-semibold text-md mb-3">Cars By Make</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>Toyota Cars for Sale</li>
            <li>Suzuki Cars for Sale</li>
            <li>Honda Cars for Sale</li>
            <li>Daihatsu Cars for Sale</li>
            <li>Mitsubishi Cars for Sale</li>
            <li>Nissan Cars for Sale</li>
            <li>Mercedes Cars for Sale</li>
            <li>Hyundai Cars for Sale</li>
            <li>BMW Cars for Sale</li>
          </ul>
        </div>

        {/* Cars By City */}
        <div>
          <h3 className="font-semibold text-md mb-3">Cars By City</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>Cars in Karachi</li>
            <li>Cars in Lahore</li>
            <li>Cars in Islamabad</li>
            <li>Cars in Rawalpindi</li>
            <li>Cars in Peshawar</li>
            <li>Cars in Faisalabad</li>
            <li>Cars in Multan</li>
            <li>Cars in Gujranwala</li>
            <li>Cars in Sialkot</li>
          </ul>
        </div>

        {/* Explore PakWheels */}
        <div>
          <h3 className="font-semibold text-md mb-3">Explore PakWheels</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>Used Cars</li>
            <li>Used Bikes</li>
            <li>New Cars</li>
            <li>Auto Parts & Accessories</li>
            <li>Cool Rides</li>
            <li>Forums</li>
            <li>Autoshow</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* PakWheels.com */}
        <div>
          <h3 className="font-semibold text-md mb-3">PakWheels.com</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>About PakWheels.com</li>
            <li>Our Products</li>
            <li>Advertise With Us</li>
            <li>How To Pay</li>
            <li>FAQs</li>
            <li>Refunds & Returns</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Sell + Newsletter */}
        <div>
          <h3 className="font-semibold text-md mb-3">Sell On PakWheels</h3>
          <ul className="space-y-1 mb-4 text-[#999992] text-sm">
            <li>Sell Your Car</li>
            <li>Sell Your Bike</li>
            <li>Sell Accessory</li>
          </ul>

          <h3 className="font-semibold text-md mb-2">Subscribe to our Newsletter</h3>
          <div className="flex w-60">
            <input
              className="w-full px-2 py-1 bg-white text-black"
              placeholder="name@email.com"
            />
            <button className="bg-green-600 px-2 py- text-white">Subscribe</button>
          </div>
        </div>
      </div>

      {/* -------------------- ROW 2 (Follow Us NICHE) -------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-5  mt-10  border-b border-gray-600 pb-10">

        {/* Cars by Category */}
        <div>
          <h3 className="font-semibold text-md mb-3">Cars by Category</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>Jeep</li>
            <li>Japanese Cars</li>
            <li>Imported Cars</li>
            <li>Automatic Cars</li>
            <li>Low Priced Cars</li>
            <li>4x4 Cars</li>
            <li>660cc Cars</li>
            <li>1000cc Cars</li>
          </ul>
        </div>

        {/* Cars By Body Type */}
        <div>
          <h3 className="font-semibold text-md mb-3">Cars by Body Type</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>Hatchback</li>
            <li>Sedan</li>
            <li>Crossover</li>
            <li>SUV</li>
            <li>Mini Van</li>
            <li>Micro Van</li>
            <li>Van</li>
            <li>Compact SUV</li>
          </ul>
        </div>

        {/* Cars by Color */}
        <div>
          <h3 className="font-semibold text-md mb-3">Cars by Color</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>White Cars</li>
            <li>Silver Cars</li>
            <li>Black Cars</li>
            <li>Grey Cars</li>
            <li>Blue Cars</li>
            <li>Red Cars</li>
            <li>Green Cars</li>
            <li>Gold Cars</li>
          </ul>
        </div>

        {/* Cars by Province */}
        <div>
          <h3 className="font-semibold text-md mb-3">Cars by Province</h3>
          <ul className="space-y-1 text-[#999992] text-sm">
            <li>Cars in Punjab</li>
            <li>Cars in Sindh</li>
            <li>Cars in KPK</li>
            <li>Cars in Balochistan</li>
            <li>Cars in Azad Kashmir</li>
            <li>Cars in Federally Administered</li>
            <li>Tribal Areas</li>
          </ul>
        </div>

        {/* FOLLOW US (Now Correctly in Row 2) */}
        <div>
          <h3 className="font-semibold text-md mb-3">Follow Us</h3>

          <div className="flex space-x-3 mb-6">
      
      {/* Twitter */}
      <div className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full
        hover:bg-[#1DA1F2] transition-all duration-300 text-black hover:text-white cursor-pointer">
        <Twitter size={18} />
      </div>

      {/* Facebook */}
      <div className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full
        hover:bg-[#1877F2] transition-all duration-300 text-black hover:text-white cursor-pointer">
        <Facebook size={18} />
      </div>

      {/* Pinterest */}
      <div className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full
        hover:bg-[#E60023] transition-all duration-300 text-black hover:text-white cursor-pointer">
        <MessageCircleHeart size={18} />
      </div>

      {/* Instagram (Gradient color like real IG) */}
      <div className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full
        hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600
        transition-all duration-300 text-black hover:text-white cursor-pointer">
        <Instagram size={18} />
      </div>

      {/* YouTube */}
      <div className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full
        hover:bg-[#FF0000] transition-all duration-300 text-black hover:text-white cursor-pointer">
        <Youtube size={18} />
      </div>

    </div>

   <h3 className="font-semibold text-md mb-3">Download Mobile Apps</h3>

<div className="flex flex-col space-y-3">

  {/* Row 1 – Google + Apple */}
  <div className="flex space-x-3">

    {/* Google Play */}
    <a href="https://play.google.com/store" target="_blank" className="block">
      <Image
        src="/img3.png"
        alt="Google Play"
        width={160}
        height={50}
        unoptimized
        className="rounded-md cursor-pointer hover:scale-105 transition duration-300"
      />
    </a>

    {/* App Store */}
    <a href="https://www.apple.com/app-store/" target="_blank" className="block">
      <Image
        src="/img2.png"
        alt="App Store"
        width={160}
        height={50}
        unoptimized
        className="rounded-md cursor-pointer hover:scale-105 transition duration-300"
      />
    </a>

  </div>

  {/* Row 2 – Huawei */}
  <a href="https://appgallery.huawei.com/" target="_blank" className="block">
    <Image
      src="/img1.jpg"
      alt="Huawei AppGallery"
      width={160}
      height={50}
      unoptimized
      className="rounded-md cursor-pointer hover:scale-105 transition duration-300"
    />
  </a>

</div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-12 text-[12px] text-[#999992]">
        <p>Copyright © 2003 - 2025 PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
        <p className="mt-2">Terms of Service | Privacy Policy</p>
        <p className="mt-2">
          Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.
        </p>
      </div>

      {/* Sell My Car Button */}
      <div className="fixed bottom-5 right-5 bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg cursor-pointer text-lg">
        <span className="text-xl">🚗</span> Sell My Car
      </div>

    </footer>
  
      
    </>
  )
}




