import { Dispatch } from "redux";
import { LinksAction, LinksActionTypes } from "../../types/links__types";

export const setLinks = (id: number) => {
  return async (dispatch: Dispatch<LinksAction>) => {
    try {
      dispatch({
        type: LinksActionTypes.SET_LINK_PROFILE,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
