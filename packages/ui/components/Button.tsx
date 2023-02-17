import * as React from "react";
import { cn } from "web/utils/getClassName";

interface IButton {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button:React.FC<IButton> = ({ label, disabled, onClick }) => {
    return (
      <button
          type="button"
          className={cn(disabled, 'disabled-btn')}
          onClick={() => {
              !disabled && onClick && onClick();
          }}
      >
        { label }
      </button>
    );
};

export default Button;
