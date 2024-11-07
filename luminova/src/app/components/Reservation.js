import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import axios from 'axios';  // Import Axios for HTTP requests

export default function Reservation() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const formRef = useRef(null);
  const contactRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-50px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-50px" });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("Submitting...");
      
      // Call the backend API to save the reservation
      const response = await axios.post('http://localhost:5000/api/reservation', formData);
      
      if (response.data.message) {
        setStatus("Reservation successfully saved!");
        setFormData({
          name: '',
          phone: '',
          email: '',
          people: '',
          message: '',
        });  // Reset the form
      }
    } catch (error) {
      setStatus("Error saving reservation.");
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <div className="flex items-center min-h-screen p-8 text-white bg-transparent" id="reservation">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-36 md:grid-cols-2">
        
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 3, ease: "easeInOut" }} 
          className="space-y-8 text-left"
        >
          <h2 className="mb-4 text-3xl font-bold">Want To Reserve?</h2>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <motion.div
              variants={slideIn}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, delay: 0.2 }} 
              className="col-span-1"
            >
              <label className="block mb-2 text-sm">Your name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 text-white bg-transparent border-b border-gray-500 focus:outline-none"
              />
            </motion.div>
            <motion.div
              variants={slideIn}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, delay: 0.3 }}  
              className="col-span-1"
            >
              <label className="block mb-2 text-sm">Phone number*</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 text-white bg-transparent border-b border-gray-500 focus:outline-none"
              />
            </motion.div>
            <motion.div
              variants={slideIn}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, delay: 0.4 }} 
              className="col-span-1"
            >
              <label className="block mb-2 text-sm">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 text-white bg-transparent border-b border-gray-500 focus:outline-none"
              />
            </motion.div>
            <motion.div
              variants={slideIn}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, delay: 0.5 }}  
              className="col-span-1"
            >
              <label className="block mb-2 text-sm">No. of people*</label>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleInputChange}
                className="w-full p-2 text-white bg-transparent border-b border-gray-500 focus:outline-none"
              />
            </motion.div>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              transition={{ duration: 1.2, delay: 0.6 }}  
              className="col-span-2"
            >
              <label className="block mb-2 text-sm">Your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 text-white bg-transparent border-b border-gray-500 focus:outline-none"
                rows="4"
              ></textarea>
            </motion.div>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              transition={{ duration: 1.2, delay: 0.7 }} 
              className="col-span-2"
            >
              <button type="submit" className="px-4 py-2 mt-4 transition border border-white hover:bg-purple-600 hover:text-white">
                Submit
              </button>
            </motion.div>
          </form>
          <p>{status}</p>
        </motion.div>
        
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 3, delay: 0.3, ease: "easeInOut" }}  
          className="space-y-4 text-left text-gray-300"
        >
          <h3 className="text-lg font-semibold text-purple-400">QUESTIONS?</h3>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="leading-relaxed">
            Fill out the form to attend the most anticipated events in the city and get your tickets for the best night party today for you and your friends.
          </p>
          <motion.p
            variants={slideIn}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay: 0.4 }}  
            className="text-gray-400"
          >
            123 Galle Road, Colombo, 00300, Sri Lanka.
          </motion.p>
          <motion.p
            variants={slideIn}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay: 0.5 }}  
          >
            <a href="tel:+94769417154" className="text-purple-400 hover:text-white">+94 76 941 7154</a>
          </motion.p>
          <motion.p
            variants={slideIn}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay: 0.6 }} 
          >
            <a href="mailto:office@luminova.com" className="text-purple-400 hover:text-white">office@luminova.com</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
