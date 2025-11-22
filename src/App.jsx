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
  
  // Personalized messages that cycle through
  const messages = [
    "To the world's best Amma, from your loving son",
    "Your love is my greatest blessing",
    "Every day with you is a gift",
    "Your strength inspires me always"
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  // Cycle through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Animated floating elements */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const elements = ['🌸', '✨', '💖', '🎀', '🎈', '🎁', '🎉'];
        const element = elements[Math.floor(Math.random() * elements.length)];
        
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${size}px`,
              opacity: 0.7,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: 'loop',
              delay: delay,
              ease: "linear"
            }}
          >
            {element}
          </motion.div>
        );
      })}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Animated background circle */}
        <motion.div 
          className="absolute -z-10 w-[150%] h-[150%] md:w-[120%] md:h-[120%] rounded-full bg-gradient-to-r from-rose-100 to-pink-100 opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative z-20"
        >
          {/* Main heading */}
          <motion.div 
            className="inline-block relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-900 mb-6 leading-tight">
              Happy Birthday
              <motion.span 
                className="block font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 10px rgba(236, 72, 153, 0.3)',
                    '0 0 20px rgba(236, 72, 153, 0.5)',
                    '0 0 10px rgba(236, 72, 153, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                Amma Simithaa! �
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Animated message */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-pink-700 mt-6 max-w-2xl mx-auto font-medium italic"
            >
              {messages[currentMessage]}
            </motion.p>
          </AnimatePresence>
          
          {/* CTA Buttons */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium text-lg shadow-lg flex items-center gap-3 hover:shadow-xl transition-all"
            >
              <Sparkles className="w-6 h-6" />
              Send Love & Wishes
            </motion.button>
            
            <motion.a
              href="#memories"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(251, 207, 232, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 bg-white/80 backdrop-blur-sm text-rose-600 rounded-full font-medium text-lg border-2 border-rose-200 flex items-center gap-2 hover:bg-rose-50 transition-colors"
            >
              View Memories
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-6xl opacity-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ❤️
          </motion.div>
        </motion.div>
      </div>
      
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={300}
            onConfettiComplete={() => setShowConfetti(false)}
            className="w-full h-full"
            colors={['#FF9DB5', '#FFC2D1', '#F8BBD0', '#F48FB1', '#F06292']}
          />
        )}
      </AnimatePresence>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-rose-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm mb-1">Scroll Down</span>
        <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
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
  // Pre-defined positions for a more organic look
  const scatterPositions = [
    { top: "15%", left: "15%", rotate: "-8deg", scale: 0.9 },
    { top: "25%", left: "65%", rotate: "5deg", scale: 1.1 },
    { top: "55%", left: "20%", rotate: "-12deg", scale: 1 },
    { top: "20%", left: "70%", rotate: "15deg", scale: 0.95 },
    { top: "60%", left: "55%", rotate: "-5deg", scale: 1.05 },
    { top: "35%", left: "35%", rotate: "8deg", scale: 0.9 },
    { top: "70%", left: "75%", rotate: "-15deg", scale: 1.1 },
  ];

  // Photo data with captions
  const photos = [
    { 
      src: "/images/image1.jpeg",
      caption: "Your beautiful smile lights up our lives",
      date: "2023"
    },
    { 
      src: "/images/image2.jpeg",
      caption: "Our precious moments together",
      date: "2022"
    },
    { 
      src: "/images/image3.jpeg",
      caption: "Your strength inspires me",
      date: "2021"
    },
    { 
      src: "/images/image4.jpeg",
      caption: "Forever grateful for you",
      date: "2020"
    },
    { 
      src: "/images/image1.jpeg",
      caption: "My guiding light",
      date: "2019"
    },
  ];

  // Animated emojis for decoration
  const emojis = ['💖', '✨', '🌸', '🎈', '🎁', '🎉', '💐', '🎊'];

  return (
    <section id="memories" className="relative min-h-screen w-full bg-gradient-to-b from-pink-50 to-rose-50 py-20 overflow-hidden">
      {/* Animated background elements */}
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 30 + 20;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        return (
          <motion.div
            key={`emoji-${i}`}
            className="absolute pointer-events-none opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${size}px`,
              zIndex: 0,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: delay,
              ease: "easeInOut"
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">
            Our Precious Memories
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Drag the photos around and relive our beautiful moments together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <div className="relative w-full min-h-[600px] md:min-h-[800px]">
          {photos.map((photo, index) => {
            const pos = scatterPositions[index % scatterPositions.length];
            
            return (
              <motion.div
                key={`photo-${index}`}
                drag
                dragConstraints={{ 
                  left: -200, 
                  right: 200, 
                  top: -200, 
                  bottom: 200 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 50, 
                  rotate: 0, 
                  boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)'
                }}
                whileTap={{ 
                  scale: 1.1, 
                  cursor: 'grabbing',
                  boxShadow: '0 20px 45px -10px rgba(236, 72, 153, 0.3)'
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 50,
                  rotate: pos.rotate,
                  x: 0
                }}
                animate={{
                  opacity: 1,
                  scale: pos.scale,
                  y: 0,
                  rotate: pos.rotate,
                  x: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }
                }}
                style={{ 
                  position: 'absolute',
                  top: pos.top,
                  left: pos.left,
                  rotate: pos.rotate,
                  zIndex: 10 + index,
                }}
                className="group cursor-grab active:cursor-grabbing"
              >
                <div className="w-48 h-64 md:w-56 md:h-72 bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative w-full h-4/5 overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={`Memory ${index + 1}`} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-gradient-to-br', 'from-pink-100', 'to-rose-100');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium text-sm">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <p className="text-sm text-rose-800 font-medium truncate">{photo.caption}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-rose-400">❤️ {Math.floor(Math.random() * 50) + 10} likes</span>
                      <button className="text-pink-500 hover:text-rose-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Decorative floating hearts */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              className="absolute text-pink-300 text-4xl"
              style={{
                left: `${10 + i * 40}%`,
                top: '90%',
                zIndex: 5,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-rose-800 mb-6">Scroll down for more love and surprises!</p>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full" />
        </motion.div>
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
