import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/user__types";
import AuthService from "../../services/auth__service";

export const regUser = (
  firstname: string,
  secondname: string,
  lastname: string,
  email: string,
  birthday: string,
  phone: string,
  password: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.registration(
        firstname,
        secondname,
        lastname,
        email,
        birthday,
        phone,
        password
      );
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
