import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Event() {
  const [selectedDay, setSelectedDay] = useState('FRIDAY');
  const [scrollY, setScrollY] = useState(0); // To track scroll position
  const controls = useAnimation();

  const events = {
    FRIDAY: {
      title: "Brainwash",
      date: "08 December",
      time: "doors open at 23:00",
      description:
        "Brainwash is a weekly party in Amsterdam’s DJO nightclub.\n Join the fun every Saturday night for raucous blasts of electro, \n EDM, and urban tunes from a variety of DJs.\nCome enjoy the vibe and party till the early hours!",
      price: "$55",
      link: "Get Tickets",
      backgroundImage: "url('/Assets/images/360_F_618017481_GjJcTYXFQLDpr3avgTQ8ClXM0k3Ds7rS.jpg')",
    },
    SATURDAY: {
      title: "Soundstorm",
      date: "09 December",
      time: "doors open at 22:00",
      description:
        "Experience the thrill of Soundstorm at DJO nightclub, featuring an intense\n mix of house, techno, and deep bass beats. Top DJs will keep the energy \nup all night long.Don't miss the electrifying atmosphere!",
      price: "$60",
      link: "Get Tickets",
      backgroundImage: "url('/Assets/images/JzrDes.webp')",
    },
    SUNDAY: {
      title: "Chill Vibes",
      date: "10 December",
      time: "doors open at 20:00",
      description:
        "Unwind with Chill Vibes, a relaxed evening of mellow \n tunes, acoustic sets, and smooth jazz. Perfect for ending \nthe weekend on a calm note.Join us for a laid-back and soothing experience.",
      price: "$45",
      link: "Get Tickets",
      backgroundImage: "url('/Assets/images/DJ-Controller.webp')",
    },
  };

  // Scroll effect to change animation when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (scrollY > 50) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: -50 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, controls]);

  // Scroll-based animation for smooth effect
  const eventCardAnimation = {
    opacity: scrollY > 150 ? 1 : 0, // Fade in when scrolled down
    y: scrollY > 150 ? 0 : 50, // Slide up as we scroll
    scale: scrollY > 150 ? 1 : 0.95, // Scale effect when scrolling down
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-16 text-white bg-transparent" id="event">
      <h2 className="text-xl font-semibold text-pink-300">DATES FOR OUR</h2>
      <h1 className="mt-4 mb-6 text-5xl font-bold text-white">Upcoming Parties</h1>
      <p className="mb-12 text-lg text-center">
        View our event calendar to see upcoming events. Purchase<br /> tickets, VIP Bar Cards, or reserve VIP tables with bottle service.
      </p>

      {/* Day Selector */}
      <div className="flex mb-8 space-x-6">
        {Object.keys(events).map((day) => (
          <button
            key={day}
            className={`py-4 px-10 text-lg font-semibold rounded-full ${selectedDay === day ? 'bg-transparent text-white border-2 border-white' : 'bg-transparent text-white uppercase'}`}
            onClick={() => setSelectedDay(day)}
            style={{ minWidth: '120px' }}  // Increase button width
          >
            {day}
          </button>
        ))}
      </div>

      {/* Event Card with Background */}
      {events[selectedDay].title && (
        <motion.div
          className="p-16 text-left bg-blue-800 shadow-2xl rounded-xl"
          style={{
            backgroundImage: events[selectedDay].backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
            width: '1200px',
          }}
          animate={eventCardAnimation}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}  // Start smaller and fade in
          transition={{
            opacity: { duration: 1.2, ease: 'easeOut' },
            y: { type: 'spring', stiffness: 300, damping: 30 },
            scale: { duration: 0.8, ease: 'easeOut' },
          }}
          key={selectedDay} // Key helps to trigger re-animation on day change
          whileHover={{ scale: 1.05 }} // Hover effect: scale up
        >
          <h3 className="text-4xl font-semibold">{events[selectedDay].title}</h3>
          <p className="mt-6 text-lg">{events[selectedDay].date} / {events[selectedDay].time}</p>

          {/* Description with line breaks using <br /> tags */}
          <p className="mt-6 text-md">
            {events[selectedDay].description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <p className="mt-6 text-2xl font-bold">{events[selectedDay].price}</p>
        </motion.div>
      )}
    </div>
  );
}
