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

type displayName = {
  displayName?: string;
};

export type IContextProps = {
  user: displayName;
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
