// pages/index.js
import Image from 'next/image';

const artists = [
  { name: 'Martin Garrix', imgSrc: '/Assets/images/DQgzXjZXcAUbw7Y.jpeg' },
  { name: 'Monolink', imgSrc: '/Assets/images/13684426.jpeg' },
  { name: 'KSHMR', imgSrc: '/Assets/images/artworks-000426918015-imrpxd-t500x500.jpg' },
  { name: 'AVAION', imgSrc: '/Assets/images/wss-avaion-dont-wake-me-up-FINAL-scaled.jpg' },
  { name: 'ZHU', imgSrc: '/Assets/images/p16v4wlv79n11.webp' },
  { name: 'Lane 8', imgSrc: '/Assets/images/thisneverhappened.jpg' },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen mb-10 bg-transparent" id="gallery">
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-3">
        {artists.map((artist, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-6 overflow-hidden shadow-lg w-80 h-80 rounded-xl">
              <Image
                src={artist.imgSrc}
                alt={artist.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-2xl font-bold text-white">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
