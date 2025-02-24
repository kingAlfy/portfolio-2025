import { useState } from "react";

const IdiomButton = () => {
    const [idiom, setIdiom] = useState("ES");

    return (
        <button className="px-4 py-2 hover:bg-gray-100">
            {idiom === "ES" 
            ? <span className="font-black">ES</span>
            : <span className="font-normal">ES</span>} 
            / 
            {idiom === "EN" 
            ? <span className="font-black">EN</span>
            : <span className="font-normal">EN</span>}
        </button>
    );
};

export default IdiomButton;