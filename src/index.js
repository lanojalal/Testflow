import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";

// Components
import App from "./App";

// CSS
import "./App.css";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.getElementById("root")
);
