import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa tus imágenes como módulos para React
import ArepaChoclo from '../assets/choclo.png';
import ArepaChocloQueso from '../assets/choclo_queso.jpeg';
import EnvueltoTradicional from '../assets/envuelto.jpeg';

const Products = () => {
  const arepasPresentations = [
    'Con queso (una o dos tajadas)',
    'Queso y Bocadillo',
    'Jamón y Queso',
    'Sola',
  ];

  // Ahora los arrays usan variables de importación
  const arepasImages = [ArepaChoclo, ArepaChocloQueso];
  const envueltosImages = [EnvueltoTradicional];

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const renderCarousel = (images, alt) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
      className="mb-6 overflow-hidden rounded-xl shadow-lg"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        loop
        className="rounded-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={src}
              alt={`${alt} ${index + 1}`}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );

  return (
    <motion.section 
      id="productos" 
      className="py-20 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros <span className="text-primary">Productos</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Elaborados con 100% de mazorca tierna, ingredientes frescos y recetas tradicionales.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Arepa de Choclo */}
          <motion.div 
            className="bg-light rounded-2xl p-8 shadow-lg border-2 border-amber-100"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="flex items-start mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div 
                className="bg-amber-100 p-3 rounded-lg mr-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-3xl text-amber-700">🌽</span>
              </motion.div>
              <div>
                <motion.h3 
                  className="text-2xl font-serif font-bold text-dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Arepa de Choclo
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Elaborada con 100% de Mazorca tierna
                </motion.p>
              </div>
            </motion.div>

            {/* Galería de imágenes */}
            {renderCarousel(arepasImages, 'Arepa de choclo')}

            <motion.h4 
              className="font-bold text-lg text-dark mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Presentaciones:
            </motion.h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {arepasPresentations.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start bg-amber-50 p-3 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="https://wa.me/573202781981"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#16a34a",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Pedir Arepas
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Envueltos */}
          <motion.div 
            className="bg-light rounded-2xl p-8 shadow-lg border-2 border-amber-100"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div 
              className="flex items-start mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="bg-amber-100 p-3 rounded-lg mr-4"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-3xl text-amber-700">🥬</span>
              </motion.div>
              <div>
                <motion.h3 
                  className="text-2xl font-serif font-bold text-dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Envuelto Tradicional
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Elaborados con 100% de Mazorca tierna
                </motion.p>
              </div>
            </motion.div>

            {/* Galería de imágenes */}
            {renderCarousel(envueltosImages, 'Envuelto tradicional')}

            <motion.p 
              className="text-gray-700 mb-6 bg-amber-50 p-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Contienen queso y uvas pasas, envueltos en hoja de maíz con la receta tradicional.
            </motion.p>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/573202781981"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#16a34a",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Pedir Envueltos
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;