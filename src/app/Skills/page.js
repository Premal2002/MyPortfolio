"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { skills } from "../data/skills";
import ShinyText from "../ReactBits/ShinyText";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });

  // 🔄 Ensure animation restarts when re-entering view
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isInView]); // ✅ Runs only when `isInView` changes

  return (
    <motion.div 
      ref={ref}
      className="mt-12 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading with Fade-in */}
      <motion.h2 
        className="text-6xl font-bold text-customGreen mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        My Skills
      </motion.h2>

      {/* 🔄 Restart animation on view re-entry */}
      <motion.div 
        key={animationKey} 
        className="flex flex-wrap justify-center gap-4 max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-black/30 px-6 py-3 rounded-lg text-lg font-bold font-mono shadow-md"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.03, ease: "easeOut" }}
          >
            <ShinyText 
              text={skill} 
              disabled={false} 
              speed={3} 
              className="custom-class"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
