// src/components/SocialBar.jsx

import React from "react";
import { FaLinkedin, FaInstagram, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";

const SocialBar = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50">
      <div className="flex flex-col gap-4 bg-black bg-opacity-70 px-2 py-4 rounded-l-xl shadow-lg">
        <a href="https://in.linkedin.com/school/vitap-university/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition">
          <FaLinkedin size={25} />
        </a>
        <a href="https://www.instagram.com/vsb.innovita2k25/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
          <FaInstagram size={25} />
        </a>
        <a href="https://x.com/vitapuniversity?lang=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
          <FaXTwitter size={25} />
        </a>
        <a href="https://www.youtube.com/@VITAP" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
          <FaYoutube size={25} />
        </a>
        <a href="https://www.facebook.com/vitap.university/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition">
          <FaFacebook size={25} />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
