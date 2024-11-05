"use client";

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Features from '../components/Features';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation';
import News from '../components/News';

export default function HomePage() {
  // Define animation variants
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const slideIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url('/Assets/images/764385-widescreen-black-purple-background-2560x1600-mac.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Head>
        <title>Luminova - Event Planning Simplified</title>
        <meta name="description" content="Organize, manage, and publish events seamlessly with Luminova." />
        <link rel="icon" href="/Assets/images/letter-l-logo-icon-design.png" />
      </Head>

      {/* Header */}
      <header className="w-full shadow bg-white/0">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="container flex items-center justify-between px-4 py-6 mx-auto"
        >
          <div className="flex items-center">
            <Image src="/Assets/images/logo.png" alt="Luminova Logo" width={50} height={50} className="mr-2" />
            <h1 className="text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
              Luminova
            </h1>
          </div>
          <nav className="flex space-x-8 ">
            {['About', 'Event', 'Gallery', 'Reservation', 'News'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white font-semibold text-lg font-serif hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 p-4 mt-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full max-w-6xl p-1 mb-12 md:flex-row md:space-x-8"
        >
          <div className="flex-1 p-6 mr-40 text-left text-white -ml-28 md:w-1/2">
            <h6 className="mb-2 text-base font-semibold tracking-wider text-white uppercase">Welcome to the Party</h6>
            <h2 className="mb-8 font-extrabold text-white text-7xl">Make Your Events Shine with Luminova</h2>
            <p className="mb-10 text-lg text-gray-200" style={{ fontFamily: 'Tinos, serif' }}>
              Seamlessly organize and manage events, from intimate gatherings to large professional conferences. Customize your planning experience with real-time collaboration and an intuitive interface.
            </p>
            <a href="#get-started" className="px-8 py-3 font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-500">Get in Touch</a>
          </div>

          <div className="flex-1 mt-6 md:w-1/2 md:mt-0">
            <Image 
              src="/Assets/images/1730777171598.png_image.png"
              alt="Event Planning"
              layout="responsive"
              width={450}
              height={280}
              className="shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

        <Features />
        <Events />
        <Gallery />
        <Reservation />
        <News />
      </main>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="w-full py-6 text-white bg-gray-800 bg-opacity-90"
      >
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Luminova. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
