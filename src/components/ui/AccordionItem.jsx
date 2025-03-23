const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-700">
        <button
          className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
          onClick={onClick}
        >
          <span className="text-lg font-medium">{question}</span>
          <svg
            className={`min-w-6 min-h-6 w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
        >
          <p className="text-quaternary">{answer}</p>
        </div>
      </div>
    );
};

export default AccordionItem;