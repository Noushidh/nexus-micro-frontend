import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { store, persistor } from "./store/store";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);