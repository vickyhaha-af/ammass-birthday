import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dices, Heart, Sparkles } from 'lucide-react';
import Confetti from 'react-confetti';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E8D5C4] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D3E0DC] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      {/* Text Content */}
      <div className="z-10 text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-[#2A2A2A] mb-4"
        >
          Happy 46th Birthday,<br />
          <span className="text-[#D4AF37]">Simithaa</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-sans text-gray-500 text-lg tracking-widest uppercase"
        >
          Elegance • Grace • Love
        </motion.p>
      </div>
    </section>
  );
};

const HaikuSection = () => {
  const lines = [
    "Dice roll, time slips past",
    "Years crest and break",
    "like the immutable tide",
    "Here for all your dawn"
  ];

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#FDFBF7] py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-white max-w-lg w-full p-12 shadow-2xl rounded-3xl border border-[#E8D5C4]/50 text-center"
      >
        {/* Dice Icon */}
        <motion.div 
          animate={{ rotateY: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white p-3 rounded-full shadow-lg"
        >
          <Dices size={24} />
        </motion.div>

        <div className="space-y-6 mt-4">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.5, duration: 0.8 }}
              className="font-serif text-2xl md:text-3xl italic text-gray-700 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Wave SVG at bottom */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
          <svg 
            className="w-full h-16 md:h-24" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{
              fill: '#FDFBF7',
              transform: 'rotate(180deg)'
            }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.67,583,72c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,141.56,72.19,6.7,11.9,11.2,24.23,16.08,36.3V0Z"
              opacity=".5"
            />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  // PLACEHOLDERS: Replace src with actual paths like "/mom1.jpg" later
  const photos = [
    { id: 1, color: "bg-red-100", rotation: "rotate-2" },
    { id: 2, color: "bg-blue-100", rotation: "-rotate-1" },
    { id: 3, color: "bg-green-100", rotation: "rotate-3" },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <h2 className="text-center font-serif text-4xl text-[#2A2A2A] mb-16">Beautiful Moments</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={`w-64 h-80 bg-white p-4 shadow-lg rounded-sm transform ${photo.rotation} transition-all duration-500 ease-out`}
          >
            {/* Image Container (Gray Box for now) */}
            <div className={`w-full h-5/6 ${photo.color} mb-4 bg-gray-200 flex items-center justify-center text-gray-400`}>
              <span className="text-sm">Photo {photo.id}</span>
            </div>
            <div className="text-center font-handwriting text-gray-500 text-sm">
              Memory {photo.id}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CakeSection = () => {
  const [wished, setWished] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-32 bg-[#D3E0DC]/20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {wished && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}
      
      <motion.div 
        animate={wished ? { scale: 1.1 } : {}}
        className="relative mb-8"
      >
         {/* Simple Cake SVG Representation */}
        <div className="w-40 h-40 bg-[#E8D5C4] rounded-lg relative flex items-center justify-center shadow-xl">
            <div className="absolute -top-8 flex gap-2">
                {[1,2,3].map(i => (
                    <div key={i} className="flex flex-col items-center">
                        {!wished && (
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="w-2 h-4 bg-orange-400 rounded-full blur-[1px] mb-1"
                            />
                        )}
                        <div className="w-2 h-8 bg-white border border-gray-200" />
                    </div>
                ))}
            </div>
            <span className="font-serif text-2xl text-[#8B4513]">46</span>
        </div>
      </motion.div>

      <h2 className="font-serif text-3xl mb-6">Make a Wish</h2>
      
      {!wished ? (
        <button 
          onClick={() => setWished(true)}
          className="px-8 py-3 bg-[#D4AF37] text-white rounded-full font-sans tracking-wide hover:bg-[#C5A028] transition-colors shadow-lg flex items-center gap-2"
        >
          <Sparkles size={18} /> Blow Candles
        </button>
      ) : (
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-2xl text-[#D4AF37]"
        >
            May this year be your best one yet!
        </motion.p>
      )}
    </section>
  );
};

const Footer = () => {
    return (
        <footer className="py-8 bg-white text-center">
            <p className="font-sans text-gray-400 text-sm flex items-center justify-center gap-2">
                Made with love by M S Vikram <Heart size={12} className="fill-red-400 text-red-400 animate-pulse"/>
            </p>
        </footer>
    )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden">
      <Hero />
      <HaikuSection />
      <Gallery />
      <CakeSection />
      <Footer />
    </div>
  );
}
