"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which are the most popular new cars available in Pakistan in 2025?",
    answer:
      "Popular new cars in Pakistan include Toyota Corolla, Honda City, Suzuki Swift, Kia Sportage, and Hyundai Tucson."
  },
  {
    question: "Which are the most popular new car brands in Pakistan?",
    answer:
      "Toyota, Honda, Suzuki, Kia, Hyundai, Changan, and MG are among the most popular car brands in Pakistan."
  },
  {
    question: "Are there any upcoming cars in Pakistan?",
    answer:
      "Yes, several new hybrid and electric models from local and international brands are expected to launch in Pakistan."
  },
  {
    question: "Which brands offer electric cars in Pakistan?",
    answer:
      "MG, Audi, BMW, Tesla (imported), and local EV startups currently offer electric cars in Pakistan."
  }
];

export default function NewCarFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900">
        New Car FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left
                bg-gray-100 text-gray-800 font-medium"
              >
                {item.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
