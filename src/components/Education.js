// src/components/Education.js
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      stream: "Computer Science",
      school: "SDM Institute of Technology, Karnataka, India",
      duration: "2022 - 2026",
      icon: <FaGraduationCap className="text-white text-xl" />,
    },
    {
      degree: "Higher Secondary Education",
      stream: "Science Stream",
      school: "Sri Chaitanya PU College, Karnataka, India",
      duration: "2020 - 2022",
      icon: <FaSchool className="text-white text-xl" />,
    },
  ];

  return (
    <section id="education" className="bg-white py-20 px-6 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Education</span>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-blue-200">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`mb-10 ml-8`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icon */}
            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-md">
              {edu.icon}
            </span>

            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 max-w-lg">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <p className="text-blue-600 font-medium uppercase tracking-wide">
                {edu.stream}
              </p>
              <p className="text-gray-700">{edu.school}</p>
              <p className="text-blue-600 font-medium mt-2">{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}  