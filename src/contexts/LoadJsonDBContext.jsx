import { createContext, useContext, useEffect, useState } from "react";
import { useClientLanguage } from "./ClientLanguageContext";
const LoadJsonDBContext = createContext();

export const LoadJsonDBProvider = ({ children }) => {
    
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { language } = useClientLanguage();
    
    useEffect(() => {
        
        if (!language) return;
        
        const loadResumeData = async () => {
            console.log("loadResumeData language", language);
            setLoading(true);
            try {
                const data = await import(`../utils/resume${language}.json`);
                console.log(data.default);
                setResumeData(data.default);
            } catch (error) {
                console.error('Error cargando datos del CV:', error);
            } finally {
                setLoading(false);
            }
        };
        
        loadResumeData();
    }, [language]);

    const value = {
        resumeData,
        loading
    };

    return (
        <LoadJsonDBContext.Provider value={value}>
            {children}
        </LoadJsonDBContext.Provider>
    );
}   

export const useLoadJsonDB = () => {
    const context = useContext(LoadJsonDBContext);
    if (!context) {
        throw new Error('useLoadJsonDB debe usarse dentro de un LoadJsonDBProvider');
    }
    return context;
};