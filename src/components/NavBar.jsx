import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About me", href: "#about-me" },
    { name: "Proyects", href: "/about" },
    { name: "Contact", href: "/projects" },
  ];

  return (
    <nav className=" bg-transparent text-slate-200 font-dosis text-2xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-4xl hover:text-purple-500 transition-all duration-500 font-semibold">
          Alejandro Anona
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className=" hover:underline hover:text-purple-500 transition-all duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center hover:text-purple-500 transition-all duration-500"
          aria-label="Abrir menú móvil"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-red-800 text-slate-500 overflow-hidden ease-in-out transition-all duration-700  ${
          menuOpen ? "max-h-screen " : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 py-4 px-4 ">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:underline hover:text-purple-500 transition-all duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;

