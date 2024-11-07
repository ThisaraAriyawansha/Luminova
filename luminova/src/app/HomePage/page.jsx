"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Features from '../components/Features';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation';
import News from '../components/News';
import About from '../components/About';
import Terminate from '../components/Testimonials';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  // Importing icons from react-icons library


const hosts = [
  {
    name: 'Osanda Gunawardana',
    role: 'Levi Frizz',
    image: '/Assets/images/Levi Frizz (Osanda S Gunawardana).webp', // Replace with actual image path
  },
  {
    name: 'Thivina',
    role: 'Mechanic',
    image: '/Assets/images/Mechanic( Thivina).webp', // Replace with actual image path
  },
  {
    name: 'Jenny Wilson',
    role: 'Dancer',
    image: '/Assets/images/dark-neon-iphone-woman-wearing-sunglasses-z90chg9um9ehyl19.jpg', // Replace with actual image path
  },
  {
    name: 'Radith Rukshan',
    role: 'Noiyse project',
    image: '/Assets/images/240155468_2309403905902526_5013628274033763031_n.jpg', // Replace with actual image path
  },
];


const services = [
  {
    id: 1,
    title: 'Corporate Events',
    description:
      'Creativity corporate events from concept and design, right through to production and management of the event itself.',
  },
  {
    id: 2,
    title: 'Branded Events',
    description:
      'We offer the best landscaping and gardening guarantee. Our branded events provide unmatched opportunities for you to interact with customers and make the brand even stronger and recognizable.',
  },
  {
    id: 3,
    title: 'Commercial Shots',
    description:
      'We provide production services for commercials, branded media, films/TV or documentary shoots in many pavilions.',
  },
  {
    id: 4,
    title: 'Weddings & Engagements',
    description:
      'Specializing in creating unforgettable moments for weddings and engagement parties, from intimate gatherings to grand celebrations.',
  },
  {
    id: 5,
    title: 'Birthday Parties',
    description:
      'Our birthday party services include live DJs, dancing, bottle service, and much more.',
  },
  {
    id: 6,
    title: 'VIP Service',
    description:
      'From individual club VIP packages and bottle services to closed exclusive parties.',
  },
];


const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};


export default function HomePage() {
  // Define animation variants
  const slideIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu after navigation on mobile
    }
  };


  const [menuOpen, setMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

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

      <header className="w-full shadow bg-white/0">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="container flex items-center justify-between px-4 py-6 mx-auto"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Assets/images/logo.png" alt="Luminova Logo" width={50} height={50} className="mr-2" />
          <h1 className="text-2xl font-extrabold tracking-wide text-transparent md:text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
            Luminova
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {["about", "event", "gallery", "reservation", "news"].map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative text-white font-semibold text-lg font-serif hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl text-white md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen space-y-8 text-white bg-black/90 md:hidden"
          >
            {["about", "event", "gallery", "reservation", "news"].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-serif text-xl font-semibold"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.nav>
        )}
      </motion.div>
    </header>
    
    <main className="flex flex-col items-center flex-1 p-4 mt-10 text-center">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideIn}
    transition={{ duration: 0.8 }}
    className="flex flex-col w-full p-4 mb-12 max-w-7xl md:flex-row md:space-x-8"
  >
    {/* Left Column - Text Content */}
    <div className="flex-1 p-6 text-left text-white md:w-1/2 md:mr-8 md:ml-[-40px]">
      <h6 className="mb-2 text-base font-semibold tracking-wider text-white uppercase">Welcome to the Party</h6>
      <h2 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Make Your Events Shine with Luminova
      </h2>
      <p className="mb-8 text-lg text-gray-200 sm:text-xl md:text-lg" style={{ fontFamily: 'Tinos, serif' }}>
        Seamlessly organize and manage events, from intimate gatherings to large professional conferences. Customize your planning experience with real-time collaboration and an intuitive interface.
      </p>
      <a
        href="#news"
        className="px-6 py-3 font-semibold text-white transition duration-200 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300"
      >
        Get in Touch
      </a>
    </div>

    {/* Right Column - Image */}
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
</main>




        <div className="max-w-5xl p-6 mx-auto mt-10 mb-10 rounded-lg lg:bg-white/0">
  <motion.h1
    className="mb-6 text-4xl font-extrabold text-center text-transparent uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
  >
    Luminova
  </motion.h1>

  <motion.p
    className="text-lg leading-relaxed text-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 0.3 }}
    viewport={{ once: true }}
  >
    Welcome to Luminova, your go-to platform for organizing and publishing unforgettable events. Whether you’re hosting an intimate gathering, a lavish wedding, or a large-scale professional conference, Luminova is designed to meet all your planning needs.
    <br /><br />
    Our platform empowers you to customize every detail of your events with real-time collaboration tools, allowing you and your team to work together effortlessly from any location. Experience a user-friendly interface that streamlines the planning process, making it easy to manage guest lists, track RSVPs, and coordinate schedules.
    <br /><br />
    From choosing the perfect venue to curating a delightful catering menu, Luminova provides all the resources necessary to create memorable experiences. With integrated features for event promotion and feedback collection, you can ensure that every aspect is perfectly tailored, guaranteeing that your attendees have an exceptional time.
  </motion.p>

  {/* Button */}
  <motion.div
    className="flex justify-center mt-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 0.5 }}
    viewport={{ once: true }}
  >
    <a 
      href="#news" // Replace with your actual link
      className="px-8 py-3 font-semibold text-white transition-colors duration-300 border border-white rounded-lg hover:bg-purple-600 hover:text-white"
    >
      Get in Touch
    </a>
  </motion.div>
</div>

        <About/>



        <div className="px-8 py-16 mb-0 text-white bg-transparent md:px-16 lg:px-32">
  <h2 className="mb-10 text-3xl font-bold text-left sm:mb-16 sm:text-4xl">Our Party Host</h2>
  <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-4">
    {hosts.map((host, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-start text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: index * 0.2 }} // Slow down animation
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }} // Hover effect
      >
        <div className="relative w-full mb-4 transition-transform duration-300 h-80 sm:h-96 md:w-60 md:h-80 lg:w-72 lg:h-96 hover:shadow-xl hover:scale-105">
          <Image
            src={host.image}
            alt={host.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h3 className="text-xl font-semibold sm:text-2xl">{host.name}</h3>
        <p className="text-lg text-purple-500">{host.role}</p>
      </motion.div>
    ))}
  </div>
</div>


<Events />




<div className="px-4 py-16 text-white bg-transparent">
  <div className="max-w-6xl mx-auto text-left mb-28">
    <h2 className="mb-12 text-5xl font-bold text-center md:text-left">What We Do</h2>
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
      {services.map((service) => (
        <motion.div
          key={service.id}
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -100, scale: 0.9 }} // Start off-screen to the left, smaller and hidden
          whileInView={{
            opacity: 1,          // Fade in
            x: 0,                // Slide to normal position (0px from left)
            scale: 1,            // Scale up to normal size
            transition: { 
              duration: 2.5,     // Further slower animation duration (2.5 seconds)
              ease: "easeOut",   // Easing function for smooth exit
            },
          }}
          viewport={{ once: true, amount: 0.3 }} // Trigger the animation when 30% of the element is in view
        >
          <div className="flex items-center justify-center w-16 h-16 mb-6 text-xl font-bold text-purple-600 bg-white rounded-full">
            {service.id}
          </div>
          <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
          <p className="text-base text-gray-400">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>



        <Gallery />
        <Reservation />
        <Terminate/>
        <Features />
        <News />


        <motion.footer
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  whileInView="visible"  // Animation triggers when in view
  transition={{ duration: 1 }}
  className="w-full py-8 text-white bg-transparent"
>
  <div className="container px-4 mx-auto text-center">
    {/* Social Icons */}
    <div className="flex flex-wrap justify-center mb-6 space-x-6">
      <a
        href="https://facebook.com"
        className="transition-colors hover:text-purple-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://twitter.com"
        className="transition-colors hover:text-purple-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com"
        className="transition-colors hover:text-purple-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com"
        className="transition-colors hover:text-purple-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </div>

    {/* Copyright Text */}
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Luminova. All rights reserved.
    </p>
  </div>
</motion.footer>



    </div>
  );
}
