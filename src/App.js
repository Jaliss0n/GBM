import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import React from "react";
import Home from "./pags/Home";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />

      </ThemeProvider>
    </div>
  );
}

