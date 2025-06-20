import { FaQuoteLeft, FaLeaf, FaHeart, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Story = () => {
  const valores = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Tradición",
      desc: "Recetas transmitidas por generaciones",
      color: "from-green-100 to-green-50",
      border: "border-green-200"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Amor",
      desc: "El ingrediente principal en cada preparación",
      color: "from-red-100 to-red-50",
      border: "border-red-200"
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Calidad",
      desc: "Ingredientes frescos y de primera",
      color: "from-yellow-100 to-yellow-50",
      border: "border-yellow-200"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Nuestra <span className="text-secondary">Historia</span>
          </h2>
          <p className="text-lightText max-w-2xl mx-auto">
            Conoce la tradición y pasión detrás de cada producto
          </p>
        </div>
        
        {/* Historia */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg relative border border-accent/30">
            <FaQuoteLeft className="text-primary/30 text-4xl absolute top-[0.3rem] left-[0.4rem]" />
            
            <p className="text-lightText italic mb-6 relative z-10 font-medium">
              "Los envueltos de la abuela Carmen surge en 2011, después de que perdí mi empleo y con una familia por sacar adelante..."
            </p>
            
            <p className="text-lightText mb-4">
              Mis papás son campesinos, durante su juventud se dedicaron al campo y a producir los alimentos que a diario tenemos en nuestra mesa, tienen un gran conocimiento de los cultivos y sobretodo de la mazorca.
            </p>
            
            <p className="text-lightText">
              Mi mamá hace los mejores envueltos de la ciudad y decidió enseñarme el arte de cocinar para los demás y hacerlo con amor, el ingrediente estrella de todas las preparaciones. Aprendí cuidadosamente cada detalle del proceso para hacer unos envueltos deliciosos, y el primer día logramos vender 85 unidades, fue una gran bendición para nuestra familia.
            </p>
          </div>
        </div>
        
        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary/10 rounded-2xl p-8 border-2 border-primary/30"
          >
            <div className="flex items-center mb-4">
              <FaHeart className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-serif font-bold text-secondary">Misión</h3>
            </div>
            <p className="text-lightText">
              Buscamos que la experiencia del cliente con nuestro producto lo lleve a rememorar sensaciones de infancia, sabores que te recuerden a tu abuela, a su comida y como no invocar esa tradición de nuestros ancestros que cultivaban el maíz y lo llevaban transformado a la mesa con gusto para compartir en familia.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-secondary/10 rounded-2xl p-8 border-2 border-secondary/30"
          >
            <div className="flex items-center mb-4">
              <FaStar className="text-secondary text-2xl mr-3" />
              <h3 className="text-xl font-serif font-bold text-secondary">Visión</h3>
            </div>
            <p className="text-lightText">
              Envueltos de la abuela Carmen en un futuro busca tener una conexión especial con sus clientes, queriendo ser una opción gastronómica de preferencia, no solo por la calidad de la comida, sino también por la calidez del servicio y el impacto positivo que genera en nuestros vecinos y comunidad en general.
            </p>
          </motion.div>
        </div>
        
        {/* Valores - Nueva sección con tarjetas */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-secondary">
              Nuestros Valores
            </h3>
            <p className="text-lightText mt-2">Lo que nos define y guía cada día</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 15 
                }}
                className={`bg-gradient-to-br ${valor.color} rounded-2xl p-6 border ${valor.border} shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-inner">
                    {valor.icon}
                  </div>
                </div>
                <h4 className="text-xl font-serif font-bold text-center text-secondary mb-3">
                  {valor.title}
                </h4>
                <p className="text-lightText text-center">
                  {valor.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;