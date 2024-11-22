import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My app";
  });

  return (
    <div className={"container mt-3"}>
      <input ref={ref} className="form-control" />
    </div>
  );
}

export default App;
