import * as React from "react";
import { createContext, useContext, useReducer } from "react";

// interface StateContextInterface {
//   name: string;
//   email: string;
// }

// interface StateProviderInterface {
//   reducer: string;
//   initialState: null;
//   children: string;
// }

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
