import { combineReducers } from "redux";
import { monyReducer } from "./mony__Reducer";

export const rootReducer = combineReducers({
  mony: monyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
