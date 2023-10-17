import { Dispatch } from "redux";
import { MonyActionTypes, MonyAction } from "../../types/mony__types";

export const GetMony = (value: number) => {
  return async (dispatch: Dispatch<MonyAction>) => {
    try {
      dispatch({ type: MonyActionTypes.GET_MONY, payload: value });
    } catch (err) {
      console.log(err);
    }
  };
};
