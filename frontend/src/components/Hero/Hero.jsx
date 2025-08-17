import React, { useState, useEffect, useMemo } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import bgpic from "../../assets/bg.png";
import profileImage from "../../assets/profilephoto.png";
import resume from "../../assets/Al-Shahriar-Mohammad-Rafat.pdf";

// Social links
const socials = [
  { href: "https://www.linkedin.com/in/morat46/", icon: <FaLinkedin /> },
  { href: "https://github.com/as-morat", icon: <FaGithub /> },
  { href: "https://x.com/as_morat", icon: <FaXTwitter /> },
];

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative flex items-center justify-center
      w-8 h-8 rounded-full
      bg-gradient-to-tr from-blue-400 via-indigo-500 to-violet-600
      text-white text-xl
      shadow-md shadow-indigo-400/40
      transition-all duration-300 ease-in-out
      hover:scale-115 hover:shadow-xl
      hover:text-black
    "
  >
    <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></span>
    <span className="relative z-10">{icon}</span>
  </a>
);

export default function Profile() {
  const roles = useMemo(
    () => [
      "A Full Stack Android Developer",
      "With Kotlin",
      "& Jetpack Compose",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [reverseGradient, setReverseGradient] = useState({
    hire: false,
    resume: false,
  });

  const toggleGradient = (button) => {
    setReverseGradient((prev) => ({
      ...prev,
      [button]: !prev[button],
    }));
  };

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
      className="home flex flex-col items-center justify-center min-h-screen px-6 relative text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-8 z-10">
        {/* Left: text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 p-6">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socials.map((social, idx) => (
              <SocialIcon key={idx} {...social} />
            ))}
          </div>

          {/* Name */}
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 drop-shadow-lg">
            Hello, I'm Ash.
          </h2>

          {/* Role with typing animation */}
          <div>
            <h1 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-amber-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-wide">
              {displayedText}
              <span className="animate-pulse text-yellow-400">|</span>
            </h1>
            <p className="mt-2 text-gray-600 italic">
              Turning ideas into reality with code!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            {/* Hire Me Button: Cyan ↔ Blue */}
            <button
              onClick={() => toggleGradient("hire")}
              className={`
                px-6 py-3 font-semibold text-white rounded-full shadow-lg
                bg-gradient-to-r
                ${reverseGradient.hire ? "from-blue-500 to-cyan-400" : "from-cyan-400 to-blue-500"}
                shadow-cyan-400/40
                hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-blue-600/50
                transition-all duration-300
              `}
            >
              Hire Me
            </button>

            {/* Get Resume Button: Orange ↔ Pink */}
            <a href={resume} download="Al Shahriar Mohammad Rafat.pdf">
              <button
                onClick={() => toggleGradient("resume")}
                className={`
                  px-6 py-3 font-semibold text-white rounded-full shadow-lg
                  bg-gradient-to-r
                  ${reverseGradient.resume ? "from-pink-500 to-orange-400" : "from-orange-400 to-pink-500"}
                  shadow-orange-400/40
                  hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-orange-600/50
                  transition-all duration-300
                `}
              >
                Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right: picture */}
        <div className="relative group">
          <div className="size-48 md:size-96 rounded-full overflow-hidden shadow-2xl shadow-indigo-700/40 transform transition duration-500 group-hover:scale-110">
            <img
              className="w-full h-full object-cover"
              src={profileImage}
              alt="Profile"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-gradient-to-r from-blue-400 to-violet-500 animate-pulse"></div>
        </div>
      </div>

      {/* Curved bottom SVG */}
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
    </div>
  );
}
