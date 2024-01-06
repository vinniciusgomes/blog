import { ReactNode } from "react";

import "./styles.css";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return <div className="container">{children}</div>;
}
