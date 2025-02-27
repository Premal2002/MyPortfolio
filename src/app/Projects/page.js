"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TrueFocus from "../ReactBits/TrueFocus";
import { projects } from "../data/projects";


export default function ProjectSlider() {
  return (
    <div id="work" className="pt-10 mt-10  w-full max-w-6xl text-center">
      <h2 className="text-6xl font-bold text-customGreen mb-8">
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
      <div className="w-full mx-auto py-8 px-3 sm:px-6 flex justify-center">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            spaceBetween={15}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            speed={1000}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              600: { slidesPerView: 1, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="relative rounded-lg overflow-hidden"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-md group transition-all duration-1000"
                  style={{
                    height: "270px", // Smaller height for small devices
                    padding: "6px", // Adjusted padding
                  }}
                  onMouseEnter={(e) =>
                    e.target.closest(".swiper").swiper.autoplay.stop()
                  }
                  onMouseLeave={(e) =>
                    e.target.closest(".swiper").swiper.autoplay.start()
                  }
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-70"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-3 py-10 text-white z-10">
                    <h3 className="text-xs sm:text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm mt-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-800 text-gray-300 text-[9px] sm:text-xs px-2 py-1 rounded-md"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between mt-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 bg-gray-800 text-gray-300 text-[10px] sm:text-sm rounded-lg hover:bg-gray-700 transition duration-300"
                      >
                        <FaGithub size={10} />
                        GitHub
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 bg-blue-600 text-white text-[10px] sm:text-sm rounded-lg hover:bg-blue-500 transition duration-300"
                      >
                        <FaExternalLinkAlt size={9} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
