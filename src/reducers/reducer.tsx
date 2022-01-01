// interface UserState {
//   user: boolean;
// }

// type ACTIONTYPE = { type: "SET_USER" } | { type: "UNSET_USER" };

export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  UNSET_USER: "UNSET_USER",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
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
