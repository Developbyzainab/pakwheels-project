





// 📁 components/Navbar.js

"use client";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Mail, Smartphone, ChevronLeft } from "lucide-react";

import React, { useState, useEffect } from "react";

const slides = [
  { 
    img: "/d1.svg", 
    title: "Create Quick Alerts", 
    desc: "Create alerts quickly and get notified when new listings become available" 
  },
  { 
    img: "/d2.svg", 
    title: "Buy Faster", 
    desc: "Save searches and get instant alerts for new cars" 
  },
  { 
    img: "/d3.svg", 
    title: "Stay Updated", 
    desc: "Never miss a good deal with smart alerts" 
  },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState("slider");

  // 🔥 PREVENT BODY SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <nav className="relative z-[9999]">
        {/* TOP BAR - WITH LEFT RED ICON + DOWNLOAD APP VIA SMS */}
        <div className="border-b text-sm bg-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
            
            {/* LEFT SIDE - RED MOBILE ICON + DOWNLOAD APP VIA SMS */}
            <div className="flex items-center gap-2 text-gray-700">
              <Smartphone className="w-4 h-4 text-red-600" />
              <span className="cursor-pointer hover:underline text-sm">Download App via SMS</span>
            </div>

            {/* RIGHT SIDE - URDU + SIGN UP + SIGN IN */}
            <div className="flex items-center gap-3 text-sm">
              <button className="cursor-pointer text-gray-700 hover:text-red-600">اردو</button>
              <span className="text-gray-300">|</span>

              <button
                className="cursor-pointer text-gray-700 hover:text-red-600"
                onClick={() => {
                  setModalStep("signup");
                  setModalOpen(true);
                }}
              >
                Sign Up
              </button>

              <span className="text-gray-300">|</span>

              <button
                className="cursor-pointer text-gray-700 hover:text-red-600"
                onClick={() => {
                  setModalStep("slider");
                  setModalOpen(true);
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* AUTH MODAL - PERFECT SCROLLING */}
        {modalOpen && (
          <AuthModal
            step={modalStep}
            setStep={setModalStep}
            onClose={() => setModalOpen(false)}
          />
        )}

        {/* MAIN NAVBAR */}
        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">

            {/* LOGO */}
            <Link href="/">
              <Image src="/1 .png" alt="logo" width={150} height={40} unoptimized />
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              ☰
            </button>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-700">

              {/* USED CARS */}
              <li className="relative group cursor-pointer" onClick={() => setActiveMenu("used")}>
                <Link
                  href="/used-cars"
                  className={`flex items-center gap-1 pb-2 ${
                    activeMenu === "used"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                   }`}
                >
                  Used Cars <span className="text-[10px]">▼</span>
                </Link>

                <div className="absolute hidden group-hover:block bg-white shadow-md p-3 w-44">
                  <Link href="/used-cars/honda" className="block py-1 hover:text-red-600">Honda</Link>
                  <Link href="/used-cars/toyota" className="block py-1 hover:text-red-600">Toyota</Link>
                  <Link href="/used-cars/suzuki" className="block py-1 hover:text-red-600">Suzuki</Link>
                </div>
              </li>

              {/* NEW CARS */}
              <li className="relative group" onClick={() => setActiveMenu("new")}>
                <Link
                  href="/new-cars"
                  className={`
                    relative pb-3 flex items-center gap-1
                    transition-colors duration-200
                    ${activeMenu === "new" ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600"}
                  `}
                >
                  New Cars <span className="text-[10px]">▼</span>

                  {activeMenu === "new" && (
                    <span className="absolute left-0 -bottom-[6px] h-[3px] w-full bg-red-600"></span>
                  )}
                </Link>

                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full mt-3
                    opacity-0 translate-y-6
                    pointer-events-none
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:pointer-events-auto
                  "
                >
                  <div className="bg-white shadow-xl border">
                    <div className="grid grid-cols-3 gap-10 px-10 py-8 text-[14px] text-gray-700 min-w-[900px]">
                      <div className="space-y-4 pr-8 border-r border-gray-200">
                        <p className="font-semibold text-gray-900">Find New Cars</p>
                        <p className="text-blue-600 hover:text-red-600 cursor-pointer">
                          See new cars in Pakistan
                        </p>
                        <p className="font-semibold text-gray-900">Reviews</p>
                        <p className="text-blue-600 hover:text-red-600 cursor-pointer">
                          Read reviews of all cars
                        </p>
                      </div>

                      <div className="space-y-3 pr-8 border-r border-gray-200">
                        <p className="font-semibold text-gray-900">Popular Brands</p>
                        {[
                          "Suzuki Cars",
                          "Toyota Cars",
                          "Honda Cars",
                          "Kia Cars",
                          "Hyundai Cars",
                        ].map((b, i) => (
                          <p
                            key={i}
                            className="text-blue-600 hover:text-red-600 cursor-pointer"
                          >
                            {b}
                          </p>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <p className="font-semibold text-gray-900">Popular New Cars</p>
                        {[
                          "Honda Civic",
                          "Suzuki Alto",
                          "Honda City",
                          "Toyota Corolla",
                        ].map((c, i) => (
                          <p
                            key={i}
                            className="text-blue-600 hover:text-red-600 cursor-pointer"
                          >
                            {c}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div
                      className="
                        h-[3px] bg-red-600
                        scale-x-0 origin-left
                        transition-transform duration-300
                        group-hover:scale-x-100
                      "
                    ></div>
                  </div>
                </div>
              </li>

              {/* BIKES */}
              <li className="relative group cursor-pointer" onClick={() => setActiveMenu("bikes")}>
                <Link
                  href="/Bikes"
                  className={`flex items-center gap-1 pb-2 ${
                    activeMenu === "bikes"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  Bikes <span className="text-[10px]">▼</span>
                </Link>

                <div className="absolute hidden group-hover:block bg-white shadow-md p-3 w-44">
                  <Link href="/bikes/honda" className="block py-1 hover:text-red-600">Honda</Link>
                  <Link href="/bikes/yamaha" className="block py-1 hover:text-red-600">Yamaha</Link>
                </div>
              </li>

              {/* AUTO STORE */}
              <li className="relative group cursor-pointer" onClick={() => setActiveMenu("store")}>
                <Link
                  href="/auto-store"
                  className={`flex items-center gap-1 pb-2 ${
                    activeMenu === "store"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  Auto Store <span className="text-[10px]">▼</span>
                </Link>

                <div className="absolute hidden group-hover:block bg-white shadow-md p-3 w-44">
                  <Link href="/auto-store/accessories" className="block py-1 hover:text-red-600">Accessories</Link>
                  <Link href="/auto-store/parts" className="block py-1 hover:text-red-600">Parts</Link>
                </div>
              </li>

              {/* SIMPLE LINKS */}
              <li onClick={() => setActiveMenu("videos")}>
                <Link
                  href="/videos"
                  className={`pb-2 ${
                    activeMenu === "videos"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  Videos
                </Link>
              </li>

              <li onClick={() => setActiveMenu("forums")}>
                <Link
                  href="/forums"
                  className={`pb-2 ${
                    activeMenu === "forums"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  Forums
                </Link>
              </li>

              <li onClick={() => setActiveMenu("blog")}>
                <Link
                  href="/blog"
                  className={`pb-2 ${
                    activeMenu === "blog"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  Blog
                </Link>
              </li>

              {/* MORE */}
              <li className="relative group cursor-pointer" onClick={() => setActiveMenu("more")}>
                <Link
                  href="#"
                  className={`flex items-center gap-1 pb-2 relative ${
                    activeMenu === "more"
                      ? "text-red-600 font-semibold border-b-2 border-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  More <span className="text-[10px]">▼</span>

                  <span className="absolute -top-3 left-10 bg-blue-800 text-white text-[9px] px-2 py-[1px] rounded">
                    New
                  </span>
                </Link>

                <div className="absolute hidden group-hover:block bg-white shadow-md p-3 w-44">
                  <Link href="/prices" className="block py-1 hover:text-red-600">Prices</Link>
                  <Link href="/guides" className="block py-1 hover:text-red-600">Guides</Link>
                </div>
              </li>
            </ul>

            {/* POST AN AD BUTTON */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => toggleDropdown("postad")}
                className="bg-red-600 text-white px-5 py-2 rounded font-semibold hover:bg-red-700 cursor-pointer"
              >
                Post an Ad <span className="text-[10px]">▼</span>
              </button>

              {openDropdown === "postad" && (
                <div className="absolute right-0 bg-white shadow-md p-3 w-44">
                  <Link href="/sell-car" className="block py-1 hover:text-red-600">Sell Car</Link>
                  <Link href="/sell-bike" className="block py-1 hover:text-red-600">Sell Bike</Link>
                  <Link href="/sell-part" className="block py-1 hover:text-red-600">Post Spare Part</Link>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenu && (
            <ul className="lg:hidden bg-white border-t p-4 text-gray-700 space-y-3">
              <MobileItem name="used" label="Used Cars" items={["Honda", "Toyota", "Suzuki"]} toggle={toggleDropdown} open={openDropdown} href="/used-cars" />
              <MobileItem name="new" label="New Cars" items={["2024 Models", "Upcoming Cars"]} toggle={toggleDropdown} open={openDropdown} href="/new-cars" />
              <MobileItem name="bikes" label="Bikes" items={["Honda", "Yamaha"]} toggle={toggleDropdown} open={openDropdown} href="/bikes" />
              <MobileItem name="store" label="Auto Store" items={["Accessories", "Parts"]} toggle={toggleDropdown} open={openDropdown} href="/auto-store" />

              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/forums">Forums</Link></li>
              <li><Link href="/blog">Blog</Link></li>

              <MobileItem name="more" label="More" items={["Prices", "Guides"]} toggle={toggleDropdown} open={openDropdown} href="#" />

              <MobileItem
                name="post"
                label="Post an Ad"
                red
                items={["Sell Car", "Sell Bike", "Post Spare Part"]}
                toggle={toggleDropdown}
                open={openDropdown}
                href="/sell-car"
              />
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

// Mobile Item Component
function MobileItem({ name, label, items, toggle, open, red, href }) {
  return (
    <li>
      <Link
        href={href}
        onClick={() => toggle(name)}
        className={`w-full flex justify-between items-center ${
          red ? "bg-red-600 text-white py-2 rounded px-3" : ""
        }`}
      >
        {label}
        <span className="text-[10px]">▼</span>
      </Link>

      {open === name && (
        <div className="pl-4 mt-2 space-y-1">
          {items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
    </li>
  );
}

// =============================================
// ✅ PERFECT SCROLLING MODAL - 100% FIXED
// =============================================

// MAIN AUTH MODAL COMPONENT
function AuthModal({ step, setStep, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999]">
      {/* SOLID BLACK OVERLAY */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      
      {/* SCROLLABLE CONTAINER */}
      <div className="relative h-full overflow-y-auto">
        <div className="flex items-start justify-center p-4 min-h-full">
          {/* MODAL CARD */}
          <div
            className="relative w-[460px] bg-white rounded-2xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {step === "slider" && (
              <SliderForm 
                onEmail={() => setStep("signup")} 
                onClose={onClose}
                onSignIn={() => setStep("signin")}
              />
            )}
            
            {step === "signup" && (
              <SignUpForm 
                onBack={() => setStep("signin")}
                onSignIn={() => setStep("signin")}
              />
            )}
            
            {step === "signin" && (
              <SignInForm
                onBack={() => setStep("slider")}
                onSignUp={() => setStep("signup")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================
// ✅ SLIDER FORM - 100% WORKING CLOSE BUTTON
// =============================================
function SliderForm({ onEmail, onClose, onSignIn }) {
  const [slide, setSlide] = useState(0);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // 🔥 FIXED CLOSE FUNCTION
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden relative">
      {/* CLOSE BUTTON - 100% WORKING */}
      <button
        onClick={handleClose}
        className="absolute right-3 top-3 text-gray-500 hover:text-black text-xl z-50 cursor-pointer bg-white hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200"
        type="button"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Slider - REDUCED HEIGHT */}
      <div className="mt-5 text-center relative px-4 overflow-hidden h-[210px]">
        <div className="relative w-full h-full">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out
                ${i === slide ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-full z-0"}
              `}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full max-w-[120px] h-auto mb-2"
              />
              <h3 className="text-base font-semibold text-gray-900 text-center">{s.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed text-center px-2">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => setSlide(slide === 0 ? slides.length - 1 : slide - 1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 w-7 h-7 rounded-full flex items-center justify-center text-black text-xl hover:bg-gray-300 transition cursor-pointer z-20"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 w-7 h-7 rounded-full flex items-center justify-center text-black text-xl hover:bg-gray-300 transition cursor-pointer z-20"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 w-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                slide === i ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form section - REDUCED SPACING */}
      <div className="px-5 flex flex-col space-y-2.5 py-3">
        {/* Phone Input */}
        <div>
          <PhoneInput
            country="pk"
            value={phone}
            onChange={setPhone}
            enableSearch={false}
            countryCodeEditable={false}
            inputProps={{ placeholder: "Mobile Number" }}
            inputStyle={{
              width: "100%",
              height: "40px",
              paddingLeft: "85px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              backgroundColor: "#fff",
              fontSize: "13px",
            }}
            buttonStyle={{
              backgroundColor: "#f9fafb",
              borderRight: "1px solid #d1d5db",
              borderRadius: "6px 0 0 6px",
              width: "60px",
            }}
            dropdownStyle={{ zIndex: 9999 }}
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition text-sm"
        >
          Continue with Mobile Number
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-0.5">
          <div className="flex-1 border-b" />
          <span className="text-[10px] text-gray-400 uppercase">or</span>
          <div className="flex-1 border-b" />
        </div>

        {/* Social Buttons */}
        <button className="w-full flex items-center justify-center gap-4 border py-1.5 rounded-sm font-medium hover:bg-gray-50 transition text-sm">
          <FcGoogle size={16} />
          Continue with Google
        </button>

        <button className="w-full flex items-center justify-center gap-3 border py-1.5 rounded-sm font-medium hover:bg-gray-50 transition text-sm">
          <FaFacebookF size={15} className="text-blue-600" />
          Continue with Facebook
        </button>

        <button
          type="button"
          onClick={onEmail}
          className="w-full flex items-center justify-center gap-5 border py-1.5 rounded-sm font-medium hover:bg-gray-50 transition text-sm"
        >
          <Mail size={15}/>
          Continue with Email
        </button>

        {/* Sign In Link */}
        <p className="text-center text-xs mt-1">
          Already have an account?{" "}
          <span onClick={onSignIn} className="text-blue-600 cursor-pointer hover:underline font-medium">
            Sign In
          </span>
        </p>

        {/* Footer */}
        <p className="text-center text-[10px] text-gray-400 mt-1 mb-0">
          By continuing you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> &{" "}
          <span className="underline cursor-pointer">Privacy</span>
        </p>
      </div>
    </div>
  );
}

// =============================================
// ✅ SIGN UP FORM - DARKER HEADINGS + BETTER UI
// =============================================
function SignUpForm({ onBack, onSignIn }) {
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <div className="px-5 py-4 max-w-md mx-auto">
        {/* Back Arrow */}
        <button onClick={onBack} className="mb-2 cursor-pointer">
          <ChevronLeft className="text-gray-700 w-5 h-5"/>
        </button>

        {/* Heading - Welcome Message Changed */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Enter your email
        </h2>

        {/* Email - DARKER LABEL */}
        <div className="mb-3.5">
          <label className="block text-gray-800 font-medium mb-1 text-xs">Email Address</label>
          <input
            type="email"
            placeholder="username@email.com"
            className="w-full border-b border-gray-300 py-1.5 outline-none placeholder-gray-400 focus:border-blue-600 text-sm"
          />
        </div>

        {/* Full Name - DARKER LABEL */}
        <div className="mb-3.5">
          <label className="block text-gray-800 font-medium mb-1 text-xs">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border-b border-gray-300 py-1.5 outline-none placeholder-gray-400 focus:border-blue-600 text-sm"
          />
        </div>

        {/* Password - DARKER LABEL */}
        <div className="mb-3.5 relative">
          <label className="block text-gray-800 font-medium mb-1 text-xs">Password</label>
          <input
            type={p1 ? "text" : "password"}
            placeholder="Set a new password"
            className="w-full border-b border-gray-300 py-1.5 outline-none placeholder-gray-400 focus:border-blue-600 text-sm pr-14"
          />
          <span
            onClick={() => setP1(!p1)}
            className="absolute right-0 top-[26px] text-[10px] underline cursor-pointer text-gray-700 font-medium"
          >
            {p1 ? "Hide" : "Show"}
          </span>
        </div>

        {/* Confirm Password - DARKER LABEL */}
        <div className="mb-3.5 relative">
          <label className="block text-gray-800 font-medium mb-1 text-xs">Confirm Password</label>
          <input
            type={p2 ? "text" : "password"}
            placeholder="Enter your password again"
            className="w-full border-b border-gray-300 py-1.5 outline-none placeholder-gray-400 focus:border-blue-600 text-sm pr-14"
          />
          <span
            onClick={() => setP2(!p2)}
            className="absolute right-0 top-[26px] text-[10px] underline cursor-pointer text-gray-700 font-medium"
          >
            {p2 ? "Hide" : "Show"}
          </span>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-xs text-gray-700 mb-4">
          <input type="checkbox" className="accent-blue-600 w-3.5 h-3.5" />
          Send me updates & news
        </label>

        {/* Sign Up Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 font-semibold mb-3 transition-all rounded-md text-sm">
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-xs text-center mb-2">
          Already have an account?{" "}
          <span onClick={onSignIn} className="underline cursor-pointer font-medium text-blue-600">
            Sign In
          </span>
        </p>

        {/* Terms */}
        <p className="text-[10px] text-center text-gray-400">By continuing you agree to our</p>
        <p className="text-[10px] text-center underline text-gray-400 cursor-pointer">
          Terms of Service & Privacy Policy
        </p>
      </div>
    </div>
  );
}

// =============================================
// ✅ SIGN IN FORM - FIXED SHOW/HIDE + DARKER HEADINGS
// =============================================
function SignInForm({ onBack, onSignUp }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <div className="px-5 py-4 max-w-md mx-auto">
        {/* Back Arrow */}
        <button onClick={onBack} className="mb-2 cursor-pointer">
          <ChevronLeft className="text-gray-700 w-5 h-5"/>
        </button>

        {/* Heading - Changed to "Enter your email" */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Enter your email
        </h2>

        {/* Email - DARKER LABEL */}
        <div className="mb-3.5">
          <label className="block text-gray-800 font-medium mb-1 text-xs">Email Address</label>
          <input
            type="email"
            placeholder="username@email.com"
            className="w-full border-b border-gray-300 py-1.5 outline-none placeholder-gray-400 focus:border-blue-600 text-sm"
          />
        </div>

        {/* Password - WITH WORKING SHOW/HIDE */}
        <div className="mb-3.5 relative">
          <label className="block text-gray-800 font-medium mb-1 text-xs">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border-b border-gray-300 py-1.5 outline-none placeholder-gray-400 focus:border-blue-600 text-sm pr-14"
          />
          {/* <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-[26px] text-[10px] underline cursor-pointer text-gray-700 font-medium"
          >
            {showPassword ? "Hide" : "Show"}
          </span> */}
        </div>

        {/* Forgot Password */}
        <p className="text-left text-xs text-black cursor-pointer hover:underline mb-4">
          Forgot Password?
        </p>

        {/* Sign In Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 font-semibold mb-3 transition-all rounded-md text-sm">
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="text-xs text-center mb-2">
          Don't have an account?{" "}
          <span onClick={onSignUp} className="underline cursor-pointer font-medium text-blue-600">
            Sign Up
          </span>
        </p>

        {/* Terms */}
        <p className="text-[10px] text-center text-gray-400">By continuing you agree to our</p>
        <p className="text-[10px] text-center underline text-gray-400 cursor-pointer">
          Terms of Service & Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Navbar;