// components/Features.js
import { motion } from 'framer-motion';

export default function Features() {
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.8 }}
      className="p-8 mb-10 bg-white rounded-lg shadow-lg bg-opacity-90"
    >
      <h3 className="text-2xl font-bold text-gray-800">Features</h3>
      <p className="mt-4 text-gray-600">Explore our features section for more.</p>
    </motion.div>
  );
}
