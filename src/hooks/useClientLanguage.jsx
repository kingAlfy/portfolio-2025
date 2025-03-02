import { useEffect, useState } from "react";

const useClientLanguage = () => {

    const [language, setLanguage] = useState(null);

    const getInitialLanguage = () => {
        useEffect(() => {
    
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
    
        }, []);
    
    }

    const setCookieLanguage = (language) => {
        document.cookie = `king-language=${language}; path=/; max-age=31536000`; // 1 year
    };

    /**
     * Change idiom in the cookie and in the state
     */
    const changeLanguage = () => {
        setLanguage(language === "ES" ? "EN" : "ES");
        setCookieLanguage(language === "ES" ? "EN" : "ES");
    };
    
    // Get the initial language before the component is mounted
    getInitialLanguage();

    return { getInitialLanguage, setCookieLanguage, changeLanguage, language };

};

export default useClientLanguage;