import { useState } from "react";
import GetProfilePhoto from "../../../profile-photo/profile__photo";
import ButtonLink from "../../../buttons/button__link";
import "./popup__menu.css";

const popUp = (setShowModal: any) => {
  return (
    <div
      className="popup-menu"
      onClick={() => setShowModal(false)}
      onMouseLeave={() => setShowModal(false)}>
      <ButtonLink
        path="/profile"
        placeholder="Профиль"
        transparent={true}
        large={true}
      />
      <ButtonLink
        path="/profile/edit"
        placeholder="Настройк профиля"
        transparent={true}
        large={true}
      />
      <ButtonLink
        path="/"
        placeholder="Выйти"
        transparent={true}
        large={true}
      />
    </div>
  );
};

const onclickProfileButton = (showModal: boolean, setShowModal: any) => {
  if (showModal) {
    setShowModal(false);
  } else {
    setShowModal(true);
  }
};

const profileButton = (showModal: boolean, setShowModal: any) => {
  return (
    <button
      onMouseDown={() => onclickProfileButton(showModal, setShowModal)}
      className="user-profile-photo__container">
      <GetProfilePhoto />
    </button>
  );
};

export default function PopUpMenu() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {profileButton(showModal, setShowModal)}
      {showModal ? popUp(setShowModal) : null}
    </>
  );
}
