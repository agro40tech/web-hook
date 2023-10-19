import { combineReducers } from "redux";
import { monyReducer } from "./mony__Reducer";
import { UserReducer } from "./user__Reducer";
import { LinksReducer } from "./links__Reducer";

export const rootReducer = combineReducers({
  mony: monyReducer,
  user: UserReducer,
  links: LinksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
