import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import Confetti from 'react-confetti';

// Components
const AuroraBackground = () => (
  <div className="fixed inset-0 -z-10 aurora-bg" />
);

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  
  return (
    <section className="relative py-20 md:py-32 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0.7, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10"
      >
        <div className="relative inline-block">
          <motion.div 
            className="absolute -inset-4 bg-rose-100 rounded-full opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-rose-900 mb-4 relative z-10"
          >
            Happy Birthday <span className="block md:inline">Amma</span> <br className="md:hidden" />
            <motion.span 
              className="text-rose-700 inline-block"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              Simithaa! 🎉
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-rose-800 text-xl md:text-2xl mt-6 max-w-2xl font-medium"
        >
          A celebration of your love, strength, and grace
        </motion.p>
        
        <motion.div 
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-medium shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Send Love
          </motion.button>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={200}
            onConfettiComplete={() => setShowConfetti(false)}
            className="w-full h-full"
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const HaikuSection = () => {
  const lines = [
    { text: "Dice roll, time slips past", emoji: "🎲" },
    { text: "Years crest and break", emoji: "🌊" },
    { text: "like the immutable tide", emoji: "⏳" },
    { text: "Here for all your dawn", emoji: "🌅" },
    { text: "Happy Birthday Amma!", emoji: "🎂" }
  ];

  // Floating decorative elements
  const floatingElements = ["✨", "🌸", "🎈", "🎁", "💝", "🎊"];

  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center p-6 overflow-hidden">
      {/* Floating decorative elements */}
      {[...Array(12)].map((_, i) => {
        const element = floatingElements[Math.floor(Math.random() * floatingElements.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {element}
          </motion.div>
        );
      })}

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full border-2 border-rose-100 transform transition-all hover:shadow-xl hover:scale-[1.02]"
      >
        <motion.div 
          className="absolute -top-5 -right-5 bg-gradient-to-r from-pink-500 to-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        >
          ✨
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-4 -left-4 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          ⭐
        </motion.div>

        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-rose-900 mb-2">For My Dearest Amma</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {lines.map(({text, emoji}, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center gap-4 group"
              >
                <motion.span 
                  className="text-3xl transform transition-transform group-hover:scale-125 group-hover:rotate-12"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: 'reverse',
                    delay: i * 0.5
                  }}
                >
                  {emoji}
                </motion.span>
                <motion.p 
                  className={`font-serif text-xl md:text-2xl ${
                    i === lines.length - 1 
                      ? 'text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600' 
                      : 'text-rose-900'
                  }`}
                >
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  // Pre-defined messy positions so they look scattered naturally
  const scatterPositions = [
    { top: "10%", left: "20%", rotate: "-6deg" },
    { top: "30%", left: "60%", rotate: "8deg" },
    { top: "50%", left: "15%", rotate: "-3deg" },
    { top: "15%", left: "70%", rotate: "12deg" },
    { top: "60%", left: "50%", rotate: "-10deg" },
  ];

  // REPLACE THESE PATHS WITH YOUR REAL PHOTOS LATER
  const photos = [
    "/images/image1.jpeg", 
    "/images/image2.jpeg", 
    "/images/image3.jpeg", 
    "/images/image4.jpeg",
    "/images/image1.jpeg"
  ];

  return (
    <section className="relative h-[800px] w-full bg-[#FDFBF7] overflow-hidden">
      <h2 className="text-center font-serif text-4xl text-[#2A2A2A] pt-20 mb-8">Our Memories</h2>
      <p className="text-center text-gray-400 mb-12">(Drag them around!)</p>
      
      <div className="relative w-full h-full max-w-4xl mx-auto">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            whileHover={{ scale: 1.1, zIndex: 50, rotate: 0, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 1.15, cursor: "grabbing" }}
            style={{ 
                position: 'absolute', 
                top: scatterPositions[index]?.top || `${index*10}%`, 
                left: scatterPositions[index]?.left || `${index*5}%`,
                rotate: scatterPositions[index]?.rotate || '0deg'
            }}
            className="w-48 h-64 bg-white p-3 pb-8 shadow-xl rounded-sm cursor-grab transition-all border-[6px] border-white hover:shadow-2xl"
          >
            {/* Photo placeholder */}
            <div className="w-full h-full bg-gray-100 overflow-hidden">
                <img 
                  src={src} 
                  alt="Memory" 
                  className="w-full h-full object-cover pointer-events-none" 
                  onError={(e) => {
                    e.target.style.display='none'; 
                    e.target.parentNode.classList.add('bg-rose-100')
                  }}
                />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 flex justify-center items-center bg-[#FDFBF7] perspective-1000">
      <div className="relative w-[320px] h-[220px] cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
        
        {/* The Letter inside (slides out) */}
        <motion.div
          initial={false}
          animate={isOpen ? { y: -120, zIndex: 0 } : { y: 0, zIndex: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-4 left-4 right-4 bottom-4 bg-[#FDFBF7] border-2 border-[#D4AF37]/30 p-6 shadow-sm flex flex-col justify-center items-center text-center"
        >
          <p className="font-serif text-[#8B4513] text-lg italic">
            "Amma, you are my greatest inspiration. Thank you for being my dawn, every single day."
          </p>
          <p className="font-sans text-sm text-rose-400 mt-4">- Vikram</p>
        </motion.div>

        {/* Envelope Body (Front) */}
        <div className="absolute inset-0 bg-rose-200 rounded-b-xl shadow-xl z-10 border-t-4 border-white overflow-hidden flex items-end justify-center pb-4">
             {!isOpen && <p className="text-rose-800 font-serif tracking-widest">Click to open</p>}
        </div>
        
        {/* Envelope Flap (Top) - Animates open */}
        <motion.div
            initial={false}
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-rose-300 z-20 rounded-t-xl shadow-md border-b-4 border-white flex items-center justify-center"
        >
            <Mail className="text-white drop-shadow-md" size={32} />
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
    <section className="py-20 md:py-32 bg-[#D3E0DC]/20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
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
      <Gallery />
      <Letter />
      <CakeSection />
      <Footer />
    </div>
  );
};

export default App;
