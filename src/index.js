import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themeui";
import { MainProvider } from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <MainProvider>
      <App />
    </MainProvider>
  </ChakraProvider>
);
