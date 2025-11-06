// src/App.js
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Tools from "./components/Tools";
import Certificates from "./components/Certificates";
import Connect from "./components/Connect";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-white to-[#1a273b] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skill />
      <Tools />
      <Projects />
      <Certificates />
      <Connect />
      <Contact />
    </div>
  );
}
