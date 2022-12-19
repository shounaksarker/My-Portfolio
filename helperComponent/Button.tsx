import React from 'react';

type props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = ({ type, onClick, className, children }: props) => {
   
  return (
    <button type={type || "button"} onClick={onClick} className={`${className} py-4 px-8 rounded-xl shadow-[-1px_2px_5px_0px_black]  `}>
      {children}
    </button>
  );
};

export default  Button;