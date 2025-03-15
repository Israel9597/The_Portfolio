import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App.tsx";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "blackAlpha.900", // Set the default background color to black
        color: "white", // Set the default text color to white
      },
    },
  },
  fonts: {
    body: "Poppins, sans-serif", // Use Poppins for body text
    heading: "Poppins, sans-serif",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
