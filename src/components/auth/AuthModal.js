// "use client"
import { useState, useEffect } from "react"
import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"
import ThirdForm from "./ThirdForm"

export default function AuthModal({ open, start, onClose }) {
  const [screen, setScreen] = useState(start)

  useEffect(() => {
    setScreen(start)
  }, [start])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Background Gradient + Blur */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-700/40 to-pink-600/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white w-[420px] rounded-2xl shadow-2xl p-6">

        {screen === "signup" && (
          <SignUpForm
            onBack={() => setScreen("signin")}
          />
        )}

        {screen === "signin" && (
          <SignInForm
            onBack={() => setScreen("third")}
          />
        )}

        {screen === "third" && (
          <ThirdForm
            onBack={() => setScreen("signup")}
          />
        )}

      </div>
    </div>
  )
}
