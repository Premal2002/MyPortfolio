"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ message }),
    }); 
    if (res.ok) alert("Message sent!");
  }

  return (
    <main className="p-8">
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white flex flex-col items-center justify-center px-6 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-6 flex items-center gap-6 px-6 py-3 bg-black/30 backdrop-blur-md rounded-full shadow-lg border border-gray-700">
        {["Home", "Work", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition text-lg font-medium ${
              activeTab === tab
                ? "bg-green-500 text-black font-bold shadow-lg"
                : "text-gray-300 hover:text-green-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl mt-24 lg:mt-32">
        {/* Left Content */}
        <div className="text-left max-w-xl">
          {/* Badge */}
          <span className="bg-green-500 text-black px-5 py-2 rounded-lg text-sm font-semibold shadow-md tracking-wide">
            Hi there! I'm Nick!
          </span>

          {/* Title */}
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-green-400 leading-tight tracking-tight">
            A Software Engineer
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            With experience in web development using{" "}
            <span className="text-green-300 font-semibold">TypeScript</span> and{" "}
            <span className="text-green-300 font-semibold">React</span>, mobile app
            development with <span className="text-green-300 font-semibold">React Native</span>, and software
            development using <span className="text-green-300 font-semibold">C++</span>.
          </p>

          <p className="mt-3 text-gray-400 text-lg">
            In my free time, I play the guitar, record videos, and play
            computer games.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mt-10 lg:mt-0">
          <Image
            src="/profile.jpg"
            width={250}
            height={300}
            alt="Nick's Photo"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Open to Work Section */}
      <div className="w-full bg-green-500 text-black font-semibold text-center py-4 mt-12 flex justify-center gap-5 text-lg shadow-lg tracking-widest uppercase">
        {Array(6)
          .fill("Open to work")
          .map((text, index) => (
            <span key={index}>{text}</span>
          ))}
      </div>
    </div>
    </main>
  );
}
