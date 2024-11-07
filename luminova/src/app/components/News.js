// components/News.js
import { motion } from 'framer-motion';

export default function News() {
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <div className="px-8 py-16 text-white bg-transparent" id="news">
      {/* Newsletter Section */}
      <section className="text-center">
        <motion.h4
          className="mb-2 font-semibold text-purple-400 uppercase"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          Stay Updated
        </motion.h4>

        <motion.h2
          className="mb-4 text-3xl font-bold"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          Subscribe To Newsletter
        </motion.h2>

        <motion.form
          className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <motion.input
            type="email"
            placeholder="Your email address..."
            className="w-full max-w-screen-lg p-4 text-center bg-transparent border-b border-gray-500 md:w-2/3 focus:outline-none"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2 }}
          />
          <motion.button
            className="px-8 py-3 font-semibold text-black transition bg-purple-400 hover:bg-purple-500"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
