import { useState } from "react";
import GetProfilePhoto from "../../../profile-photo/profile__photo";
import ButtonLink from "../../../buttons/button__link";
import "./popup__menu.css";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";

const popUp = (ProfileLink: any, setShowModal: any) => {
  return (
    <div
      className="popup-menu"
      onClick={() => setShowModal(false)}
      onMouseLeave={() => setShowModal(false)}>
      <ButtonLink
        path={`${ProfileLink}`}
        placeholder="Профиль"
        transparent={true}
        large={true}
      />
      <ButtonLink
        path={`${ProfileLink}/edit`}
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
  const ProfileLink = useTypeSelector((state) => state.user.profileUrl);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {profileButton(showModal, setShowModal)}
      {showModal ? popUp(ProfileLink, setShowModal) : null}
    </>
  );
}
