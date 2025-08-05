import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const team = [
  {
    name: "Amar Singh",
    role: "Marketing & PR Head",
    image: "/hero.jpg",
    linkedin: "https://linkedin.com/in/example",
    email: "mailto:mehul@example.com",
    whatsapp: "https://wa.me/919000000000"
  },
  {
    name: "Nikesh Polisetty",
    role: "Sponsorship Head",
    image: "/hero.jpg",
    linkedin: "https://linkedin.com/in/example",
    email: "mailto:ved@example.com",
    whatsapp: "https://wa.me/919000000001"
  },
  {
    name: "Keerthi Majety",
    role: "Design & Control Room Head",
    image: "/hero.jpg",
    linkedin: "https://linkedin.com/in/example",
    email: "mailto:dinesh@example.com",
    whatsapp: "https://wa.me/919000000002"
  },
  {
    name: "Neha Sreedhar",
    role: "Event Planning & Execution Head",
    image: "/hero.jpg",
    linkedin: "https://linkedin.com/in/example",
    email: "mailto:chaitanya@example.com",
    whatsapp: "https://wa.me/919000000003"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="bg-[url('/stars-bg.jpg')] bg-cover py-20 px-6 text-white">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center uppercase tracking-wide">Contact Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {team.map((person, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
              <div className="flex gap-4 text-white text-2xl mb-4">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-[#5ce1e6]" />
                </a>
                <a href={person.email}>
                  <FaEnvelope className="hover:text-[#5ce1e6]" />
                </a>
                <a href={person.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="hover:text-[#5ce1e6]" />
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-sm text-gray-200">{person.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
