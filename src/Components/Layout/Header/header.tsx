import React from "react";
import "./header-styles.css";
import iconToogle from "../../../Accets/images/toggle-off-svgrepo-com.svg";
import ButtonLink from "../../buttons/button__link";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./components/mobile-menu";

export default function Header() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo--link" href="#0">
          Web_Hook
        </a>

        <div className="header__menu">
          {isMobile ? (
            <MobileMenu />
          ) : (
            <>
              <button className="header__toogle--button">
                <img
                  className="header__toogle--image"
                  src={iconToogle}
                  alt="toogle"
                />
              </button>
              <ButtonLink fill={true} large={true} placeholder="Войти" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
