import React from "react";
import "./sing-in.css";
import ButtonSubmit from "../Components/buttons/button__submit";
import ButtonLink from "../Components/buttons/button__link";

export default function SingIn() {
  return (
    <>
      <div className="sing-in">
        <h3 className="page__title">Авторизация</h3>
        <form className="sing-in__form">
          <label className="sing-in__form-label">
            Ваша почта
            <input
              className="sing-in__form-input"
              type="email"
              placeholder="Ваша почта"
            />
          </label>
          <label className="sing-in__form-label">
            Ваш пароль
            <input
              className="sing-in__form-input"
              type="password"
              placeholder="Пароль"
            />
          </label>
          <div className="sing-in__form-buttons">
            <ButtonLink
              path="/singup"
              placeholder="Регистрация"
              medium={true}
              transparent={true}
            />
            <ButtonSubmit medium={true} fill={true} placeholder="Войти" />
          </div>
        </form>
      </div>
    </>
  );
}
