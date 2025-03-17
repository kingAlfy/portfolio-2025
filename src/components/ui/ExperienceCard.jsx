import React from 'react';

const ExperienceCard = ({ 
  image, 
  position, 
  company, 
  startDate, 
  endDate, 
  description 
}) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <header className="flex items-center justify-between mb-4">
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
            <p className="text-gray-600 dark:text-gray-300">{company}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
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
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard; 