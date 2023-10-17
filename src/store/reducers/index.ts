import { combineReducers } from "redux";
import { monyReducer } from "./mony__Reducer";
import { UserReducer } from "./user__Reducer";

export const rootReducer = combineReducers({
  mony: monyReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
