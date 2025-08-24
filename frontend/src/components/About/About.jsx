import React from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.png";
import FiverrIcon from "../../assets/icons/fiverr.svg";
import UpworkIcon from "../../assets/icons/upwork.svg";

// Skill icons
import KotlinIcon from "../../assets/icons/kotlin.svg";
import FlutterIcon from "../../assets/icons/flutter.svg";
import ComposeIcon from "../../assets/icons/compose.svg";
import JavaIcon from "../../assets/icons/java.svg";
import FirebaseIcon from "../../assets/icons/firebase.svg";
import ReactIcon from "../../assets/icons/react.svg";
import DsaIcon from "../../assets/icons/dsa.svg";
import RoomIcon from "../../assets/icons/room.svg";
import MongoIcon from "../../assets/icons/mongodb.svg";

// Info badges
const info = [
  {
    title: "Experience",
    desc: "6+ months Mobile & Android",
    color: "from-indigo-400 via-indigo-500 to-indigo-600",
  },
  {
    title: "Skills",
    desc: "Java, Kotlin, Compose, Flutter, Firebase, MongoDB",
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    title: "Education",
    desc: "B.Sc. in Software Engineering, DIU",
    color: "from-purple-400 via-purple-500 to-violet-500",
  },
];

// Skills
const skills = [
  { icon: KotlinIcon, name: "Kotlin" },
  { icon: FlutterIcon, name: "Flutter" },
  { icon: ComposeIcon, name: "Jetpack Compose" },
  { icon: JavaIcon, name: "Java" },
  { icon: FirebaseIcon, name: "Firebase" },
  { icon: ReactIcon, name: "React" },
  { icon: DsaIcon, name: "DSA" },
  { icon: RoomIcon, name: "Room DB" },
  { icon: MongoIcon, name: "MongoDB" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-white via-cyan-50 to-indigo-100 flex items-center justify-center px-6 py-24 relative"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 md:w-96 md:h-96"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_60%_40%_/_40%_60%_40%_60%] shadow-2xl shadow-indigo-700/40 transition-transform duration-500 transform hover:scale-105">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-[inherit] transition-transform duration-500"
            />
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[inherit] shadow-[0_0_60px_20px_rgb(132,99,241)] pointer-events-none"
            />
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

          {/* About Me Text */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Hi, I’m{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Al Shahriar Mohammad Rafat (Ash)
            </span>{" "}
            — a Software Engineering student and passionate mobile app developer
            from Bangladesh.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            I specialize in building modern Android applications using Kotlin
            and Jetpack Compose, while also creating cross-platform apps with
            Flutter. My projects combine clean UI and solid backend integrations
            using Firebase and MongoDB.
          </p>

          {/* Info Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {info.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                className={`px-5 py-3 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg cursor-pointer transition-all duration-300 flex-1 min-w-[180px]`}
              >
                <h3 className="font-semibold text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills Icons Row */}
          <div className="flex justify-center md:justify-start gap-3 mt-6 flex-wrap">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-xl bg-white shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Fiverr & Upwork Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href="https://www.fiverr.com/morat46/buying"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-lg
                        bg-gradient-to-r from-indigo-500 to-purple-600
                         hover:from-purple-600 hover:to-indigo-500
                         shadow-cyan-400/40 hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <img src={FiverrIcon} alt="Fiverr" className="w-5 h-5" />
              Fiverr
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0182122cb9e49e342d?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-lg
                         bg-gradient-to-r from-yellow-500 to-orange-600
                         hover:from-orange-600 hover:to-yellow-500
                         shadow-blue-400/40 hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <img src={UpworkIcon} alt="Upwork" className="w-5 h-5" />
              Upwork
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-28 md:h-40"
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
