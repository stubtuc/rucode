import * as React from "react";

interface IButton {
  label: string;
}

const Button:React.FC<IButton> = ({ label }) => {
  return <button>{ label }</button>;
};

export default Button;
