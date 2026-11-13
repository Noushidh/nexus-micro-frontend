import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import App from "./App";

const StandaloneApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default StandaloneApp;