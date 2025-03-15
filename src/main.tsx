import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App.tsx";
import { css, Global } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        background: linear-gradient(
          to bottom,
          rgba(2, 10, 93, 0.77),
          rgb(229, 228, 233)
        );
        
      }
         '.chakra-box': {
            margin: 0, // Override margin for all Box components
          },
        }}
    `}
  />
);
const theme = extendTheme({
  fonts: {
    heading: '"Montserrat", sans-serif', // Use Montserrat for headings
    body: '"Montserrat", sans-serif', // Use Montserrat for body text
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: '"Montserrat", sans-serif',
        fontOpticalSizing: "auto",
        fontWeight: "normal", // Default weight
        fontStyle: "normal",
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ChakraProvider>
  </StrictMode>
);
