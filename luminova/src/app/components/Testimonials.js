import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [selectedPerson, setSelectedPerson] = useState('leo');

  const testimonials = {
    leo: {
      name: 'Leo Benderson Linchin',
      role: 'Artist',
      image: '/Assets/images/premium_photo-1672239496290-5061cfee7ebb.jpeg',
      text: "Great location, Super professional staff, Great dj/music, I loved the pricing for a table we reserved that included foods and drinks! Classy beautiful interior to dance and enjoy the night out!",
    },
    esther: {
      name: 'Esther Howard',
      role: 'Producer',
      image: '/Assets/images/pexels-photo-2379005.jpeg',
      text: "Amazing atmosphere, perfect for networking and meeting creatives! I had a fantastic time with great food and lovely drinks.",
    },
    anna: {
      name: 'Anna Fidelstain',
      role: 'Dancer',
      image: '/Assets/images/woman-holds-wine-glass-glamorous-style_961875-25765.avif',
      text: "Loved the dance floor and the vibe! The music was on point, and the crowd was lively. Definitely a place to unwind and have fun!",
    },
  };

  return (
    <section className="flex items-center justify-center px-6 py-12 text-white bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-purple-500">TESTIMONIALS</h2>
          <h1 className="text-4xl font-bold text-white">Luminova - Your Event Organizing Platform</h1>
        </div>

        {/* Testimonial Text with slow animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 2 }} // Slow down by setting a longer duration
        >
          <p className="text-lg">{testimonials[selectedPerson].text}</p>
        </motion.div>

        {/* Grid of testimonial buttons */}
        <div className="grid justify-center grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* Button for Leo */}
          <motion.button
            onClick={() => setSelectedPerson('leo')}
            className={`text-center focus:outline-none p-4 rounded-xl ${selectedPerson === 'leo' ? 'border-2 border-white' : ''}`}
            style={{
              width: '180px',
              backgroundColor: 'transparent',
              transition: 'border 0.3s ease',
            }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            initial={{ opacity: 0, y: 50 }} // Increased initial y value for visibility
            transition={{ duration: 2 }} // Slow down the animation duration
            whileHover={{ scale: 1.1 }} // Slightly stronger hover effect
          >
            <div className="w-20 h-20 mx-auto mb-2">
              <Image src={testimonials.leo.image} alt={testimonials.leo.name} width={80} height={80} className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold">{testimonials.leo.name}</h3>
            <p className="text-sm text-gray-400">{testimonials.leo.role}</p>
          </motion.button>

          {/* Button for Esther */}
          <motion.button
            onClick={() => setSelectedPerson('esther')}
            className={`text-center focus:outline-none p-4 rounded-xl ${selectedPerson === 'esther' ? 'border-2 border-white' : ''}`}
            style={{
              width: '180px',
              backgroundColor: 'transparent',
              transition: 'border 0.3s ease',
            }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            initial={{ opacity: 0, y: 50 }} // Increased initial y value for visibility
            transition={{ duration: 2 }} // Slow down the animation duration
            whileHover={{ scale: 1.1 }} // Slightly stronger hover effect
          >
            <div className="w-20 h-20 mx-auto mb-2">
              <Image src={testimonials.esther.image} alt={testimonials.esther.name} width={80} height={80} className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold">{testimonials.esther.name}</h3>
            <p className="text-sm text-gray-400">{testimonials.esther.role}</p>
          </motion.button>

          {/* Button for Anna */}
          <motion.button
            onClick={() => setSelectedPerson('anna')}
            className={`text-center focus:outline-none p-4 rounded-xl ${selectedPerson === 'anna' ? 'border-2 border-white' : ''}`}
            style={{
              width: '180px',
              backgroundColor: 'transparent',
              transition: 'border 0.3s ease',
            }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            initial={{ opacity: 0, y: 50 }} // Increased initial y value for visibility
            transition={{ duration: 2 }} // Slow down the animation duration
            whileHover={{ scale: 1.1 }} // Slightly stronger hover effect
          >
            <div className="w-20 h-20 mx-auto mb-2">
              <Image src={testimonials.anna.image} alt={testimonials.anna.name} width={80} height={80} className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold">{testimonials.anna.name}</h3>
            <p className="text-sm text-gray-400">{testimonials.anna.role}</p>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
