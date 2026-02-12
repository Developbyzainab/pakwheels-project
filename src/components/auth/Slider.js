"use client"
import { useEffect, useState } from "react"

const slides = [
  { img: "/slide1.png", text: "Buy & Sell Cars Easily" },
  { img: "/slide2.png", text: "Trusted Car Reviews" },
  { img: "/slide3.png", text: "Millions of Users" },
]

export default function Slider() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % slides.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="text-center mb-6">
      <img src={slides[i].img} className="mx-auto h-24 mb-2" />
      <p className="text-sm mb-3">{slides[i].text}</p>

      <div className="flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${
              i === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
