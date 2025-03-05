"use client";
import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 mt-10">
      <nav className="z-20 mt-6 flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-3 bg-black/30 rounded-full shadow-lg border border-gray-700 
        whitespace-nowrap max-w-[95%] sm:max-w-none"
      >
        {["Home", "Work", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              document
                .getElementById(tab.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full transition font-medium text-xl sm:text-lg ${
              activeTab === tab
                ? "bg-customGreen text-black font-bold shadow-lg"
                : "text-gray-300 hover:text-customGreen"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
