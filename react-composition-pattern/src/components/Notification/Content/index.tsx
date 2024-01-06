import "./styles.css";

interface ContentProps {
  children: string;
}

export function Content({ children }: ContentProps) {
  return <div className="notification-content">{children}</div>;
}
