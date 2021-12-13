import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import reducer, { initialState } from "./components/reducer";
import { StateProvider } from "./components/StateProvider";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AppRouter />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
