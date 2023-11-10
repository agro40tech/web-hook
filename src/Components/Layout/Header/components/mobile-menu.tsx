import { useState } from "react";

import "./mobile-menu.css";

import ButtonLink from "../../../buttons/button__link";
import iconHamburgerButtonDark from "../../../../Accets/images/hamburger-menu-dark.svg";
import iconHamburgerButtonlight from "../../../../Accets/images/hamburger-menu-light.svg";
import iconCloseButton from "../../../../Accets/images/close-svgrepo-com.svg";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";

export default function MobileMenu() {
  const [showModal, setShoModal] = useState(false);
  const activeTheme = useTypeSelector((state) => state.user).activeTheme;

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
          {activeTheme === "dark" ? (
            <img src={iconHamburgerButtonDark} alt="Меню" />
          ) : activeTheme === "light" ? (
            <img src={iconHamburgerButtonlight} alt="Меню" />
          ) : null}
        </button>
      )}
    </>
  );
}
