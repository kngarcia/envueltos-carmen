import { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with lift effect */}
                {/* Logo with lift effect */}
        <a
          href="#inicio"
          className="flex items-center bg-amber-50 border-2 border-amber-200 p-3 rounded-lg transform transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="text-2xl">🌽</span>
          <span className="ml-2 text-xl md:text-2xl font-serif font-bold text-amber-800">
            Envueltos Carmen
          </span>
        </a>

        {/* Desktop nav with underline, color change and scale on hover */}
        <nav className="hidden md:flex space-x-8">
          {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={
                `relative font-medium text-gray-700 transition-colors duration-200 ease-in-out
                 transform transition-transform hover:scale-105
                 before:content-[''] before:absolute before:-bottom-1 before:left-0
                 before:w-0 before:h-0.5 before:bg-primary before:transition-[width]
                 hover:text-primary hover:before:w-full`
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions: phone + mobile menu */}
        <div className="flex items-center space-x-4">
          {/* Phone link */}
          <a
            href="tel:+573202781981"
            className="hidden sm:flex items-center text-gray-700 hover:text-primary transition-colors duration-200"
          >
            <FaPhone className="mr-2" />
            <span>320 2781981</span>
          </a>

          {/* Mobile menu toggle with rotation on hover */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transform transition-transform duration-300 hover:rotate-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer with hover scale on items */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative font-medium text-gray-700 hover:text-primary transition-colors duration-200 ease-in-out transform transition-transform hover:scale-105 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-[width] hover:before:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+573202781981"
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone className="mr-2" />
                <span>320 2781981</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
