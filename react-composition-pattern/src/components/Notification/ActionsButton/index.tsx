import { ReactNode } from "react";

import "./styles.css";

interface ActionsButtonProps {
  children: ReactNode;
}

export function ActionsButton({ children }: ActionsButtonProps) {
  return <div className="actions-button-container">{children}</div>;
}
