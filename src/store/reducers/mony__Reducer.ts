import {
  MonyAction,
  MonyActionTypes,
  MonyState,
} from "../../types/mony__types";

const Default: MonyState = {
  mony: 0,
};

export const monyReducer = (state = Default, action: MonyAction): MonyState => {
  switch (action.type) {
    case MonyActionTypes.GET_MONY:
      return { mony: action.payload };
    default:
      return state;
  }
};
