import { FaUtensils } from 'react-icons/fa';
import logoCarmen from '../assets/logo.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-16 sm:pt-20 md:pt-24 pb-20 overflow-hidden">
      {/* Fondo + overlay */}
      <div
        className={
          `absolute inset-0
           bg-[url('./assets/Mural.jpeg')] bg-cover bg-center
           before:content-[''] before:absolute before:inset-0 before:bg-black/40`
        }
      />

      {/* Contenido */}
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          {/* Logo with lift effect */}
          <div className="w-27 h-27 mb-4 rounded-full bg-white flex items-center justify-center shadow-md">
            <img 
              src={logoCarmen} 
              alt="Logo Envueltos Carmen" 
              className="w-30 h-30 object-contain"
            />
          </div>
          {/* Tagline */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-white rounded-xl mb-4 drop-shadow">
            <span className="text-xl mr-2">🇨🇴</span>
            <FaUtensils className="mr-2 text-white/80" />
            <span className="font-medium">¡Tradición colombiana!</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-6">
            Los Envueltos de la <span className="text-amber-500">abuela</span> Carmen
          </h1>

          {/* Descripción */}
          <p className="text-xl text-white/90 drop-shadow mb-8 max-w-lg">
            Hechos con amor y la alegría de recordar la infancia, porque hacemos de lo típico algo extraordinario.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#productos"
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition"
            >
              Ver Productos
            </a>
            <a
              href="https://wa.me/573202781981"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500/10 border-2 border-green-500 text-green-500 font-bold py-3 px-8 rounded-full transition-colors hover:bg-green-500/20"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
