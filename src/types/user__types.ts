export enum UserActionTypes {
  SUCCESS_AUTH = "SUCCESS_AUTH",
}

export interface GetUserAction {
  type: UserActionTypes.SUCCESS_AUTH;
  payload?: any;
}

export interface UserState {
  isAuth?: boolean;
  userData?: any;
}

export type UserAction = GetUserAction;
