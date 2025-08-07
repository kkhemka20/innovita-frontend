import React, { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Events from "../components/Events";

const backgroundImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
];

const Home = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Countdown Timer
  useEffect(() => {
    const target = new Date("2025-08-11T10:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setDaysLeft(0);
        setHoursLeft(0);
        setMinutesLeft(0);
        setSecondsLeft(0);
      } else {
        setDaysLeft(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHoursLeft(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setMinutesLeft(Math.floor((diff / 1000 / 60) % 60));
        setSecondsLeft(Math.floor((diff / 1000) % 60));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto Slide Change
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="text-center text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden" id="home">
        {backgroundImages.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}

        {/* Content Over Image */}
        <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">
            WELCOME TO INNOVITA 2025!
          </h1>
          <h2 className="text-2xl font-semibold mb-6 drop-shadow-md animate-fade-in delay-100">
            COME JOIN US ON THE 11TH AND 12TH AUGUST
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://events.vitap.ac.in/e/management-meet-2025-vsb-8f7f1687-ec1a-4514-99af-e9a71b00419d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-innovita font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:text-white hover:bg-innovita transition-all duration-300"
            >
              Register Now
            </a>
            <a
              href="/InnoVITa 2025.pdf"
              download
              className="bg-white text-innovita font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:text-white hover:bg-innovita transition-all duration-300"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Manual Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === idx ? "bg-white scale-125" : "bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(idx)}
            ></button>
          ))}
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-innovita py-10 px-6" id="countdown">
        <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
          Countdown to InnoVITa 2025
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto">
          {[{ label: "Days", value: daysLeft },
          { label: "Hours", value: hoursLeft },
          { label: "Minutes", value: minutesLeft },
          { label: "Seconds", value: secondsLeft }].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-xl px-6 py-4 w-28 shadow-md transition-transform duration-500 transform hover:scale-105"
            >
              <p className="text-4xl font-extrabold tracking-wider animate-pulse">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-sm font-medium mt-2 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-cover bg-center text-white py-20 px-6"
        style={{ backgroundImage: "url('/stars-bg.jpg')" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-left md:text-center uppercase tracking-wide">
            About Innovita
          </h2>
          <p className="text-lg md:text-xl text-justify leading-relaxed font-medium">
            Innovita, the business fest of VIT-AP Business School, is a dynamic celebration of innovation, strategy, and entrepreneurship. Featuring 12 curated events across domains like marketing, finance, startups, HR, analytics, and sustainability, it offers students a chance to tackle real-world business challenges and showcase their skills. With a prize pool of ₹1,00,000, Innovita provides recognition, rewards, and valuable networking opportunities with peers, faculty, and industry experts—all set against the vibrant backdrop of VIT-AP University, Amaravati.
          </p>
        </div>
      </section>

      {/* Events and Contact Sections */}
      <Events />
      <Contact />
    </div>
  );
};

export default Home;
