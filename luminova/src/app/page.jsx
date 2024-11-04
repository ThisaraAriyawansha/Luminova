// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Luminova - Event Planning Simplified</title>
        <meta name="description" content="Organize, manage, and publish events seamlessly with Luminova." />
        <link rel="icon" href="/Assets/images/letter-l-logo-icon-design-with-swoosh-and-creative-curved-cut-shape-vector-removebg-preview.png" />
      </Head>

      <header className="w-full bg-white shadow">
        <div className="container flex items-center justify-between px-4 py-6 mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600">Luminova</h1>
          <nav>
            <a href="#features" className="mx-4 text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#about" className="mx-4 text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="mx-4 text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center flex-1 p-4 mt-10 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-800">Make Your Events Shine with Luminova</h2>
        <p className="mb-8 text-lg text-gray-600">
          Organize, manage, and publish events – from private parties to professional gatherings – all in one place.
        </p>
        <a href="#get-started" className="px-8 py-4 font-semibold text-white transition bg-indigo-600 rounded-full hover:bg-indigo-500">
          Get Started
        </a>
      </main>

      <section id="features" className="w-full py-16 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h3 className="mb-8 text-3xl font-semibold text-gray-800">Features</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-4 rounded-lg shadow bg-gray-50">
              <h4 className="text-xl font-semibold text-indigo-600">Event Organization</h4>
              <p className="mt-2 text-gray-600">Plan and structure events effortlessly with tools that keep everything in place.</p>
            </div>
            <div className="p-4 rounded-lg shadow bg-gray-50">
              <h4 className="text-xl font-semibold text-indigo-600">Invite and Manage RSVPs</h4>
              <p className="mt-2 text-gray-600">Send invites and manage RSVPs directly from Luminova’s platform.</p>
            </div>
            <div className="p-4 rounded-lg shadow bg-gray-50">
              <h4 className="text-xl font-semibold text-indigo-600">Event Publishing</h4>
              <p className="mt-2 text-gray-600">Make events public or private, and share with your audience with ease.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-6 text-white bg-gray-800">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Luminova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
