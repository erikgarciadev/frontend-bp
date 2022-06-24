import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Close from "../Icon/Close";
import Plus from "../Icon/Plus";
import Save from "../Icon/Save";
import "./styles.css";

const Button = ({
  children,
  type = "button",
  onClick,
  disabled,
  icon
}: {
  children: ReactNode;
  props?: ButtonHTMLAttributes<any>;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  icon: 'save' | 'plus' | 'close'
}) => {
  const getIcon = (icon: 'save'|'plus'|'close') => {
    if(icon==='save') return <Save fill="white" fontSize={"14px"}  />
    if(icon==='plus') return <Plus fill="white" fontSize={"14px"}  />
    if(icon === 'close') return <Close  fill="white" fontSize={"14px"} />
  }
  return (
      <button
        className={disabled ? "disabled" : ""}
        type={type}
        onClick={onClick}
      >
        {getIcon(icon)}
        {children}
      </button>
  );
};

export default Button;
