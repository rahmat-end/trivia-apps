/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./router/AppRouter.tsx";
import { Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);
