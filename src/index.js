import * as React from "react";
import * as ReactDOM from "react-dom"
import { App } from "./components/app/app";
import { StoreProvider } from "./contexts/store";

const root = document.getElementById("root");

ReactDOM.render(
  <StoreProvider>
      <App />
  </StoreProvider>,
  root,
);
