import React from "react";
import App from "./views/App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("my-react-app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
