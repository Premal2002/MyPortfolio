"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import GradientText from "../ReactBits/Gradient";
import FuzzyText from "../ReactBits/FuzzyText";
import ScrollVelocity from "../ReactBits/ScrollVelocity";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mt-20 lg:mt-20 px-6 sm:px-8">
        {/* Left Content */}
        <div className="text-left max-w-3xl">
          {/* Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center">
            {/* Badge */}
            <span className="bg-customGreen text-black text-2xl px-5 py-2 rounded-xl font-semibold shadow-md tracking-wide">
              Hi there! I'm Premal!
            </span>

            {/* Social Icons */}
            <span className="flex gap-5 sm:ml-6 justify-center sm:justify-start">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/premal-kadam/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="w-7 h-7 hover:text-blue-500 transition-all duration-300" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Premal2002"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="w-7 h-7 hover:text-gray-400 transition-all duration-300" />
              </a>

              {/* Gmail */}
              <a href="mailto:premkasdam143@gmail.com" title="Gmail">
                <Mail className="w-7 h-7 hover:text-red-500 transition-all duration-300" />
              </a>

              {/* CV */}
              <a
                href="https://drive.google.com/uc?export=download&id=1wkrzG7mANIdg9tzJ4GB1eOoYdFKeSJrY"
                className="hover:text-customGreen flex items-center"
                download
                title="CV / Resume"
              >
                <FileText className="w-7 h-7 hover:text-green-400 transition-all duration-300" />
              </a>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-blackops mt-6 text-5xl md:text-6xl font-bold text-green-400 leading-tight tracking-tight">
            <GradientText
              colors={["#40ffaa", "#06D001", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class"
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
            <span className="text-customGreen font-semibold">ASP.NET Core</span>
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
        </div>

        {/* Profile Image */}
        {/* <div className="mt-10 lg:mt-0">
          <img
            src="/images/developer-unscreen.gif"
            width={1300}
            height={3000}
            alt="Nick's Photo"
            className="rounded-full"
          />
        </div> */}
        <div className="mt-10 lg:mt-0 flex justify-center">
          <img
            src="/images/developer-img.png"
            alt="Nick's Photo"
            className="rounded-full shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
          />
        </div>
      </div>

      {/* Open to Work Section */}
      <div className="p-1 w-full bg-customGreen text-black text-sm mt-20 shadow-lg tracking-widest uppercase">
        {/* <Marquee gradient={false} speed={50}>
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
        </Marquee> */}
        <ScrollVelocity
          texts={[
            <span className="text-gray-100">Open To Work</span>,
            <span className="text-gray-1000">Immediate Joiner</span>,
          ]}
          velocity={100}
          className="custom-scroll-text text-2xl tracking-normal font-sans "
          // scrollerClassName="gap-y-1 py-1"
          numCopies={100}
        />
      </div>
    </>
  );
}
