import { createContext, useContext, useEffect, useState } from "react";

const ClientLanguageContext = createContext();

export const ClientLanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('ES');

  useEffect(() => {
      const getInitialLanguage = () => {

          // Try to get the language from the cookie
          const cookieLanguage = document.cookie
              .split('; ')
              .find(row => row.startsWith('king-language='))
              ?.split('=')[1];
  
          if (!cookieLanguage) {
              // If there is no cookie, get the language from the browser
              const browserLang = navigator.language.substring(0, 2).toUpperCase();
              const validLangs = ['ES', 'EN'];
              const defaultLang = validLangs.includes(browserLang) ? browserLang : 'ES';
  
              // Set the cookie with the detected language
              document.cookie = `king-language=${defaultLang}; path=/; max-age=31536000`; // 1 year
              setLanguage(defaultLang);
          }
  
          if (cookieLanguage) {
              setLanguage(cookieLanguage);
          }
      }

      getInitialLanguage();
      
  }, []);

  const setCookieLanguage = (language) => {
    document.cookie = `king-language=${language}; path=/; max-age=31536000`; // 1 year
  };

  const changeLanguage = () => {
    setLanguage(language === "ES" ? "EN" : "ES");
    setCookieLanguage(language === "ES" ? "EN" : "ES");
  };

  const value = {
    language,
    changeLanguage
  };

  return (
    <ClientLanguageContext.Provider value={value}>
      {children}
    </ClientLanguageContext.Provider>
  );
};
  
export const useClientLanguage = () => {
  const context = useContext(ClientLanguageContext);
  if (!context) {
    throw new Error('useClientLanguage debe usarse dentro de un ClientLanguageProvider');
  }
  return context;
};