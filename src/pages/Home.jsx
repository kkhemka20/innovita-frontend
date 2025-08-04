import React, { useEffect, useState } from "react";

const Home = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

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

  return (
    <div className="text-center text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white transition-all duration-700"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          WELCOME TO INNOVITA 2025!
        </h1>
        <h2 className="text-2xl font-semibold mb-6 drop-shadow-md animate-fade-in delay-100">
          11TH AND 12TH AUGUST
        </h2>

        {/* Upgraded Register Button */}
        <a
          href="https://events.vitap.ac.in/e/management-meet-2025-vsb-8f7f1687-ec1a-4514-99af-e9a71b00419d"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-innovita font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:text-white hover:bg-innovita transition-all duration-300"
        >
        Register Now
        </a>
      </section>

      {/* Countdown Section */}
      <section className="bg-innovita py-10 px-6">
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
      <section className="w-full bg-cover bg-center text-white py-20 px-6"
        style={{ backgroundImage: "url('/stars-bg.jpg')" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-left md:text-center uppercase tracking-wide">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-justify leading-relaxed font-medium">
            The INNOVITA 2025, hosted by the VIT-AP School of Business (VSB), is more than just a student fest;
            it is a dynamic convergence of innovation, intellect, and inspiration. Conceived as a national-level
            platform, this two-day celebration of business brilliance invites the brightest students from
            Higher Secondary, undergraduate, and postgraduate levels across India to immerse themselves in the
            real-world pulse of the corporate world.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
