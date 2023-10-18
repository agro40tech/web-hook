import {
  UserAction,
  UserActionTypes,
  UserState,
} from "../../types/user__types";

const Default: UserState = {
  isAuth: false,
  userData: [
    {
      id: 0,
      firstName: "Владимир",
      surName: "Волков",
      latname: "Владимирович",
      email: "volkovvova67@gmail.com",
      yearBirth: [
        {
          day: 27,
        },
        { month: 4 },
        { year: 2003 },
      ],
      telephone: "+79198200581",
      password: "45151987",
      photo: "ava.jpg",
    },
  ],
};

export const UserReducer = (state = Default, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SUCCESS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
