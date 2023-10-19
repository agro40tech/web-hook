import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/user__types";
import { users } from "../../FakeData/users__Data";

export const authUser = (email: string, password: string, id: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      if (email === users[0].email) {
        if (password === users[0].password) {
          alert("true");
          dispatch({ type: UserActionTypes.SUCCESS_AUTH, payload: true });
          dispatch({ type: UserActionTypes.SET_LINK_PROFILE, payload: id });
        }
      } else alert("false");
    } catch (err) {
      console.log(err);
    }
  };
};
