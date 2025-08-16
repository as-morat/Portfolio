import React, { useState, useEffect, useMemo } from "react";
import "./Profile.css";

// Social links
const socials = [
  { href: "https://www.facebook.com/HRIDOY.9720", icon: "fa-facebook-square" },
  { href: "https://www.linkedin.com/in/morat46/", icon: "fa-linkedin" },
  { href: "https://github.com/as-morat", icon: "fa-github" },
];

// Social Icon component
const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
    <i className={`fa ${icon}`}></i>
  </a>
);

export default function Profile() {
  const roles = useMemo(() => [
    "A Full Stack Android Developer",
    "With Kotlin",
    "& Jetpack Compose.",
  ], []);

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
    <div className="profile-container">
      <div className="profile-parent">
        {/* Left: text */}
        <div className="profile-details">
          {/* Social icons */}
          <div className="colz">
            {socials.map((social, idx) => (
              <SocialIcon key={idx} {...social} />
            ))}
          </div>

          {/* Name */}
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Ash.</span>
            </span>
          </div>

          {/* Role with typing animation */}
          <div className="profile-role">
            <h1 className="role-text">
              {displayedText}<span className="cursor">|</span>
            </h1>
            <span className="profile-tagline">
              Turning ideas into reality with code!
            </span>
          </div>

          {/* Buttons */}
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Resume.pdf" download="Al-Shahriar-Mohammad-Rafat.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        {/* Right: picture */}
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
