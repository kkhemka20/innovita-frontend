import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-innovita text-white px-6 py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Logo and Branding */}
        <a href="#home" className="flex items-center gap-2 mb-2 md:mb-0">
          <img
            src="/innovita-logo.png"
            alt="InnoVITa Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold whitespace-nowrap">
            InnoVITa 2025
          </span>
        </a>

        {/* Nav Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm md:text-base">
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
      </div>
    </nav>
  );
}
