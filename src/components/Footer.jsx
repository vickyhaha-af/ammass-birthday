import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-1 text-gray-600"
        >
          <span>Made with</span>
          <motion.span 
            className="text-red-500"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            <Heart size={18} className="inline-block" fill="currentColor" />
          </motion.span>
          <span>by M S Vikram</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
