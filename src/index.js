import * as React from "react";
import * as ReactDOM from "react-dom"
import "./index.css";
import { App } from "./components/app/app";
import { StoreProvider } from "./contexts/store";
import { I18nProvider } from "./contexts/i18n";

const root = document.getElementById("root");

ReactDOM.render(
  <StoreProvider>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StoreProvider>,
  root,
);
