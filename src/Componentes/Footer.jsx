import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#FAF3E0] text-dark pt-16 pb-8 border-t border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Logo y descripción */}
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="bg-amber-100 border-2 border-amber-300 rounded-xl w-16 h-16 flex items-center justify-center mb-4"
          >
            <span className="text-2xl text-amber-700">🌽</span>
          </motion.div>
          <h3 className="text-2xl font-serif font-bold mb-3">Envueltos de la abuela Carmen</h3>
          <p className="text-gray-600 mb-4 max-w-xl">
            Hechos con amor y la alegría de recordar la infancia, porque hacemos de lo típico algo extraordinario.
          </p>
          <div className="flex space-x-6 justify-center">
            {[
              { icon: <FaFacebook />, url: '#', color: 'text-blue-600' },
              { icon: <FaInstagram />, url: '#', color: 'text-pink-500' },
              { icon: <FaWhatsapp />, url: 'https://wa.me/573202781981', color: 'text-green-500' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-2xl hover:opacity-75`}
                whileHover={{ y: -5 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          className="pt-8 border-t border-amber-300 text-center text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Envueltos de la abuela Carmen. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con ❤️ por Kevin García</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
