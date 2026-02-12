// // SignUpForm.js
// "use client"
// import { useState } from "react"
// import { ChevronLeft } from "lucide-react"

// export default function SignUpForm({ onBack, onSignIn }) {
//   const [p1, setP1] = useState(false)
//   const [p2, setP2] = useState(false)

//   return (
//     <div className="w-full h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//       {/* Inner content padding */}
//       <div className="px-6 py-6 max-w-md mx-auto">
//         {/* Back Arrow */}
//         <button onClick={onBack} className="mb-6 cursor-pointer">
//           <ChevronLeft className="text-gray-700 w-6 h-6"/>
//         </button>

//         {/* Heading */}
//         <h2 className="text-2xl font-semibold text-gray-800 mb-8">
//           Let’s get you started!
//         </h2>

//         {/* Email */}
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Email Address</label>
//           <input
//             type="email"
//             placeholder="username@email.com"
//             className="w-full border-b border-gray-300 py-3 outline-none placeholder-gray-400"
//           />
//         </div>

//         {/* Full Name */}
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your full name here"
//             className="w-full border-b border-gray-300 py-3 outline-none placeholder-gray-400"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6 relative">
//           <label className="block text-gray-700 mb-2">Password</label>
//           <input
//             type={p1 ? "text" : "password"}
//             placeholder="Set a new password"
//             className="w-full border-b border-gray-300 py-3 outline-none placeholder-gray-400"
//           />
//           <span
//             onClick={() => setP1(!p1)}
//             className="absolute right-0 top-[50%] translate-y-[-50%] text-sm underline cursor-pointer text-gray-700"
//           >
//             {p1 ? "Hide" : "Show"}
//           </span>
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6 relative">
//           <label className="block text-gray-700 mb-2">Confirm Password</label>
//           <input
//             type={p2 ? "text" : "password"}
//             placeholder="Enter your password again"
//             className="w-full border-b border-gray-300 py-3 outline-none placeholder-gray-400"
//           />
//           <span
//             onClick={() => setP2(!p2)}
//             className="absolute right-0 top-[50%] translate-y-[-50%] text-sm underline cursor-pointer text-gray-700"
//           >
//             {p2 ? "Hide" : "Show"}
//           </span>
//         </div>

//         {/* Checkbox */}
//         <label className="flex items-center gap-2 text-sm text-gray-700 mb-8">
//           <input type="checkbox" className="accent-blue-600" />
//           Send me updates and relevant news.
//         </label>

//         {/* Sign Up */}
//         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold mb-6 transition-all rounded-md">
//           Sign Up
//         </button>

//         {/* Sign In */}
//         <p className="text-sm text-center mb-4">
//           Already have an account?{" "}
//           <span onClick={onSignIn} className="underline cursor-pointer font-medium">
//             Sign In
//           </span>
//         </p>

//         {/* Terms */}
//         <p className="text-xs text-center text-gray-400">By continuing you agree to our</p>
//         <p className="text-xs text-center underline text-gray-400 cursor-pointer">
//           Terms of Service & Privacy Policy
//         </p>
//       </div>
//     </div>
//   )
// }
