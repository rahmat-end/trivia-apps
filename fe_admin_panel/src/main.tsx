/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
// import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
