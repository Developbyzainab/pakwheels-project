"use client";
import Image from "next/image";

export default function SellAdPage() {
  return (
    <div className="w-full flex flex-col items-center  min-h-screen py-10 text-center">

      {/* ===== Pagination ===== */}
      <div className="bg-white shadow-sm w-190 max-w-4xl py-6 mb-10 rounded-md ml-[-120px]">
        <div className="flex justify-center gap-4 text-blue-600 text-lg">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>...</span>
          <span className="cursor-pointer">Next ›</span>
          <span className="cursor-pointer">Last »</span>
        </div>
      </div>

      {/* ===== Main Sell Section ===== */}
      <div className="flex flex-col items-center mt-10">

        <Image
          src="/gg.png"
          alt="Sell Car"
          width={180}
          height={180}
          className="mb-4"
        />

        <h1 className="text-3xl font-semibold text-blue-900">
          Post an ad for <span className="text-red-600">FREE</span>
        </h1>

        <p className="text-gray-600 text-lg mt-2">
          Sell it faster to thousands of buyers
        </p>

        <div className="flex items-center justify-center gap-6 mt-6">
  {/* Left Curved Arrow (Gray) */}
  <svg width="60" height="60" viewBox="0 0 100 100">
    <path
      d="M90 20 C40 20, 40 80, 15 80"
      stroke="#bdbdbd"
      strokeWidth="4"
      fill="transparent"
    />
    <polygon points="15,80 23,75 23,85" fill="#bdbdbd" />
  </svg>

  {/* Button */}
  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-md text-lg shadow-md">
    Sell Your Car
  </button>

  {/* Right Curved Arrow (Gray) */}
  <svg width="60" height="60" viewBox="0 0 100 100">
    <path
      d="M10 20 C60 20, 60 80, 85 80"
      stroke="#bdbdbd"
      strokeWidth="4"
      fill="transparent"
    />
    <polygon points="85,80 77,75 77,85" fill="#bdbdbd" />
  </svg>
</div>



      </div>

    </div>
  );
}
