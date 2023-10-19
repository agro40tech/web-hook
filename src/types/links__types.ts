export enum LinksActionTypes {
  SET_LINK_PROFILE = "SET_LINK_PROFILE",
}

export interface SetLinksAction {
  type: LinksActionTypes.SET_LINK_PROFILE;
  payload?: any;
}

export interface LinksState {
  profile: string;
}

export type LinksAction = SetLinksAction;
