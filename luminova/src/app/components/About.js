// components/AboutSection.js
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center px-8 py-16 text-white bg-black md:px-16 lg:px-32 md:flex-row">
      {/* Left Side */}
      <div className="mb-8 mr-20 -ml-20 md:w-1/2 md:mb-0">
        <h2 className="mb-4 text-3xl font-bold">About Last Night</h2>
        <p className="mb-8 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo adipiscing faucibus nunc amet convallis posuere diam nulla. Pellentesque vulputate dui posuere orci tellus dolor, semper convallis sed.
        </p>
        <div className="flex space-x-8 align-center">
          <div>
            <span className="text-2xl font-bold">20+</span>
            <p className="text-gray-400">Music Artists</p>
          </div>
          <div>
            <span className="text-2xl font-bold">150+</span>
            <p className="text-gray-400">Songs</p>
          </div>
          <div>
            <span className="text-2xl font-bold">10+</span>
            <p className="text-gray-400">Places</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2">
        <Image
          src="/Assets/images/pexels-wendywei-1190298.jpg" // Replace with your image path
          alt="Party Image"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>

        {/* Purple Dots in L Shape */}
        <div className="absolute flex flex-col items-center bottom-4 right-4">
          {/* Vertical Dots (4 dots) */}
          <div className="flex flex-col space-y-1">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="w-2 h-2 bg-purple-600 rounded-full"></div>
            ))}
          </div>

          {/* Horizontal Dots (7 dots) */}
          <div className="flex mt-2 space-x-1">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div key={idx} className="w-2 h-2 bg-purple-600 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
