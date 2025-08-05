import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./components/Contact"; 

function App() {
  return (
    <>
      <Navbar />
      <SocialBar /> {/* ✅ Always visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
