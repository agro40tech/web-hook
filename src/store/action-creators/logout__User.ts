import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/user__types";
import AuthService from "../../services/auth__service";

export const logOut = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      dispatch({
        type: UserActionTypes.SUCCESS_AUTH,
        payload: false,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
