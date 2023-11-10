import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

// Стили
import "./header-styles.css";

// Картинки
import ButtonLink from "../../buttons/button__link";

// tsx компоненты
import MobileMenu from "./components/mobile-menu";
import PopUpMenu from "./components/popup__menu";
import ToogleButton from "../../buttons/button__togle";

export default function Header() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const userData = useTypeSelector((state) => state.user);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo--link">
          Web_Hook
        </Link>

        <div className="header__menu">
          {/* Если человек авторизован */}
          {userData.isAuth ? (
            isMobile ? (
              <>
                <PopUpMenu />
              </>
            ) : (
              <>
                <ToogleButton />
                <PopUpMenu />
              </>
            ) // Если человек не авторизован
          ) : isMobile ? (
            // Если ширина экрана ровна или меньше 768px
            <>
              <ToogleButton />
              <MobileMenu />
            </>
          ) : (
            // Если ширина экрана ровна или больше 768px
            <>
              <ToogleButton />
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
