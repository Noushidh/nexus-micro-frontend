import React from "react";
import { createRoot } from "react-dom/client";
import StandaloneApp from "./standaloneApp";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <StandaloneApp />
    </Provider>
  </React.StrictMode>,
);
