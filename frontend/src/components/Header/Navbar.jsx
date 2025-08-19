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
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/0 dark:bg-gray-900/20 backdrop-blur-xl border-b border-white/10 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-12">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/vite.svg"
            alt="Logo"
            className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 font-medium text-gray-800 dark:text-gray-100">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-3 py-2 rounded-xl transition-all duration-300 ${
                  activeLink === link.name
                    ? "bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 text-white shadow-md"
                    : "hover:text-orange-500 hover:bg-white/30 dark:hover:bg-gray-800/50"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-3xl text-gray-800 dark:text-gray-100 cursor-pointer hover:text-orange-400 transition-colors"
          onClick={toggleMenu}
        >
          <i className="uil uil-apps"></i>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-4/5 bg-white/0 dark:bg-gray-900/20 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-in-out ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-4xl text-gray-800 dark:text-gray-100 hover:text-orange-400 transition-colors"
            onClick={toggleMenu}
          >
            <i className="uil uil-times"></i>
          </button>

          <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    toggleMenu();
                  }}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeLink === link.name
                      ? "bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 text-white shadow-md"
                      : "hover:text-orange-500 hover:bg-white/30 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
