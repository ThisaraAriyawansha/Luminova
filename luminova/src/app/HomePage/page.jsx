"use client";

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Features from '../components/Features';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation';
import News from '../components/News';
import About from '../components/About';


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
    image: '/Assets/images/Noiyse project (Radith Rukshan).jpeg', // Replace with actual image path
  },
];



export default function HomePage() {
  // Define animation variants
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const slideIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          <nav className="flex mr-8 space-x-8">
            {['about', 'event', 'gallery', 'reservation', 'news'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-white font-semibold text-lg font-serif hover:text-white after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
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
            <a href="#get-started" className="px-8 py-3 font-semibold text-white transition duration-200 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300">
              Get in Touch
            </a>
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
      href="#get-started" // Replace with your actual link
      className="px-8 py-3 font-semibold text-white transition-colors duration-300 border border-white rounded-lg hover:bg-purple-600 hover:text-white"
    >
      Get in Touch
    </a>
  </motion.div>
</div>

        <About/>




        <div className="px-8 py-16 mb-0 text-white bg-transparent md:px-16 lg:px-32">
  <h2 className="mb-20 text-4xl font-bold text-left">Our Party Host</h2>
  <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="relative mb-4 transition-transform duration-300 w-60 h-80 hover:shadow-xl hover:scale-105">
          <Image
            src={host.image}
            alt={host.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-semibold">{host.name}</h3>
        <p className="text-lg text-purple-500">{host.role}</p>
      </motion.div>
    ))}
  </div>
</div>



    
        
        <Events />
        <Features />

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
