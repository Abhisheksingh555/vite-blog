import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getThemeIcon = () =>
    theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md 
        ${isScrolled ? "shadow-lg" : ""} 
        ${theme === "light" ? "bg-white/70" : "bg-gray-900/70"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <Link
          to="/"
          className={`text-2xl font-extrabold tracking-tight 
            ${theme === "dark" ? "text-white" : "text-gray-900"}
            transition duration-300 hover:text-indigo-500`}
        >
          My<span className="text-indigo-500">Blog</span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {["Home", "Blog", "About", "Contact"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative font-medium transition duration-300
                ${theme === "dark" ? "text-gray-200" : "text-gray-700"}
                hover:text-indigo-500`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 
              ${theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full mr-3 transition-all duration-300
              ${theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 transition-colors duration-300 
              ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden flex flex-col px-6 py-4 space-y-4 transition-all duration-500 ease-in-out
          ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"} 
          ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        {["Home", "Blog", "About", "Contact"].map((item, i) => (
          <Link
            key={i}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={handleLinkClick}
            className={`font-medium text-lg transition duration-300
              ${theme === "dark" ? "text-gray-200" : "text-gray-700"}
              hover:text-indigo-500`}
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
