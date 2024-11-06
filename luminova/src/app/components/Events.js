import { useState } from 'react';

export default function Event() {
  const [selectedDay, setSelectedDay] = useState('FRIDAY');

  const events = {
    FRIDAY: {
      title: "Brainwash",
      date: "08 December",
      time: "doors open at 23:00",
      description:
        "Brainwash is a weekly party in Amsterdam’s DJO nightclub. Join the fun every Saturday night for raucous blasts of electro, EDM, and urban tunes from a variety of DJs.",
      price: "$55",
      link: "Get Tickets",
      backgroundImage: "url('/Assets/images/smoky-party-in-the-dark-jrq2dg21z0y6jbbm-jrq2dg21z0y6jbbm.jpg')", // Add background image URL here
    },
    SATURDAY: {
      title: "Soundstorm",
      date: "09 December",
      time: "doors open at 22:00",
      description:
        "Experience the thrill of Soundstorm at DJO nightclub, featuring an intense mix of house, techno, and deep bass beats. Top DJs will keep the energy up all night long.",
      price: "$60",
      link: "Get Tickets",
      backgroundImage: "url('/Assets/images/JzrDes.webp')", // Add background image URL here
    },
    SUNDAY: {
      title: "Chill Vibes",
      date: "10 December",
      time: "doors open at 20:00",
      description:
        "Unwind with Chill Vibes, a relaxed evening of mellow tunes, acoustic sets, and smooth jazz. Perfect for ending the weekend on a calm note.",
      price: "$45",
      link: "Get Tickets",
      backgroundImage: "url('/Assets/images/DJ-Controller.webp')", // Add background image URL here
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-16 text-white bg-transparent">
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
        <div
          className="max-w-4xl p-16 text-left bg-blue-800 shadow-2xl rounded-xl"
          style={{
            backgroundImage: events[selectedDay].backgroundImage,
            backgroundSize: 'cover',  // Ensures the image covers the entire div
            backgroundPosition: 'center',  // Centers the background image
            height: '400px', // Adjust this value to make the image area larger or smaller
          }}
        >
          <h3 className="text-4xl font-semibold">{events[selectedDay].title}</h3>
          <p className="mt-6 text-lg">{events[selectedDay].date} / {events[selectedDay].time}</p>
          <p className="mt-6 text-md">{events[selectedDay].description}</p>
          <p className="mt-6 text-2xl font-bold">{events[selectedDay].price}</p>
        </div>
      )}
    </div>
  );
}
