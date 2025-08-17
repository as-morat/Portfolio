import React, { useState, useEffect, useMemo } from "react";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import bgpic from "../../assets/bg.png";
import profileImage from "../../assets/profilephoto.png";
import resume from '../../assets/Al-Shahriar-Mohammad-Rafat.pdf'

// Social links
const socials = [
  { href: "https://www.facebook.com/HRIDOY.9720", icon: <FaFacebookSquare /> },
  { href: "https://www.linkedin.com/in/morat46/", icon: <FaLinkedin /> },
  { href: "https://github.com/as-morat", icon: <FaGithub /> },
];

// Social Icon component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-600 hover:text-indigo-600 hover:scale-105 transition-transform duration-300"
  >
    {icon}
  </a>
);

export default function Profile() {
  const roles = useMemo(
    () => [
      "A Full Stack Android Developer",
      "With Kotlin",
      "& Jetpack Compose.",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="home flex flex-col items-center justify-center min-h-screen px-6  relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-8 z-10">
        {/* Left: text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 p-6 ">
          {/* Social icons */}
          <div className="flex space-x-4">
            {socials.map((social, idx) => (
              <SocialIcon key={idx} {...social} />
            ))}
          </div>

          {/* Name */}
          <h2 className="text-3xl font-semibold text-gray-800">
            Hello, I'm <span className="text-orange-600 font-bold">Ash.</span>
          </h2>

          {/* Role with typing animation */}
          <div>
            <h1 className="text-xl md:text-2xl font-medium text-gray-700">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="mt-2 text-gray-500">
              Turning ideas into reality with code!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition">
              Hire Me
            </button>
            <a href={resume} download="Al-Shahriar-Mohammad-Rafat.pdf">
              <button className="px-6 py-2 border-2 border-indigo-600 text-orange-600 rounded-full hover:bg-indigo-50 transition active:scale-95">
                Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right: picture */}
          <div className="size-48 md:size-80 bg-orange-200 shadow-xl shadow-white/20 rounded-full  hover:shadow-none    transform  flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-500">
            {/* Inner image rotated back to stay upright */}
            <img
              className="w-full h-full object-cover transform "
              src={profileImage}
              alt="Profile"
            />
          </div>

      </div>

      {/* Curved bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-25 md:h-40"
        >
          <path
            d="M0,10 C200,120 780,-70 1200,90 L1200,130 L0,150 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
