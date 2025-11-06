// src/components/Hero.js
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"; // ✅ NEW
import myPhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          I'm{" "}
          <span className="text-blue-600">
            <Typewriter
              words={["Front End Web Developer", "React Developer", "UI Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-800">
          ReactJS • JavaScript • Web3 • HTML • CSS • TailwindCSS
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300"
          >
            <FaCode /> View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1-o09Mh9ixq7WqVPmZjSJPuLbGEP8uxev/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-400 rounded-full font-semibold text-gray-700 hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            ⬇️ Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-6 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/dheeraj-r-7b4b79259/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/dheerajdj5" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl text-gray-600 hover:text-black transition" />
          </a>
          <a href="https://your-portfolio-link.com" target="_blank" rel="noreferrer">
            <FaCode className="text-3xl text-gray-600 hover:text-blue-600 transition" />
          </a>
        </div>
      </motion.div>

      {/* Right Section (Floating Profile Image + Glow) */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-300">
          <div className="absolute inset-0 blur-3xl bg-blue-300/40 animate-pulse"></div>
          <img
            src={myPhoto}
            alt="Dheeraj Profile"
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
