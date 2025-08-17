import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setShowMenu(!showMenu);

  // Navigation items
  const navLinks = [
    { name: "Home", href: "#home", icon: "uil uil-estate" },
    { name: "About", href: "#about", icon: "uil uil-user" },
    { name: "Skills", href: "#skill", icon: "uil uil-file-alt" },
    { name: "Services", href: "#services", icon: "uil uil-briefcase-alt" },
    { name: "Contact", href: "#contact", icon: "uil uil-message" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-orange-600 hover:text-orange-800 transition-colors"
        >
          Ash.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative flex items-center gap-2 group"
              >
                <i className={link.icon}></i> {link.name}
                {/* underline span */}
                <span
                  className={`absolute  -bottom-1 h-[2px] bg-orange-600 transition-all duration-300 ease-in-out ${
                    activeLink === link.name
                      ? "w-full text-orange-600 left-0"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          <i className="uil uil-apps"></i>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg font-medium text-gray-700 md:hidden">
            <button
              className="absolute top-4 right-6 text-3xl text-gray-700"
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
                className="relative group"
              >
                <i className={link.icon}></i> {link.name}
                {/* underline span */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ease-in-out ${
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
