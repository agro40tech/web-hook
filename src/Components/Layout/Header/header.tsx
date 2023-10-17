import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Стили
import "./header-styles.css";

// Картинки
import iconToogle from "../../../Accets/images/toggle-off-svgrepo-com.svg";
import ButtonLink from "../../buttons/button__link";

// tsx компоненты
import MobileMenu from "./components/mobile-menu";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { isatty } from "tty";
// import { useActions } from "../hooks/useAction";

// const state = useTypeSelector((state) => state.mony);
// const { GetMony } = useActions();

export default function Header() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const isAuth = useTypeSelector((state) => state.user);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo--link">
          Web_Hook
        </Link>

        <div className="header__menu">
          {isAuth.isAuth ? (
            <>
              <button className="header__toogle--button">
                <img
                  className="header__toogle--image"
                  src={iconToogle}
                  alt="toogle"
                />
              </button>
              <div>auth</div>
            </>
          ) : isMobile ? (
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
              <ButtonLink
                path="singin"
                placeholder="Войти"
                fill={true}
                large={true}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
