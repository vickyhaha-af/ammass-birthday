import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Confetti to avoid SSR issues
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
});

const DigitalCake = () => {
  const [blown, setBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleBlowCandles = () => {
    setBlown(true);
    setShowConfetti(true);
    
    // Show message after a short delay
    setTimeout(() => setShowMessage(true), 1000);
    
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {showConfetti && (
        <div className="confetti-container">
          <Confetti 
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={500}
            gravity={0.2}
          />
        </div>
      )}
      
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Make a Wish!
          </h2>
          
          <div className="relative w-64 h-64 mx-auto mb-8">
            {/* Cake base */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-3xl">
              <div className="absolute -top-2 left-0 w-full h-4 bg-amber-400 rounded-t-3xl"></div>
              <div className="absolute -top-4 left-4 w-40 h-2 bg-amber-500 rounded-full"></div>
            </div>
            
            {/* Cake decoration */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-52 h  -4 bg-pink-200 rounded-full"></div>
            
            {/* Candles */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative">
                  <div className="w-1 h-12 bg-gradient-to-b from-gray-200 to-gray-300 mx-auto"></div>
                  <div 
                    className={`candle-flame absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-8 rounded-full ${blown ? 'opacity-0' : 'animate-pulse'}`}
                    style={{
                      background: 'radial-gradient(circle, #FFD700 0%, #FFA500 70%, #FF4500 100%)',
                      filter: 'blur(1px)',
                    }}
                  ></div>
                </div>
              ))}
              <div className="text-2xl font-bold text-amber-600">46</div>
              {[...Array(4)].map((_, i) => (
                <div key={i + 4} className="relative">
                  <div className="w-1 h-12 bg-gradient-to-b from-gray-200 to-gray-300 mx-auto"></div>
                  <div 
                    className={`candle-flame absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-8 rounded-full ${blown ? 'opacity-0' : 'animate-pulse'}`}
                    style={{
                      background: 'radial-gradient(circle, #FFD700 0%, #FFA500 70%, #FF4500 100%)',
                      filter: 'blur(1px)',
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          <AnimatePresence>
            {!blown ? (
              <motion.button
                onClick={handleBlowCandles}
                className="px-8 py-3 bg-gradient-to-r from-gold to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Blow Out the Candles
              </motion.button>
            ) : showMessage ? (
              <motion.div 
                className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xl font-medium">🎉 Happy Birthday, Simithaa! 🎂</p>
                <p className="mt-2">May this year be your best one yet!</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalCake;
