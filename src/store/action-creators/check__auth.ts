import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/user__types";
import AuthService from "../../services/auth__service";
import axios from "axios";
import { AuthResponce } from "../../models/responce/auth__responce";
import { API_URL } from "../../http";

export const checkAuth = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.get<AuthResponce>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
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
