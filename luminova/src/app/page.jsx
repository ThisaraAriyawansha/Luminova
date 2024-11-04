// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
        <link rel="icon" href="/Assets/images/letter-l-logo-icon-design-with-swoosh-and-creative-curved-cut-shape-vector-removebg-preview.png" />
      </Head>

      <header className="w-full shadow bg-white/0">
        <div className="container flex items-center justify-between px-4 py-6 mx-auto">
          {/* Logo and title together */}
          <div className="flex items-center">
            <Image
              src="/Assets/images/logo.png"
              alt="Luminova Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1 className="text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
              Luminova
            </h1>
          </div>
          <nav className="flex space-x-8">
            <a 
              href="#about" 
              className="relative text-white font-semibold hover:text-white text-lg font-serif after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a 
              href="#event" 
              className="relative text-white font-semibold hover:text-white text-lg font-serif after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Event
            </a>
            <a 
              href="#gallery" 
              className="relative text-white font-semibold hover:text-white text-lg font-serif after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Gallery
            </a>
            <a 
              href="#reservation" 
              className="relative text-white font-semibold hover:text-white text-lg font-serif after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Reservation
            </a>
            <a 
              href="#news" 
              className="relative text-white font-semibold hover:text-white text-lg font-serif after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              News
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center flex-1 p-4 mt-10 text-center">
        
      <div className="flex flex-col w-full max-w-6xl p-8 mb-10 bg-white rounded-lg shadow-lg md:flex-row bg-opacity-90">
          {/* Left side - Text content */}
          <div className="flex-1 pr-4">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-800">Make Your Events Shine with Luminova</h2>
            <p className="mb-8 text-lg text-gray-600">
              Organize, manage, and publish events – from private parties to professional gatherings – all in one place.
            </p>
            <a href="#get-started" className="px-8 py-4 font-semibold text-white transition bg-indigo-600 rounded-full hover:bg-indigo-500">
              Get Started
            </a>
          </div>

          {/* Right side - Image */}
          <div className="flex-1">
            <Image 
              src="/Assets/images/istockphoto-1196272039-612x612-removebg-preview.png" // Replace with your image path
              alt="Event Planning"
              layout="responsive" // Responsive layout
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="rounded-lg" // Optional: rounded corners for the image
            />
          </div>
        </div>

        {/* Additional content sections with separate containers */}
        <div id="features" className="p-8 mb-10 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h3 className="text-2xl font-bold text-gray-800">Features</h3>
          <p className="mt-4 text-gray-600">
            Explore our powerful features that make event planning easy and efficient.
          </p>
        </div>

        <div id="event" className="p-8 mb-10 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h3 className="text-2xl font-bold text-gray-800">Events</h3>
          <p className="mt-4 text-gray-600">
            Discover the latest events happening around you and how you can participate.
          </p>
        </div>

        <div id="gallery" className="p-8 mb-10 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h3 className="text-2xl font-bold text-gray-800">Gallery</h3>
          <p className="mt-4 text-gray-600">
            Check out photos from past events to get inspired for your next gathering.
          </p>
        </div>

        <div id="reservation" className="p-8 mb-10 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h3 className="text-2xl font-bold text-gray-800">Reservation</h3>
          <p className="mt-4 text-gray-600">
            Make reservations for venues and services to ensure your event goes smoothly.
          </p>
        </div>

        <div id="news" className="p-8 mb-10 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h3 className="text-2xl font-bold text-gray-800">News</h3>
          <p className="mt-4 text-gray-600">
            Stay updated with the latest news and trends in event planning.
          </p>
        </div>
      </main>

      <footer className="w-full py-6 text-white bg-gray-800 bg-opacity-90">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Luminova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
