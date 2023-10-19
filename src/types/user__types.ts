export enum UserActionTypes {
  SUCCESS_AUTH = "SUCCESS_AUTH",
  SET_LINK_PROFILE = "SET_LINK_PROFILE",
}

export interface AuthUserAction {
  type: UserActionTypes;
  payload?: any;
}
export interface ChangeLinkProfileUserAction {
  type: UserActionTypes.SET_LINK_PROFILE;
  payload?: any;
}

export interface UserState {
  isAuth?: boolean;
  profileUrl?: string;
  userData?: any;
}

export type UserAction = AuthUserAction;
