import useClientLanguage from "../../hooks/useClientLanguage";

const LanguageButton = () => {

    const { changeLanguage, language } = useClientLanguage();


    return (
        <button className="px-4 py-2 h-[40px]" onClick={() => changeLanguage()}>
            <div className="hover:text-lg transition-all">
                {language === "ES" 
                ? <span className="font-black">ES</span>
                : <span className="font-normal">ES</span>} 
                / 
                {language === "EN" 
                ? <span className="font-black">EN</span>
                : <span className="font-normal">EN</span>}
            </div>
        </button>
    );  
};

export default LanguageButton;