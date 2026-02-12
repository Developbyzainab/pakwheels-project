// "use client"
// import { useState } from "react"
// import SignInForm from "./SignInForm"

// export default function AuthModal({ onClose }) {
//   const [view, setView] = useState("signin")

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      
//       {/* 🔥 THIS IS THE MAIN MODAL CONTAINER */}
//       <div className="relative w-[460px] bg-white rounded-2xl shadow-xl overflow-hidden">
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black cursor-pointer"
//         >
//           ✕
//         </button>

//         {/* Content */}
//         <div className="py-6">
//           {view === "signin" && (
//             <SignInForm
//               onBack={onClose}
//               onSignUp={() => setView("signup")}
//             />
//           )}

//           {view === "signup" && (
//             <div className="px-8 py-5">
//               <button
//                 onClick={() => setView("signin")}
//                 className="mb-4 underline cursor-pointer"
//               >
//                 ← Back
//               </button>
//               <h2 className="text-xl font-semibold">Sign Up</h2>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
