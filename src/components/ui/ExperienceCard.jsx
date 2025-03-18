import React, { useState, useRef, useEffect } from 'react';

const ExperienceCard = ({ 
  image, 
  position, 
  company, 
  startDate, 
  endDate, 
  description,
  style,
  seeLess,
  seeMore
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);
  
  useEffect(() => {
    // Comprobar si el texto es lo suficientemente largo para necesitar el botón
    if (textRef.current) {
      const isOverflowing = textRef.current.scrollHeight > 80; // altura máxima inicial
      setShowButton(isOverflowing);
    }
  }, [description]);

  return (
    <article className={style === "special" ? "rounded-lg shadow-md p-6 mb-6 bg-special" : "border-terciary border-1 rounded-lg p-6 mb-6"}>
      <header className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          {image && (
            <div className="w-12 h-12 rounded-sm overflow-hidden flex-shrink-0">
              <img 
                src={image} 
                alt={`${company} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold">{position}</h3>
            <p className="text-primary">{company}</p>
          </div>
        </div>
        <div className="text-sm text-quaternary">
          <span>{startDate}</span>
          {endDate && (
            <>
              <span> - </span>
              <span>{endDate}</span>
            </>
          )}
          {!endDate && <span> - Presente</span>}
        </div>
      </header>
      <div className="mt-2">
        <div 
          ref={textRef}
          className={`text-quaternary overflow-hidden transition-all duration-300 ${isExpanded ? '' : 'max-h-20'}`}
        >
          <p>{description}</p>
        </div>
        
        {showButton && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-primary w-full text-center text-sm mt-2 hover:underline focus:outline-none"
          >
            {isExpanded ? seeLess : seeMore}
          </button>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard; 