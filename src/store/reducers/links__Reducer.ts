import {
  LinksAction,
  LinksActionTypes,
  LinksState,
} from "../../types/links__types";

const Default: LinksState = {
  profile: "profile/id_",
};

export const LinksReducer = (
  state = Default,
  action: LinksAction
): LinksState => {
  switch (action.type) {
    case LinksActionTypes.SET_LINK_PROFILE:
      return { profile: action.payload };
    default:
      return state;
  }
};
