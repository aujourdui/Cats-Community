import React, { createContext, useContext, useReducer } from "react";

interface StateContextInterface {
  name: string;
  email: string;
}

interface StateProviderInterface {
  reducer: string;
  initialState: null;
  children: string;
}

export const StateContext = createContext<StateContextInterface | null>(null);

export const StateProvider = ({
  reducer: any,
  initialState: boolean,
  children: any,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
