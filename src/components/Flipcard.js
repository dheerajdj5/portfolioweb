// src/components/FlipCard.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-80 h-96 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition">
          {front}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-blue-900 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 rotateY-180">
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}
