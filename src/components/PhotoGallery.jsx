import { motion } from 'framer-motion';

// Photo gallery data with 4 images
const photos = [
  { 
    id: 1, 
    image: "/images/photo1.jpg",
    rotation: -2, 
    delay: 0.1 
  },
  { 
    id: 2, 
    image: "/images/photo2.jpg",
    rotation: 3, 
    delay: 0.2 
  },
  { 
    id: 3, 
    image: "/images/photo3.jpg",
    rotation: -1, 
    delay: 0.3 
  },
  { 
    id: 4, 
    image: "/images/photo4.jpg",
    rotation: 2, 
    delay: 0.2 
  }
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 bg-sage/10">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Simithaa's Journey
        </motion.h2>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="polaroid relative break-inside-avoid"
              initial={{ opacity: 0, y: 20, scale: 0.95, rotate: photo.rotation }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            zIndex: 20,
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
          }}
          transition={{ 
            delay: photo.delay * 0.7,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
            >
              <motion.div 
                className="w-full aspect-square rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img 
                  src={photo.image} 
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x800?text=Photo+Not+Found';
                  }}
                />
              </motion.div>
              <p className="mt-2 text-sm text-center text-gray-600">
                Memory #{photo.id}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
