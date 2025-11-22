import { motion } from 'framer-motion';
import { Dice5 } from 'lucide-react';

const Haiku = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative dice icon */}
          <motion.div
            className="absolute top-6 right-6 text-gold"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.8 }}
          >
            <Dice5 size={32} />
          </motion.div>

          <motion.div 
            className="text-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-italic text-gray-700 mb-2">Immutable Tide</h2>
              <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
            </motion.div>
            
            <motion.p variants={item} className="text-xl md:text-2xl italic text-gray-700 mb-6">
              "Dice roll, time slips past
            </motion.p>
            <motion.p variants={item} className="text-xl md:text-2xl italic text-gray-700 mb-6">
              Years crest and break
            </motion.p>
            <motion.p variants={item} className="text-xl md:text-2xl italic text-gray-700 mb-6">
              like the immutable tide
            </motion.p>
            <motion.p variants={item} className="text-xl md:text-2xl italic text-gray-700 mb-2">
              Here for all your dawn"
            </motion.p>
          </motion.div>

          {/* Animated wave at the bottom */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full overflow-hidden"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 1 }}
          >
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="w-full h-12 md:h-16"
            >
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-current text-sage opacity-40"
              ></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Haiku;
