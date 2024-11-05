// components/AboutSection.js
import Image from 'next/image';

export default function About() {
  return (
    <div
      className="flex flex-col items-center px-8 py-16 mb-24 text-white md:px-16 lg:px-32 md:flex-row"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      {/* Left Side */}
      <div className="mb-8 mr-20 -ml-4 text-left md:w-1/2 md:mb-0">
        <h2 className="mb-4 text-3xl font-bold">About Last Night</h2>
        <p className="mb-8 text-white">
            Our Last Night was an unforgettable experience, bringing together amazing music, vibrant energy, and a crowd of passionate fans. From the beats that kept everyone dancing to the memorable moments shared, it was truly a night to remember.
            </p>

        <div className="flex space-x-8 text-center">
          <div>
            <span className="text-4xl font-bold text-purple-500">20+</span>
            <p className="text-white">Music Artists</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-purple-500">150+</span>
            <p className="text-white">Songs</p>
          </div>
          {/* Updated container for "Crowd 10000" */}
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-purple-500">10K+</span>
            <p className="text-white">Crowd</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2 -mr-28">
        <div className="relative">
          <Image
            src="/Assets/images/pexels-wendywei-1190298.jpg" // Replace with your image path
            alt="Party Image"
            width={580}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute right-0 -bottom-10">
            {/* Purple dotted border in the bottom-right corner */}
            <div className="absolute w-32 h-32 border-b-8 border-r-8 border-purple-500 border-dotted rounded-br-lg right-2 bottom-2"></div>
            <div className="absolute w-32 h-32 border-b-8 border-r-8 border-purple-500 border-dotted rounded-br-lg right-4 bottom-4"></div>
            <div className="absolute border-b-8 border-r-8 border-purple-500 border-dotted rounded-br-lg h-28 w-28 right-6 bottom-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
