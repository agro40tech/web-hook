export enum MonyActionTypes {
  GET_MONY = "GET_MONY",
}

export interface GetMonyAction {
  type: MonyActionTypes.GET_MONY;
  payload?: any;
}

export interface MonyState {
  mony?: number;
}

export type MonyAction = GetMonyAction;
