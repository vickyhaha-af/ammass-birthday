import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import Confetti from 'react-confetti';

// Components
const AuroraBackground = () => (
  <div className="fixed inset-0 -z-10 aurora-bg" />
);

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-serif text-5xl md:text-7xl text-rose-900 mb-4"
    >
      Happy Birthday, <br className="md:hidden" />
      <span className="text-rose-700">Simithaa</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-rose-800 text-lg md:text-xl mt-4 max-w-2xl"
    >
      A celebration of your love, strength, and grace
    </motion.p>
  </section>
);

const HaikuSection = () => {
  const lines = [
    "Dice roll, time slips past",
    "Years crest and break",
    "like the immutable tide",
    "Here for all your dawn"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl w-full"
      >
        <div className="space-y-6">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              className="font-serif text-2xl md:text-3xl italic text-rose-900 text-center leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const MemoryGallery = () => {
  const [photos] = useState(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 60 - 30,
      y: Math.random() * 40 - 20,
      rotate: Math.random() * 20 - 10,
      src: `/images/image${(i % 4) + 1}.jpeg`
    }))
  );

  return (
    <section className="min-h-screen relative overflow-hidden p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-rose-900 text-center mb-16"
        >
          Our Memories
        </motion.h2>
        
        <div className="relative h-[80vh]">
          <AnimatePresence>
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className="absolute draggable-photo"
                style={{
                  left: '50%',
                  top: '50%',
                  x: photo.x,
                  y: photo.y,
                  rotate: photo.rotate,
                }}
                drag
                dragConstraints={{
                  top: -200,
                  left: -300,
                  right: 300,
                  bottom: 200,
                }}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 1.1, zIndex: 20 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-2 rounded shadow-lg w-48 h-60 md:w-56 md:h-72">
                  <div className="w-full h-4/5 overflow-hidden rounded-t">
                    <img 
                      src={photo.src} 
                      alt={`Memory ${photo.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 text-center text-rose-800 font-serif">
                    Memory {photo.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <motion.div 
          className="envelope"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ 
            rotateX: isOpen ? 180 : 0,
            y: isOpen ? -50 : 0
          }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
        >
          <div className="front">
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-t-rose-200 border-r-[320px] border-r-transparent rounded-tl-lg" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center h-full">
              <Mail className="w-16 h-16 text-rose-600" />
              <span className="mt-4 text-rose-700 font-serif text-lg">Click to open</span>
            </div>
          </div>
          <div className="letter">
            <div className="p-6 h-full overflow-y-auto">
              <h3 className="font-serif text-2xl text-rose-900 mb-4">Dear Amma,</h3>
              <div className="space-y-4 text-rose-800">
                <p>On this special day, I want to take a moment to tell you how much you mean to me.</p>
                <p>Your love, strength, and wisdom have been my guiding light through every challenge and celebration.</p>
                <p>Thank you for being my rock, my inspiration, and my biggest supporter.</p>
                <p>May this year bring you as much joy and happiness as you've brought into my life.</p>
                <p>With all my love,</p>
                <p className="font-serif text-xl mt-6">Vikram</p>
              </div>
            </div>
          </div>
        </motion.div>
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

const Footer = () => (
  <footer className="py-12 text-center text-rose-700">
    <p className="flex items-center justify-center gap-2">
      Made with <Heart className="w-5 h-5 fill-rose-500 text-rose-500" /> by M S Vikram
    </p>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden">
      <AuroraBackground />
      <Hero />
      <HaikuSection />
      <MemoryGallery />
      <LoveLetter />
      <CakeSection />
      <Footer />
    </div>
  );
};

export default App;
