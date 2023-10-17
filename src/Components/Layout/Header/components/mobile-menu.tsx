import { useState } from "react";

import "./mobile-menu.css";

import ButtonLink from "../../../buttons/button__link";
import iconHamburgerButton from "../../../../Accets/images/hamburger-menu-svgrepo-com.svg";
import iconCloseButton from "../../../../Accets/images/close-svgrepo-com.svg";

export default function MobileMenu() {
  const [showModal, setShoModal] = useState(false);

  return (
    <>
      {showModal ? (
        <div className="header__mobile-menu--overlay">
          <button
            className="header__mobile-menu-button-close--active"
            onClick={() => setShoModal(false)}>
            <img src={iconCloseButton} alt="Меню" />
          </button>
          <div
            className="header__mobile-menu-modal"
            onClick={() => setShoModal(false)}>
            <ButtonLink
              path="/"
              placeholder="Лента"
              transparent={true}
              large={true}
            />
            <ButtonLink
              path="singin"
              placeholder="Войти"
              transparent={true}
              large={true}
            />
          </div>
        </div>
      ) : (
        <button
          className="header__mobile-menu-button"
          onClick={() => setShoModal(true)}>
          <img src={iconHamburgerButton} alt="Меню" />
        </button>
      )}
    </>
  );
}
