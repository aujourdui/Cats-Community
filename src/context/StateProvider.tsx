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

// export interface IState {
//   isAuth: boolean;
//   user: boolean;
// }

type IContextProps = {
  user: string | {};
  dispatch: ({ type }: { type: string }) => void;
};

export const StateContext = createContext({} as IContextProps);

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: StateProviderInterface) => {
  const [user, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ user, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
