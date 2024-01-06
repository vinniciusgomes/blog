import { ReactNode, ButtonHTMLAttributes } from "react";

import "./styles.css";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ActionButton({ children, ...rest }: ActionButtonProps) {
  return (
    <button className="action-button" {...rest}>
      {children}
    </button>
  );
}
