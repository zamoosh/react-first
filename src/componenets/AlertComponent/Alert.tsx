import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
  onClose: () => void
}

function Alert({ children, type, onClose }: Props) {

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {children}
      <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;
