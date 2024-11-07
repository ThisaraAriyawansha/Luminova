import Image from 'next/image';  // Import Image from next/image
import { motion } from 'framer-motion';

export default function Features() {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },  // Start with small scale and 0 opacity
    visible: { opacity: 1, scale: 1 },  // Fade in and restore normal size
  };

  const hoverEffect = {
    whileHover: { 
      scale: 1.05, 
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' 
    },
  };

  return (
    <div className="min-h-screen p-8 text-white bg-transparent ml-28 mr-28">
      {/* Blog Section */}
      <section className="mb-16">
        <h3 className="mb-2 font-semibold text-left text-purple-400 uppercase">Blog</h3>
        <h2 className="mb-8 text-3xl font-bold text-left">Read The Latest News</h2>
        <div className="mt-4 text-right">
          <a href="#" className="text-purple-400 hover:text-white">All News</a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Blog Card 1 */}
          <motion.div
            className="p-4 bg-transparent rounded-lg"
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"  // Trigger animation when in view
            transition={{ duration: 2 }}  // Slower animation speed (increased duration)
            {...hoverEffect}
          >
            <Image
              src="/Assets/images/DJ-1920x1080-2-1024x683.jpg"
              alt="Event 1"
              className="object-cover w-full mb-4 rounded-md h-96"
              width={1024}   // Provide width and height
              height={683}
            />
            <h3 className="text-xl font-bold text-left">London&apos;s Wide Awake Festival</h3>
            <p className="mb-4 text-left text-gray-300">
              But the team has been super welcoming and I couldn&apos;t be happier with my decision to join.
            </p>
            <p className="mb-4 text-sm text-left text-purple-400">September 2, 2023 in World</p> {/* Purple date */}
          </motion.div>

          {/* Blog Card 2 */}
          <motion.div
            className="p-4 bg-transparent rounded-lg"
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"  // Trigger animation when in view
            transition={{ duration: 2 }}  // Slower animation speed (increased duration)
            {...hoverEffect}
          >
            <Image
              src="/Assets/images/62f504c3e7a1c52060e8f2b2_Blog Post 03.jpg"
              alt="Event 2"
              className="object-cover w-full mb-4 rounded-md h-96"
              width={1024}   // Provide width and height
              height={683}
            />
            <h3 className="text-xl font-bold text-left">New Amy Winehouse Exhibition</h3>
            <p className="mb-4 text-left text-gray-300">
              A new exhibition focused on Amy Winehouse is on now and, more than ever, it has been announced.
            </p>
            <p className="mb-4 text-sm text-left text-purple-400">August 30, 2024 in World</p> {/* Purple date */}
          </motion.div>

          {/* Blog Card 3 */}
          <motion.div
            className="p-4 bg-transparent rounded-lg"
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"  // Trigger animation when in view
            transition={{ duration: 2 }}  // Slower animation speed (increased duration)
            {...hoverEffect}
          >
            <Image
              src="/Assets/images/62f50132fe7a4e163b366907_Blog Post 01.jpg"
              alt="Event 3"
              className="object-cover w-full mb-4 rounded-md h-96"
              width={1024}   // Provide width and height
              height={683}
            />
            <h3 className="text-xl font-bold text-left">Ed Sheeran Confirms Wedding Date</h3>
            <p className="mb-4 text-left text-gray-300">
              Ed Sheeran has released a new music video which has been seemingly confirming when he married.
            </p>
            <p className="mb-4 text-sm text-left text-purple-400">August 30, 2023 in World</p> {/* Purple date */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
