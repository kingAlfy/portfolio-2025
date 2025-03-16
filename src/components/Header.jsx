import { useState, useEffect } from 'react';
import DownloadIcon from '../assets/icons/DownloadIcon.svg';
import Button from './ui/Button';
import LanguageButton from './ui/LanguageButton';
import NavElement from './ui/NavElement';
import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { resumeData, loading } = useLoadJsonDB();

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-6 py-4 ">
      {/* Versión Desktop */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          {resumeData.webSiteInfo.brandingTitle}
        </a>

        {/* Navegación */}
        <nav className="space-x-6 flex items-center">
          {resumeData.webSiteInfo.navOptions.map((option) => (
            <NavElement key={option.id} text={option.text} href={option.href} />
          ))}
        </nav>

        {/* Botones */}
        <div className="flex space-x-4">
          <Button>
              <div className="flex items-center justify-center gap-2">
                {resumeData.webSiteInfo.downloadButton.text}
                <img src={DownloadIcon} alt="Download icon to download the resume" className="w-4 h-4" />
              </div>
          </Button>
          <LanguageButton />
        </div>
      </div>

      {/* Versión Móvil */}
      <div className="lg:hidden flex justify-between items-center">
        <div className="text-xl font-bold">
          {resumeData.webSiteInfo.brandingTitle}
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
        <div className="lg:hidden container mx-auto px-6 py-4 absolute top-16 left-0 right-0 bg-primary shadow-md py-4">
          <nav className="flex flex-col space-y-4 px-6">
            {resumeData.webSiteInfo.navOptions.map((option) => (
              <NavElement key={option.id} text={option.text} href={option.href} />
            ))}
          </nav>
          <div className="flex flex-col space-y-2 px-6 mt-4">
            <Button>
              <div className="flex items-center justify-center gap-2">
                {resumeData.webSiteInfo.downloadButton.text}
                <img src={DownloadIcon} alt="Download icon to download the resume" className="w-4 h-4" />
              </div>
            </Button>
            <LanguageButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
