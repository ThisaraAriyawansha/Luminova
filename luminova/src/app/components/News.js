import { motion } from 'framer-motion';
import { useState } from 'react';

export default function News() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const slideUp = {
    hidden: { opacity: 0, y: 50 },  
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },  
    visible: { opacity: 1, scale: 1 },
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setResponseMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setResponseMessage('Subscription successful!');
      } else {
        setResponseMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResponseMessage('Error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-8 py-16 text-white bg-black" id="news">
      <section className="text-center">
        <motion.h4
          className="mb-2 font-semibold text-purple-400 uppercase"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
        >
          Stay Updated
        </motion.h4>

        <motion.h2
          className="mb-4 text-3xl font-bold"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          Subscribe To Newsletter
        </motion.h2>

        <motion.form
          className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <motion.input
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={handleEmailChange}
            className="w-full max-w-screen-lg p-4 text-center bg-transparent border-b border-gray-500 md:w-2/3 focus:outline-none"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            required
          />
          <motion.button
            className="px-8 py-3 font-semibold text-black transition bg-purple-400 hover:bg-purple-500"
            type="submit"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
        </motion.form>

        {responseMessage && <p className="mt-4 text-white">{responseMessage}</p>}
      </section>
    </div>
  );
}
