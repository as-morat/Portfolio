import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import profileImage from "../../assets/profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-white via-cyan-50 to-indigo-100 flex items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Premium Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 md:w-96 md:h-96"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_60%_40%_/_40%_60%_40%_60%] shadow-2xl shadow-indigo-700/40 transition-transform duration-500 transform hover:scale-105">
            <img
              src={profileImage}
              alt="About Me"
              className="w-full h-full object-cover rounded-[inherit] transition-transform duration-500"
            />
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[inherit] shadow-[0_0_60px_20px_rgb(132,99,241)] pointer-events-none"
            ></motion.div>
            <div className="absolute inset-0 rounded-[inherit] shadow-inner shadow-black/10 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            I’m{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Al Shahriar Mohammad Rafat (Ash)
            </span>
            , currently pursuing B.Sc. in Software Engineering at Daffodil
            International University. Alongside my studies, I’m growing as an
            Android App Developer with a strong foundation in Java, OOP, Kotlin,
            and Jetpack Compose.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Right now, I’m expanding into Full-Stack App Development by learning
            Firebase, MongoDB, and modern API integrations. I’m also passionate
            about UI/UX design and curious about working with AI.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            My goal is to transform ideas into seamless, impactful digital
            experiences that feel premium and intuitive.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Experience",
                desc: "6+ months of Mobile & Android Development",
                icon: <FaLaptopCode className="text-3xl text-indigo-500" />,
              },
              {
                title: "Skills",
                desc: "Java, Kotlin, Jetpack Compose, Firebase, MongoDB",
                icon: <FaCode className="text-3xl text-blue-500" />,
              },
              {
                title: "Education",
                desc: "B.Sc. in Software Engineering @ DIU",
                icon: <FaGraduationCap className="text-3xl text-violet-500" />,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600"></div>
                <div className="flex items-center gap-3">
                  {card.icon}
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-3">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-40"
        >
          <path
            d="M0,10 C200,120 780,-70 1200,90 L1200,130 L0,150 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
