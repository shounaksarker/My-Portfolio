import React from "react";

type props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const ToggleBtn = ({ type, onClick, className, children }: props) => {
    const btnStyle = {
        'padding': '10px',
        'borderRadius': '50%',
    }
  return (
    <button type={type || "button"} onClick={onClick} className={`${className}`} style = {btnStyle}>
      {children}
    </button>
  );
};

export default ToggleBtn;
