import * as React from "react";

interface IButton {
  label: string;
}

export const Button:React.FC<IButton> = ({ label }) => {
  return <button>{ label }</button>;
};
