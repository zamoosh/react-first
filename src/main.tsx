import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fontawesome-pro/css/regular.css";
import "./assets/fontawesome-pro/css/solid.css";
import "./assets/fontawesome-pro/css/fontawesome.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
