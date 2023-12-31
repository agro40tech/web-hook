import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/user__types";
import { users } from "../../FakeData/users__Data";
import AuthService from "../../services/auth__service";

export const authUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.userData.tokens.accessToken);
      dispatch({
        type: UserActionTypes.SUCCESS_AUTH,
        payload: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
