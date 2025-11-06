// src/components/Skills.js
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React.js", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 75 },
    { name: "Python", level: 60 },
  ];

  return (
    <section id="skills" className="bg-white py-20 px-6 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Skills</span>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
      </motion.h2>

      {/* Subheading */}
      <div className="flex items-center gap-2 mb-8">
        <FaLaptopCode className="text-blue-600 text-2xl" />
        <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
      </div>

      {/* Skills List */}
      <div className="w-full max-w-3xl space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-800">{skill.name}</span>
              <span className="text-blue-600 font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-blue-600 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
