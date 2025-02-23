import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-black text-white rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
