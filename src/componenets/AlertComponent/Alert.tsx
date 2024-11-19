import {ReactNode} from "react";

interface Props {
  children: ReactNode;
  type: string;
}

function Alert({ children, type }: Props) {
  const className = `alert alert-${type}`;

  return (
    <div className={className} role="alert">
      {children}
    </div>
  );
}

export default Alert;
