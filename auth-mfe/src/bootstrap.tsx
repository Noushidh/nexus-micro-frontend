import React from "react";
import { createRoot } from "react-dom/client";
import StandaloneApp from "./standaloneApp";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <React.StrictMode>
    <StandaloneApp />
  </React.StrictMode>
);