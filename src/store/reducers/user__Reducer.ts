import {
  UserAction,
  UserActionTypes,
  UserState,
} from "../../types/user__types";

const theme = localStorage.getItem("theme");

const Default: UserState = {
  isAuth: false,
  profileUrl: "profile/id_",
  userData: [
    {
      id: 0,
      firstname: "Владимир",
      surname: "Волков",
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
      about:
        "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et,Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et, ",
    },
  ],
  activeTheme: `${theme}`,
};

export const UserReducer = (state = Default, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SUCCESS_AUTH:
      return { ...state, isAuth: action.payload };
    case UserActionTypes.SET_LINK_PROFILE:
      return { ...state, profileUrl: state.profileUrl + action.payload };
    case UserActionTypes.SET_ACTIVE_THEME:
      return { ...state, activeTheme: action.payload };
    default:
      return state;
  }
};
