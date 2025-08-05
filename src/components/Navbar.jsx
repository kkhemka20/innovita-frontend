import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-innovita text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      <a href="#home" className="flex items-center gap-2">
        <img src="/innovita-logo.png" alt="InnoVITa Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold">InnoVITa 2025</span>
      </a>
      <ul className="flex gap-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#events" className="hover:underline">Event</a></li>
        <li><a href="#team" className="hover:underline">Team</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
