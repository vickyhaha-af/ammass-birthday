import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated blob background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="blob"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-800">
            Happy 46th Birthday,
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-8">
            Simithaa
          </h2>
          <motion.div 
            className="mt-12"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <svg 
              className="w-12 h-12 mx-auto text-gold" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
