"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import GradientText from "../ReactBits/Gradient";
import ScrollVelocity from "../ReactBits/ScrollVelocity";
import { Linkedin, Github, Mail, FileDown } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  // Change key dynamically when section comes into view
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} className="w-full">
      {/* Hero Section with Fade-in & Slide-up */}
      <motion.div
        key={animationKey} // Forces re-render to restart animation
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto mt-20 lg:mt-20 px-6 sm:px-8"
        >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-left max-w-3xl"
        >
          {/* Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center">
            <span className="bg-customGreen text-black text-2xl px-5 py-2 rounded-xl font-semibold shadow-md tracking-wide">
              Hi there! I'm Premal!
            </span>

            {/* Social Icons */}
            <span className="flex gap-5 sm:ml-6 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/premal-kadam/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="w-7 h-7 hover:text-blue-500 transition-all duration-300" />
              </a>
              <a
                href="https://github.com/Premal2002"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="w-7 h-7 hover:text-gray-400 transition-all duration-300" />
              </a>
              <a href="mailto:premkasdam143@gmail.com" title="Gmail">
                <Mail className="w-7 h-7 hover:text-red-500 transition-all duration-300" />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1wkrzG7mANIdg9tzJ4GB1eOoYdFKeSJrY"
                className="hover:text-customGreen flex items-center"
                download
                title="CV / Resume"
              >
                <FileDown className="w-7 h-7 hover:text-green-400 transition-all duration-300" />
              </a>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-blackops mt-6 text-5xl md:text-6xl font-bold text-green-400 leading-tight tracking-tight">
            <GradientText
              colors={["#40ffaa", "#06D001", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class select-none"
            >
              A Software Developer
            </GradientText>
          </h1>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Full-stack developer skilled in{" "}
            <span className="text-customGreen font-semibold">Java</span>,
            <span className="text-customGreen font-semibold">C#</span>, and{" "}
            <span className="text-customGreen font-semibold">JavaScript</span>.
            Experienced in{" "}
            <span className="text-customGreen font-semibold">Spring Boot</span>,
            <span className="text-customGreen font-semibold">
              ASP.NET Core
            </span>
            , and modern frontend frameworks like{" "}
            <span className="text-customGreen font-semibold">Angular</span>.
            Proficient in{" "}
            <span className="text-customGreen font-semibold">SQL Server</span>,
            <span className="text-customGreen font-semibold"> MySQL</span>, and
            cloud platforms like{" "}
            <span className="text-customGreen font-semibold">Azure</span> and
            <span className="text-customGreen font-semibold"> AWS</span>.
          </p>

          <p className="mt-3 text-gray-300 text-lg">
            Passionate about cloud technologies, database optimization, and
            building scalable solutions. Outside of work, I enjoy exploring new
            frameworks, playing games, and staying up-to-date with the latest
            tech trends.
          </p>
        </motion.div>

        {/* Profile Image with Smooth Fade-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-10 lg:mt-0 flex justify-center"
        >
          <img
            src="/images/developer-img.png"
            alt="Nick's Photo"
            className="rounded-full shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Open to Work Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="p-1 w-full bg-customGreen text-black text-sm mt-20 shadow-lg tracking-widest uppercase"
      >
        <ScrollVelocity
          texts={[
            <span className="text-gray-100">Always Learning</span>,
            <span className="text-gray-1000">Passionate Developer</span>,
          ]}
          velocity={50}
          className="custom-scroll-text text-2xl tracking-normal font-sans"
          numCopies={100}
        />
      </motion.div>
    </div>
  );
}
