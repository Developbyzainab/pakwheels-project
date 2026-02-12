// "use client"
// import { useEffect, useState } from "react"
// import PhoneInput from "react-phone-input-2"
// import "react-phone-input-2/lib/style.css"
// import { FcGoogle } from "react-icons/fc"
// import { FaFacebookF } from "react-icons/fa"
// import { Mail } from 'lucide-react';

// const slides = [
//   {
//     img: "/d1.svg",
//     title: "Create Quick Alerts",
//     desc: "Create alerts quickly and get notified when new listings become available",
//   },
//   {
//     img: "/d2.svg",
//     title: "Buy Faster",
//     desc: "Save searches and get instant alerts for new cars",
//   },
//   {
//     img: "/d3.svg",
//     title: "Stay Updated",
//     desc: "Never miss a good deal with smart alerts",
//   },
// ]

// export default function AuthModal({ onEmail, onClose }) {
//   const [slide, setSlide] = useState(0)
//   const [phone, setPhone] = useState("")

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSlide((s) => (s + 1) % slides.length)
//     }, 4000)
//     return () => clearInterval(id)
//   }, [])

//   return (
//     // Overlay background with blur & dim
//     <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-start justify-center z-50 overflow-y-auto py-10">
      
//       {/* Modal card */}
//       <div className="relative w-[420px] bg-white rounded-xl shadow-lg flex flex-col">
        
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl z-10 cursor-pointer"
//         >
//           ✕
//         </button>

//        {/* Slider */}
// <div className="mt-6 text-center relative px-6 overflow-hidden h-[280px]">
//   <div className="relative w-full h-full">
//     {slides.map((s, i) => (
//       <div
//         key={i}
//         className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out
//           ${i === slide ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-full z-0"}
//         `}
//       >
//         <img
//           src={s.img}
//           alt={s.title}
//           className="w-full max-w-[160px] h-auto mb-4"
//         />
//         <h3 className="text-lg font-semibold text-gray-900 text-center">{s.title}</h3>
//         <p className="text-sm text-gray-500 mt-1 leading-relaxed text-center">{s.desc}</p>
//       </div>
//     ))}
//   </div>

//   {/* Left Arrow */}
//   <button
//     onClick={() => setSlide(slide === 0 ? slides.length - 1 : slide - 1)}
//     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-black text-2xl hover:bg-gray-300 transition cursor-pointer z-20"
//   >
//     ‹
//   </button>

//   {/* Right Arrow */}
//   <button
//     onClick={() => setSlide((slide + 1) % slides.length)}
//     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-black text-2xl hover:bg-gray-300 transition cursor-pointer z-20"
//   >
//     ›
//   </button>

//   {/* Dots */}
//   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//     {slides.map((_, i) => (
//       <span
//         key={i}
//         onClick={() => setSlide(i)}
//         className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
//           slide === i ? "bg-blue-600 scale-125" : "bg-gray-300"
//         }`}
//       />
//     ))}
//   </div>
// </div>

        

//         {/* Form section */}
//         <div className="px-6 flex flex-col space-y-4 py-4">
//           {/* Phone Input */}
//           <div>
//             <PhoneInput
//               country="pk"
//               value={phone}
//               onChange={setPhone}
//               enableSearch={false}
//               countryCodeEditable={false}
//               inputProps={{ placeholder: "Number" }}
//               inputStyle={{
//                 width: "100%",
//                 height: "46px",
//                 paddingLeft: "100px",
//                 border: "1px solid #d1d5db",
//                 borderRadius: "6px",
//                 backgroundColor: "#fff",
//                 fontSize: "14px",
//               }}
//               buttonStyle={{
//                 backgroundColor: "#f9fafb",
//                 borderRight: "1px solid #d1d5db",
//                 borderRadius: "6px 0 0 6px",
//                 width: "70px",
//               }}
//               dropdownStyle={{ zIndex: 9999 }}
//             />
//           </div>

//           {/* Continue Button */}
//           <button
//             type="submit"
//             className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-20 font-semibold transition"
//           >
//             Continue with Mobile Number
//           </button>

//           {/* Divider */}
//           <div className="flex items-center gap-3 my-4">
//             <div className="flex-1 border-b" />
//             <span className="text-xs text-gray-400 uppercase">or</span>
//             <div className="flex-1 border-b" />
//           </div>

//           {/* Social Buttons */}
//           <button className="w-full flex items-center justify-center gap-5 border py-2 rounded-sm mb-3 font-medium hover:bg-gray-50 transition">
//             <FcGoogle size={20} />
//             Continue with Google
//           </button>

//           <button className="w-full flex items-center justify-center gap-4 border py-2 rounded-sm mb-3 font-medium hover:bg-gray-50 transition">
//             <FaFacebookF size={18} className="text-blue-600" />
//             Continue with Facebook
//           </button>

//           <button
//             type="button"
//             onClick={onEmail}
//             className="w-full flex items-center justify-center gap-7 border py-2 rounded-sm mb-3 font-medium hover:bg-gray-50 transition"
//           >
//             <Mail size={18}/>
//             Continue with Email
//           </button>

//           {/* Footer */}
//           <p className="text-center text-xs text-gray-400 mt-6 mb-4">
//             By continuing you agree to our{" "}
//             <span className="underline cursor-pointer">Terms of Service</span> &{" "}
//             <span className="underline cursor-pointer">Privacy Policy</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// } 


