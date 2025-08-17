import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setShowMenu(!showMenu);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-100/90 backdrop-blur-md shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
        {/* Logo with light gradient & subtle highlight */}
        <a
          href="#home"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-300 bg-clip-text text-transparent hover:scale-105 hover:brightness-110 transition-transform transition-duration-300"
        >
          Ash.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative group hover:text-pink-400 transition-colors"
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 h-[2px] bg-pink-400 transition-all duration-300 ease-in-out ${
                    activeLink === link.name
                      ? "w-full left-0"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-3xl text-gray-800 cursor-pointer hover:text-pink-400 transition-colors"
          onClick={toggleMenu}
        >
          <i className="uil uil-apps"></i>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="absolute top-0 left-0 w-full h-screen bg-indigo-100/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-lg font-medium text-gray-800 md:hidden">
            <button
              className="absolute top-6 right-6 text-4xl text-gray-800 hover:text-pink-400 transition-colors"
              onClick={toggleMenu}
            >
              <i className="uil uil-times"></i>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  toggleMenu();
                }}
                className="relative group hover:text-pink-400 transition-colors"
              >
                {link.name}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[2px] bg-pink-400 transition-all duration-300 ease-in-out ${
                    activeLink === link.name
                      ? "w-full left-0"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
