"use client";
import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import GradientText from "./ReactBits/Gradient";
import BlurText from "./ReactBits/BlurText";
import ShinyText from "./ReactBits/ShinyText";
import TrueFocus from "./ReactBits/TrueFocus";
import FuzzyText from "./ReactBits/FuzzyText";
import { useRef } from "react";
import VariableProximity from "./ReactBits/VariableProximity";

// const customFont = localFont({
//   src: "fonts/TT-Mussels-Stencil-Trial-Black-BF640152f7dbebd.otf", // Path inside 'public'
//   weight: "400", // Define the font weight (if needed)
//   style: "normal", // Define the font style
//   display: "swap", // Helps avoid layout shifts
// });

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const skills = [
    "TypeScript",
    "JavaScript",
    "React.js",
    "React Native",
    "Node.js",
    "Next.js",
    "CSS",
    "HTML",
    "PostgreSQL",
    "C",
    "C++",
    "C#",
  ];

  //get in touch
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  //animations
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white flex flex-col items-center justify-center font-sans">
      {/* Navigation Bar */}
      <nav className="z-20 sticky top-6 mt-10 flex items-center gap-6 px-6 py-3 bg-black/30 backdrop-blur-md rounded-full shadow-lg border border-gray-700">
        {["Home", "Work", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              document.getElementById(tab.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
            }}
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
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl mt-20 lg:mt-20">
        {/* Left Content */}
        <div className="text-left max-w-xl">
          {/* Badge */}
          <span className="bg-green-500 text-black text-2xl px-5 py-2 rounded-xl font-semibold shadow-md tracking-wide">
            Hi there! I'm Premal!
          </span>

          {/* Title */}
          <h1 className=" mt-6 text-5xl md:text-6xl font-extrabold text-green-400 leading-tight tracking-tight">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              A Software Developer
            </GradientText>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            With experience in web development using{" "}
            <span className="text-green-300 font-semibold">TypeScript</span> and{" "}
            <span className="text-green-300 font-semibold">React</span>, mobile
            app development with{" "}
            <span className="text-green-300 font-semibold">React Native</span>,
            and software development using{" "}
            <span className="text-green-300 font-semibold">C++</span>.
          </p>

          <p className="mt-3 text-gray-400 text-lg">
            In my free time, I play the guitar, record videos, and play computer
            games.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mt-10 lg:mt-0">
          <Image
            src="/images/avatar.jpg"
            width={250}
            height={300}
            alt="Nick's Photo"
            className="rounded-2xl shadow-2xl "
          />
        </div>
      </div>

      {/* Open to Work Section */}
      <div className="w-full bg-green-500 text-black font-semibold mt-20 shadow-lg tracking-widest uppercase">
        <Marquee gradient={false} speed={50}>
          {Array(10)
            .fill("Open to work")
            .map((text, index) => (
              <span key={index} className="mx-5 cursor-pointer">
                <FuzzyText
                  baseIntensity={0.05}
                  hoverIntensity={0.08}
                  enableHover={true}
                >
                  {text}
                </FuzzyText>
              </span>
            ))}
        </Marquee>
      </div>

      {/* Skills Section */}
      <div className="mt-12 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-green-400 mb-8 text-center">
          <TrueFocus
            sentence="My Skills"
            manualMode={false}
            blurAmount={2.5}
            borderColor="cyan"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-mono shadow-md"
            >
              <ShinyText
                text={skill}
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </div>
          ))}
        </div>
      </div>

      {/* My Projects Section */}
      <div id="work" className="mt-20 w-full max-w-6xl text-center">
        <h2 className="text-5xl font-bold text-green-400 mb-8">
          <TrueFocus
            sentence="My Projects"
            manualMode={false}
            blurAmount={2.5}
            borderColor="cyan"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </h2>

        {/* Projects Container */}
        <div className="flex overflow-x-auto gap-6 px-4 py-4 scrollbar-hide">
          {/* Project Card 1 - Hero Fan */}
          <div className="bg-gray-900 p-5 rounded-2xl w-80 flex-shrink-0 shadow-lg">
            <img
              src="/hero-fan.png"
              alt="Hero Fan"
              className="rounded-xl w-full mb-4"
            />
            <h3 className="text-green-400 text-2xl font-bold">Hero Fan</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["JavaScript", "React.js", "Next.js", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 2 - SMTH */}
          <div className="bg-gray-900 p-5 rounded-2xl w-80 flex-shrink-0 shadow-lg">
            <img
              src="/smth.png"
              alt="SMTH"
              className="rounded-xl w-full mb-4"
            />
            <h3 className="text-green-400 text-2xl font-bold">SMTH</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["TypeScript", "React Native"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Card 3 - FdF */}
          <div className="bg-gray-900 p-5 rounded-2xl w-80 flex-shrink-0 shadow-lg">
            <img src="/fdf.png" alt="FdF" className="rounded-xl w-full mb-4" />
            <h3 className="text-green-400 text-2xl font-bold">FdF</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["C", "Makefile", "MLX42 library"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === 0 ? "bg-green-400" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>

        {/* View All Projects Button */}
        <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-lg font-semibold text-lg shadow-lg hover:bg-green-400 transition">
          All Projects →
        </button>
      </div>

      <section className="flex flex-col md:flex-row  justify-center gap-12 px-6 py-16 text-white mt-18">
        {/* Left Side */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-5xl font-bold text-green-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Searching for the last piece to perfect your team? Let’s chat – I
            might be the one!
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div id="contact" className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            {/* Consent Checkbox */}
            <label className="flex items-start space-x-3 text-sm text-gray-400">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-green-400 bg-gray-700 border-none rounded focus:ring-green-400"
              />
              <span>
                By clicking "Submit", you give me permission to store your data
                and contact you. Your information will never be shared with
                others.
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-black py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-green-400 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-white py-6 flex flex-col items-center px-6 md:px-16">
        {/* Top Section - Navigation and Socials */}
        <div className="bg-gray-900 text-white w-full max-w-7xl mx-auto p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-lg font-medium p-3">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#work" className="hover:text-gray-400">
              Work
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
            <a href="/cv.pdf" className="hover:text-gray-400 flex items-center">
              Download CV <span className="ml-2">⬇️</span>
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              className="text-xl hover:text-gray-400"
            >
              🔗
            </a>
            <a href="https://mail.com" className="text-xl hover:text-gray-400">
              📩
            </a>
            <a
              href="https://github.com"
              className="text-xl hover:text-gray-400"
            >
              🐙
            </a>
          </div>
        </div>
        {/* Bottom Section - Credit */}
        <div className="mt-4">
          <p className="text-white text-md">Designed by Iryna Naumova</p>
        </div>
      </footer>
    </div>
  );
}
