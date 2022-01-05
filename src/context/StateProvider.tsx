import firebase from "firebase";
import * as React from "react";
import { createContext, useContext, useReducer } from "react";

interface StateProviderInterface {
  reducer: any;
  initialState: undefined;
  children: React.ReactNode;
}

// export interface IState {
//   isAuth: boolean;
//   user: {} | null;
// }

// state: IState | {} | displayName;

// interface Person {
//   // name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return "Hello " + person.name;
// }

type userInfo = {
  displayName?: string;
};

export type IContextProps = {
  user: userInfo;
  dispatch: ({
    user,
    type,
  }: {
    user: firebase.User;
    type: string;
  }) => // { user }: { user: firebase.User }
  void;
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
