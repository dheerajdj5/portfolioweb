// src/components/Connect.js
import { FaTwitter, FaInstagram, FaWordpress, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // ✅ only import what you actually use

export default function Connect() {
  const platforms = [
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/DheerajSharma27/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/Dheeraj89537774",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/dheerajr_99",
    },
    {
      name: "GitHub",
      icon: <FaWordpress />,
      link: "https://github.com/dheerajdj5",
    },
    {
      name: "Facebook",
      icon: <FaMedium />,
      link: "https://facebook.com/dheeraj.r.900",
    },
  ];

  return (
    <section id="connect" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Connect <span className="text-blue-600">with Me</span>
        </h2>

        {/* Flex Row for One Line */}
        <div className="flex justify-center flex-wrap gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
            >
              <div className="text-3xl text-blue-600 mb-2">{platform.icon}</div>
              <p className="text-sm font-medium text-gray-700">
                {platform.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
