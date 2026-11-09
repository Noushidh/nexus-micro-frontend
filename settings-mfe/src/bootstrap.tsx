import React from "react";
import { createRoot } from "react-dom/client";

import StandaloneApp from "./StandaloneApp";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <StandaloneApp />
    </React.StrictMode>
  );
}