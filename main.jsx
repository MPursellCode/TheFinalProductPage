import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Corrected path relative to main.jsx
import "./src/CSS/index.css";
// Corrected path relative to main.jsx
import App from "./src/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
