import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-6 py-4 bg-white shadow-md">
      {/* Versión Desktop */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          ALFONSORAVELOGIL.COM
        </a>

        {/* Navegación */}
        <nav className="space-x-6">
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#about" className="hover:text-blue-600">About Me</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Botones */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
            ES/EN
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download CV
          </button>
        </div>
      </div>

      {/* Versión Móvil */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-xl font-bold">
          ALFONSORAVELOGIL.COM
        </div>
        <button 
          onClick={toggleMenu}
          className="p-2"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4">
          <nav className="flex flex-col space-y-4 px-6">
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#about" className="hover:text-blue-600">About Me</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex flex-col space-y-2 px-6 mt-4">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              ES/EN
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Download CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
