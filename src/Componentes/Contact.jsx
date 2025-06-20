import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            ¿Listo para pedir?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contáctanos directamente y disfruta de nuestros productos
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Tarjeta principal de WhatsApp */}
          <motion.div 
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 shadow-xl mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center bg-green-100 text-green-700 rounded-full p-4 mb-4">
                <FaWhatsapp className="text-3xl" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">
                Pedido por WhatsApp
              </h3>
              <p className="text-gray-700">
                Escríbenos directamente para realizar tu pedido o hacer cualquier consulta
              </p>
            </div>

            <motion.a
              href="https://wa.me/573202781981"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full transition text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="mr-3 text-xl" />
              Enviar mensaje por WhatsApp
            </motion.a>
          </motion.div>

          {/* Información esencial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-amber-50 rounded-xl p-6 border border-amber-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center mb-3">
                <FaPhone className="text-primary text-xl mr-3" />
                <h4 className="font-bold text-dark">Teléfono Directo</h4>
              </div>
              <a 
                href="tel:+573202781981" 
                className="text-lg text-gray-700 hover:text-primary transition-colors block"
              >
                320 2781981
              </a>
            </motion.div>

            <motion.div 
              className="bg-amber-50 rounded-xl p-6 border border-amber-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center mb-3">
                <FaClock className="text-primary text-xl mr-3" />
                <h4 className="font-bold text-dark">Horario de Atención</h4>
              </div>
              <p className="text-gray-700">
                Lunes a Sábado: 8:00 AM - 8:00 PM
              </p>
              <p className="text-gray-700">
                Domingo: Cerrado
              </p>
            </motion.div>

            <motion.div 
              className="md:col-span-2 bg-amber-50 rounded-xl p-6 border border-amber-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center mb-3">
                <FaMapMarkerAlt className="text-primary text-xl mr-3" />
                <h4 className="font-bold text-dark">Ubicación</h4>
              </div>
              <p className="text-gray-700 mb-4">Cra. 40 #37-15 Sur, Puente Aranda, Bogotá</p>

              <iframe
                title="Ubicación en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.897437106232!2d-74.106453125!3d4.603539700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a3e72ccf11%3A0x28f1df6b6fc4045b!2sCra.%2040%20%2337-15%20Sur%2C%20Puente%20Aranda%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1718847665329!5m2!1ses!2sco"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border-2 border-amber-200" // Aquí quitamos el border
              />
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
