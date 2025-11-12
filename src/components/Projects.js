// src/components/Projects.js
import { motion } from "framer-motion";
import quizImg from "../assets/projects/download.png";
import portfolioImg from "../assets/projects/portfolio.png";
import elearningImg from "../assets/projects/learn.png";
export default function Projects() {
  const projects = [
    {
      name: "Quiz Website",
      img: quizImg,
      desc: "Sample  Quiz Website.",
      tags: ["HTML", "CSS", "JavaScript"],
      source: "https://github.com/dheerajdj5/Quiz-",
      live: "https://dheerajdj5.github.io/Quiz-/",
    },
    {
      name: "Sample Portfolio website ",
      img: portfolioImg,
      desc: "Created a sample portfolio website.",
      tags: ["HTML", "CSS", "JavaScript"],
      source: "https://github.com/dheerajdj5/sample-portfolio",
      live: "https://dheerajdj5.github.io/sample-portfolio/",
    },
    {
      name: "Elearning Platform",
      img: elearningImg,
      desc: "A Simple e-learning platform with courses",
      tags: ["HTML", "CSS", "JavaScript"],
      source: "https://github.com/dheerajdj5/Elearning-app",
      live: "https://dheerajdj5.github.io/Elearning-app/",
    },
     {
      name: "BootStrap-Modern-Web-Page",
      img: landing-page.webp,
      desc: "A modern landing page using Bootstrap framework.",
      tags: ["HTML", "CSS", "Bootstrap"],
      source: "https://github.com/dheerajdj5/BootStrap-Modern-Web-Page",
      live: "https://bootstrap-modern-web-page.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        My <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-gray-600 mb-10">
        Check out some of my highlighted projects. Scroll through to explore each one.
      </p>

      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="w-[500px] h-[420px] bg-white rounded-2xl shadow-md border p-6 flex-shrink-0 flex flex-col"
            >
              {/* Image */}
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img src={project.img} alt={project.name} className="w-full h-40 object-cover" />
              </div>

              {/* Title + Desc */}
              <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2 text-blue-600 font-medium hover:bg-gray-200"
                >
                  <i className="fab fa-github"></i> Source
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2 text-blue-600 font-medium hover:bg-gray-200"
                >
                  🚀 Live
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

