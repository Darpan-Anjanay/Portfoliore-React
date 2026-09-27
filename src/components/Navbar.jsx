import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Skills", href: "#skills" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#080b12]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[75px] w-[90%] max-w-[1100px] items-center justify-between">
        
       
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight text-blue-400 transition hover:opacity-90"
        >
          DA<span className="text-slate-100">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      
        <div className="hidden md:block">
          <a
            href="#projects"
            className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-400"
          >
            Explore Work
          </a>
        </div>

     
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

     
      {isOpen && (
        <div className="border-b border-slate-800 bg-[#080b12]/95 px-6 py-5 backdrop-blur-2xl md:hidden animate-fadeIn">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-300 transition hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="pt-2">
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Work
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;