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


      <main className="flex flex-col items-center flex-1 p-4 mt-10 text-center bg-white rounded-lg shadow bg-opacity-90">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-800">Make Your Events Shine with Luminova</h2>
        <p className="mb-8 text-lg text-gray-600">
          Organize, manage, and publish events – from private parties to professional gatherings – all in one place.
        </p>
        <a href="#get-started" className="px-8 py-4 font-semibold text-white transition bg-indigo-600 rounded-full hover:bg-indigo-500">
          Get Started
        </a>
      </main>



      <footer className="w-full py-6 text-white bg-gray-800 bg-opacity-90">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Luminova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
