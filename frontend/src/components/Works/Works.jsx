import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import images
import Demo1 from "../../assets/converter.png";
import Demo2 from "../../assets/mediator.png";
import Demo3 from "../../assets/timer.jpg";
import Demo4 from "../../assets/profile.png";

// Project Data
const projects = [
  {
    title: "Currency & Unit Converter",
    description:
      "Kotlin-based converter app with Jetpack Compose, offering real-time currency and unit conversions in a clean UI.",
    tech: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/as-morat/Converter",
    demo: "#",
    image: Demo1,
  },
  {
    title: "Meditation UI",
    description:
      "A calm and minimal meditation app UI designed with Jetpack Compose for focused sessions.",
    tech: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/as-morat/Mediator-UI",
    demo: "#",
    image: Demo2,
  },
  {
    title: "Smart Timer UI",
    description:
      "Elegant timer UI built with Jetpack Compose and Canvas, featuring smooth animations and intuitive controls.",
    tech: ["Kotlin", "Jetpack Compose", "Canvas"],
    github: "https://github.com/as-morat/Timer-basic-UI",
    demo: "#",
    image: Demo3,
  },
  {
    title: "Profile UI Showcase",
    description:
      "Modern profile screen design with adaptive layouts and gradient accents for a premium look.",
    tech: ["Kotlin", "Jetpack Compose"],
    github: "#",
    demo: "#",
    image: Demo4,
  },
];

export default function Works() {
  const [warning, setWarning] = useState("");

  // Demo Button Handler
  const handleDemoClick = (demoLink) => {
    if (demoLink === "#" || !demoLink) {
      setWarning("Demo not available for this project.");
      setTimeout(() => setWarning(""), 2500);
    } else {
      window.open(demoLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="works"
      className="w-full min-h-screen bg-gradient-to-b from-white via-cyan-50 to-indigo-50 flex flex-col items-center relative pt-32 pb-32"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-24 text-center bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 text-transparent bg-clip-text"
      >
        My Works
      </motion.h2>

      {/* Warning Notification */}
      <AnimatePresence>
        {warning && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 
                       bg-yellow-100 text-yellow-800 px-4 py-2 
                       rounded-lg shadow-lg border border-yellow-300 z-50"
          >
            {warning}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-full max-w-7xl px-6 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col w-72 md:w-64"
          >
            {/* Project Image */}
            <div className="relative w-full h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Project Info */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center truncate">
                {project.title}
              </h3>
              <p className="text-gray-700 flex-1 text-center text-sm line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gradient-to-r from-cyan-100 to-indigo-300 px-2 py-1 rounded-full text-gray-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full shadow-lg
                             bg-gradient-to-r from-blue-500 to-cyan-500
                             hover:from-blue-400 hover:to-cyan-400
                             hover:text-black hover:scale-105 transition-all duration-300"
                >
                  <FaGithub /> Code
                </a>
                <button
                  onClick={() => handleDemoClick(project.demo)}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full shadow-lg
                             bg-gradient-to-r from-orange-400 to-pink-500
                             hover:from-pink-500 hover:to-orange-400
                             hover:text-black hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt /> Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Curved Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-36 md:h-48"
        >
          <path
            d="M0,10 C300,120 900,-70 1200,90 L1200,130 L0,150 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
