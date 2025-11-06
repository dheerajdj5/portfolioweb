// src/components/About.js
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function About() {
  const skills = [
    { icon: <FaCode className="text-3xl text-blue-600" />, label: "Frontend Dev" },
    { icon: <FaLaptopCode className="text-3xl text-green-600" />, label: "Backend Dev Learner" },
    { icon: <MdEdit className="text-3xl text-purple-600" />, label: "Python Code Learner" },
    { icon: <FaUsers className="text-3xl text-blue-600" />, label: "Team Player" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Me</span>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
      </motion.h2>

      {/* Description Card */}
      <motion.div
        className="max-w-3xl bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I'm a passionate <span className="font-semibold text-blue-600">frontend developer</span>{" "}
          with <span className="font-semibold">0 years</span> of academic experience creating
          beautiful, responsive web applications. My expertise lies in{" "}
          <span className="font-semibold">React.js, JavaScript, HTML, CSS</span>, with a growing
          interest in <span className="font-semibold">Node.js</span>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          I enjoy turning complex problems into simple, elegant solutions.
        </p>
      </motion.div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md rounded-xl p-6 cursor-pointer transition"
          >
            {skill.icon}
            <p className="mt-3 font-medium text-gray-800">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
