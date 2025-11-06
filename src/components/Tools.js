import { motion } from "framer-motion";
import bootstrap from "../assets/tools/bootstrap.png";
import react from "../assets/tools/react.png";
import css from "../assets/tools/css.png";
import html from "../assets/tools/html.png";
import js from "../assets/tools/js.png";
import chatgpt from "../assets/tools/chatgpt.png";
import gemini from "../assets/tools/gemini.png";
export default function Tools() {
  const tools = [
    { name: "Bootstrap", img: bootstrap },
    { name: "ReactJS", img: react },
    { name: "CSS3", img: css },
    { name: "HTML5", img: html },
    { name: "JavaScript", img: js },
    { name: "ChatGPT", img: chatgpt },
    { name: "Gemini", img: gemini },
  ];

  return (
    <section id="tools" className="py-20 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Tools & <span className="text-blue-600">Technologies</span>
      </h2>
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-28 h-28 rounded-full border shadow-sm hover:shadow-lg transition-all"
            >
              <img src={tool.img} alt={tool.name} className="w-12 h-12 mb-2" />
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
