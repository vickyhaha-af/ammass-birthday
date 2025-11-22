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

        {/* Abstract Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-3xl opacity-20">
          <svg viewBox="0 0 1440 320" className="w-full text-[#D3E0DC] fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
