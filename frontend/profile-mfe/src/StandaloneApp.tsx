import { BrowserRouter } from "react-router-dom";
import App from "./App";

function StandaloneApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default StandaloneApp;