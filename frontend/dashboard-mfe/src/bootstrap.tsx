import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import StandaloneApp from "./StandaloneApp";
import { store } from "./store/store";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <StandaloneApp />
    </Provider>
  </React.StrictMode>
);