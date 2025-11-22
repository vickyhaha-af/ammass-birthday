import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'

// Components
const AuroraBackground = () => (
  <div className="fixed inset-0 -z-10 aurora-bg" />
)

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
)

const HaikuSection = () => {
  const lines = [
    "Dice roll, time slips past",
    "Years crest and break",
    "like the immutable tide",
    "Here for all your dawn"
  ]

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
  )
}

const MemoryGallery = () => {
  const [photos] = useState(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 60 - 30,
      y: Math.random() * 40 - 20,
      rotate: Math.random() * 20 - 10,
      src: `/images/image${(i % 4) + 1}.jpeg`
    }))
  )

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
  )
}

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false)

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
  )
}

const Footer = () => (
  <footer className="py-12 text-center text-rose-700">
    <p className="flex items-center justify-center gap-2">
      Made with <Heart className="w-5 h-5 fill-rose-500 text-rose-500" /> by M S Vikram
    </p>
  </footer>
)

// Main App Component
export default function App() {
  return (
    <div className="relative">
      <AuroraBackground />
      <Hero />
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
    { id: 1, src: "/images/image1.jpeg", alt: "Beautiful memory 1", rotation: "rotate-2" },
    { id: 2, src: "/images/image2.jpeg", alt: "Beautiful memory 2", rotation: "-rotate-1" },
    { id: 3, src: "/images/image3.jpeg", alt: "Beautiful memory 3", rotation: "rotate-3" },
    { id: 4, src: "/images/image4.jpeg", alt: "Beautiful memory 4", rotation: "-rotate-2" },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-serif text-4xl text-[#2A2A2A] mb-16"
      >
        Cherished Memories
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.5 }}
            className={`bg-white p-4 shadow-lg rounded-sm transform ${photo.rotation} hover:rotate-0 transition-all duration-300`}
          >
            <div className="w-full h-64 overflow-hidden mb-4">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="text-center font-sans text-gray-600 text-sm">
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
