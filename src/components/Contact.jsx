import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const team = [
  {
    name: "Amar Singh",
    role: "Marketing & PR Head",
    image: "/amar.jpg",
    linkedin: "https://www.linkedin.com/in/amar-singh-rathore-991907293/",
    email: "mailto:amar.23bba7001@vitapstudent.ac.in",
    whatsapp: "https://wa.me/919381728332"
  },
  {
    name: "Nikesh Polisetty",
    role: "Logistics Head",
    image: "/nikesh.jpg",
    linkedin: "https://www.linkedin.com/in/nikesh-polisetty-261987293/",
    email: "mailto:nikesh.23bba7003@vitapstudent.ac.in",
    whatsapp: "https://wa.me/918106582613"
  },
  {
    name: "Keerthi Majety",
    role: "Design & Control Room Head",
    image: "/keerthi.jpeg",
    linkedin: "https://www.linkedin.com/in/keerthi-majety-613913293/",
    email: "mailto:keerthi.23bba7018@vitapstudent.ac.in",
    whatsapp: "https://wa.me/919912511913"
  },
  {
    name: "Neha Sreedhar",
    role: "Event Planning & Execution Head",
    image: "/neha.jpg",
    linkedin: "https://www.linkedin.com/in/neha-sreedhar-920672279/",
    email: "mailto:neha.23bba7044@vitapstudent.ac.in",
    whatsapp: "https://wa.me/919160534522"
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
