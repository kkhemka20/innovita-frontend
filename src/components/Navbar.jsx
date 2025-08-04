import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-innovita text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      <Link to="/" className="flex items-center gap-2">
  <img src="/innovita-logo.png" alt="InnoVITa Logo" className="h-10 w-auto" />
  <span className="text-xl font-bold">InnoVITa 2025</span>
</Link>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/events" className="hover:underline">Events</Link></li>
        <li><Link to="/team" className="hover:underline">Team</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}