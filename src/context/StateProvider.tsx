import firebase from "firebase";
import * as React from "react";
import { createContext, useContext, useReducer } from "react";

interface StateProviderInterface {
  initialState: any | undefined;
  reducer: any;
  children?: React.ReactNode;
}

type userInfo = {
  displayName?: string;
};

export type IContextProps = {
  user?: userInfo;
  dispatch?: ({ user, type }: { user: firebase.User; type: string }) => void;
};

export const StateContext = createContext({} as IContextProps);

export const StateProvider = ({
  initialState,
  reducer,
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
