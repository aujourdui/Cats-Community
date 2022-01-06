import * as React from "react";
import * as ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
// import reducer, { initialState } from "./reducers/reducer";
// import { StateProvider } from "./context/StateProvider";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <AppRouter />
    {/* </StateProvider> */}
  </React.StrictMode>,
  document.getElementById("app")
);
