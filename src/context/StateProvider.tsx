import * as React from "react";
import { createContext, useContext, useReducer } from "react";

// interface StateContextInterface {
//   name: string;
//   email: string;
// }

interface StateProviderInterface {
  reducer: any;
  initialState: undefined;
  children: string;
}

export interface IState {
  isAuth: boolean;
  user: string;
}

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string }) => void;
}

export const StateContext = createContext({} as IContextProps);

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: StateProviderInterface) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
