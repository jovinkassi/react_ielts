import { useState } from "react";
import logo from "../assets/ielts_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items
  const menuItems = ["Home", "Features", "Testimonials", "Contact"];

  return (
    <nav className="shadow-xl bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img 
              src={logo} 
              alt="IELTS Pro Logo" 
              className="h-12 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
              IELTS
            </span>
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
              Pro Learning
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {menuItems.map((item, index) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 group rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 block"
              >
                <span className="relative z-10 font-medium">{item}</span>
                
                {/* Animated underline - fixed positioning */}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4 rounded-full"></span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Active indicator dot */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Animated hamburger icon */}
            <div className={`absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
            <div className={`absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu (visible only when isOpen) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 backdrop-blur-sm border-t border-gray-100">
          <ul className="flex flex-col px-6 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <li key={item} style={{animationDelay: `${index * 0.1}s`}} className={`transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 group rounded-xl hover:bg-white/70 border border-transparent hover:border-blue-100 hover:shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}