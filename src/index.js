import React from "react";
import App from "./views/App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

console.log("INDEX");
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
