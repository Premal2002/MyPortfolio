"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TrueFocus from "../ReactBits/TrueFocus";
import { projects } from "../data/projects";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="work"
      className="pt-20 w-full max-w-6xl text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h2
        className="text-6xl font-bold text-customGreen mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* Projects Container */}
      <motion.div
        className="w-full mx-auto py-8 px-3 sm:px-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
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
                <motion.div
                  className="relative w-full rounded-2xl overflow-hidden shadow-md group transition-all duration-1000"
                  style={{ height: "270px", padding: "6px" }}
                  onMouseEnter={(e) =>
                    e.target.closest(".swiper").swiper.autoplay.stop()
                  }
                  onMouseLeave={(e) =>
                    e.target.closest(".swiper").swiper.autoplay.start()
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}
