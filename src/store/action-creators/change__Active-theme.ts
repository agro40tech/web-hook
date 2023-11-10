import { Dispatch } from "redux";
import { UserActionTypes, UserAction } from "../../types/user__types";

export const ChangeActiveTheme = (activeTheme: string) => {
  let pageSelector = document.querySelector(".page");
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.SET_ACTIVE_THEME,
        payload: activeTheme,
      });
      if (activeTheme === "dark") {
        pageSelector?.classList.replace("theme__light", "theme__dark");
        localStorage.setItem("theme", "dark");
      }
      if (activeTheme === "light") {
        pageSelector?.classList.replace("theme__dark", "theme__light");
        localStorage.setItem("theme", "light");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
