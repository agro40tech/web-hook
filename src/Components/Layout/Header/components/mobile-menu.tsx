import { useState } from "react";
import ButtonLink from "../../../buttons/button__link";
import iconHamburgerButton from "../../../../Accets/images/hamburger-menu-svgrepo-com.svg";
import iconCloseButton from "../../../../Accets/images/close-svgrepo-com.svg";
import "./mobile-menu.css";

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
          <div className="header__mobile-menu-modal">
            <ButtonLink transparent={true} large={true} placeholder="Войти" />
          </div>
        </div>
      ) : (
        <button
          className="header__mobile-menu-button--button"
          onClick={() => setShoModal(true)}>
          <img src={iconHamburgerButton} alt="Меню" />
        </button>
      )}
    </>
  );
}
