export enum UserActionTypes {
  SUCCESS_AUTH = "SUCCESS_AUTH",
  SET_LINK_PROFILE = "SET_LINK_PROFILE",
  SET_ACTIVE_THEME = "SET_ACTIVE_THEME",
}

export interface AuthUserAction {
  type: UserActionTypes;
  payload?: any;
}

export interface ChangeLinkProfileUserAction {
  type: UserActionTypes.SET_LINK_PROFILE;
  payload?: any;
}
export interface ChangeActiveTheme {
  type: UserActionTypes.SET_ACTIVE_THEME;
  payload?: any;
}

export interface UserState {
  isAuth?: boolean;
  profileUrl?: string;
  userData?: any;
  activeTheme?: string;
}

export type UserAction = AuthUserAction;
