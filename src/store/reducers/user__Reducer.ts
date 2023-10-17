import {
  UserAction,
  UserActionTypes,
  UserState,
} from "../../types/user__types";

const Defaultt: UserState = {
  isAuth: false,
};

export const UserReducer = (
  state = Defaultt,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SUCCESS_AUTH:
      return { isAuth: action.payload };
    default:
      return state;
  }
};
