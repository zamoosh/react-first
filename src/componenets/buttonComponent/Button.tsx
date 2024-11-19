import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success" | "info" | "light" | "warning";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
}

export default Button;
