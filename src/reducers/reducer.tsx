interface UserState {
  user: boolean;
}

type Action = { SET_USER: string } | { UNSET_USER: string };

export const initialState: UserState = {
  user: null,
};

export const actionTypes: Action = {
  SET_USER: "SET_USER",
  UNSET_USER: "UNSET_USER",
};

const reducer = (state: UserState, action: Action) =>{
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        console.log(action.user)
      };

    case actionTypes.UNSET_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
