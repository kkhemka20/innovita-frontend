import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/MoreVert";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-innovita text-white px-6 py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/innovita-logo.png"
            alt="InnoVITa Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold whitespace-nowrap">
            InnoVITa 2025
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#events" className="hover:underline">
              Events
            </a>
          </li>
          <li>
            <a href="#team" className="hover:underline">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 text-sm">
          <a href="#home" className="block hover:underline">
            Home
          </a>
          <a href="#events" className="block hover:underline">
            Events
          </a>
          <a href="#team" className="block hover:underline">
            Team
          </a>
          <a href="#contact" className="block hover:underline">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
