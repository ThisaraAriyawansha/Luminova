import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

// Custom Hook for Count-Up Animation with Intersection Observer
function useCountUp(target, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Only start counting if it's true

    let start = 0;
    const increment = target / (duration / 10);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(counter);
  }, [target, duration, startCounting]);

  return count;
}

export default function About() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  // Observe the section and set startCounting to true when it is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Use the custom hook for each statistic
  const artistsCount = useCountUp(30, 2000, startCounting);   // 30+
  const songsCount = useCountUp(200, 2000, startCounting);    // 200+
  const crowdCount = useCountUp(10000, 2000, startCounting);  // 10K+

  return (
    <div
      id="about"
      ref={sectionRef}
      className="flex flex-col items-center px-6 py-12 mb-0 text-white md:px-16 lg:px-32 md:py-16 group md:flex-row"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      {/* Left Side */}
      <div className="p-4 mb-8 text-left transition duration-300 transform rounded-lg md:mr-10 lg:mr-20 md:ml-0 md:w-1/2 md:mb-0 animate__animated animate__fadeInLeft">
        <h2 className="mb-4 text-2xl font-bold transition duration-300 md:text-3xl lg:text-4xl group-hover:text-purple-400">
          About Last Night
        </h2>
        <p className="mb-8 text-sm text-white md:text-base lg:text-lg">
          Our Last Night was an unforgettable experience, bringing together amazing music, vibrant energy, and a crowd of passionate fans. From the beats that kept everyone dancing to the memorable moments shared, it was truly a night to remember.
        </p>

        <div className="flex flex-col justify-center space-y-6 text-center sm:flex-row sm:space-y-0 sm:space-x-8">
          <div>
            <span className="text-3xl font-bold text-purple-500 transition duration-300 md:text-4xl group-hover:text-purple-400">
              {artistsCount}+
            </span>
            <p className="text-sm text-white md:text-base">Music Artists</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-purple-500 transition duration-300 md:text-4xl group-hover:text-purple-400">
              {songsCount}+
            </span>
            <p className="text-sm text-white md:text-base">Songs</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-purple-500 transition duration-300 md:text-4xl group-hover:text-purple-400">
              {crowdCount.toLocaleString()}+
            </span>
            <p className="text-sm text-white md:text-base">Crowd</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2 md:mr-0 animate__animated animate__fadeInRight">
        <div className="relative transition duration-300 transform group-hover:scale-105">
          <Image
            src="/Assets/images/pexels-wendywei-1190298.jpg"
            alt="Party Image"
            width={550}
            height={350}
            className="rounded-lg"
          />
          <div className="absolute right-0 -bottom-8 lg:-bottom-10">
            <div className="absolute w-24 h-24 border-b-8 border-r-8 border-purple-500 border-dotted rounded-br-lg md:w-28 md:h-28 lg:w-32 lg:h-32 right-2 bottom-2"></div>
            <div className="absolute w-24 h-24 border-b-8 border-r-8 border-purple-500 border-dotted rounded-br-lg md:w-28 md:h-28 lg:w-32 lg:h-32 right-4 bottom-4"></div>
            <div className="absolute w-20 h-20 border-b-8 border-r-8 border-purple-500 border-dotted rounded-br-lg md:h-28 md:w-28 right-6 bottom-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
