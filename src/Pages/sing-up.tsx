import React from "react";
import "./sing-up.css";
import ButtonSubmit from "../Components/buttons/button__submit";
import ButtonLink from "../Components/buttons/button__link";

export default function SingUp() {
  return (
    <>
      <div className="sing-up">
        <h3 className="page__title">Регистрация</h3>
        <form className="sing-up__form">
          <label className="sing-up__form-label">
            Ваше имя
            <input
              className="sing-up__form-input"
              type="text"
              name="firstname"
              placeholder="Ваше имя"
            />
          </label>
          <label className="sing-up__form-label">
            Ваша фамилия
            <input
              className="sing-up__form-input"
              type="text"
              name="surname"
              placeholder="Ваша фамилия"
            />
          </label>
          <label className="sing-up__form-label">
            Ваше отчество
            <input
              className="sing-up__form-input"
              type="text"
              name="lastname"
              placeholder="Ваше отчество"
            />
          </label>
          <label className="sing-up__form-label">
            Ваша почта
            <input
              className="sing-up__form-input"
              type="email"
              name="email"
              placeholder="Ваша почта"
            />
          </label>
          <label className="sing-up__form-label">
            Год рождения
            <input className="sing-up__form-input" type="date" name="date" />
          </label>
          <label className="sing-up__form-label">
            Ваш номер телефон
            <input
              className="sing-up__form-input"
              type="tel"
              name="tel"
              placeholder="Номер телефона"
            />
          </label>
          <label className="sing-up__form-label">
            Ваш пароль
            <input
              className="sing-up__form-input"
              type="password"
              name="firstPassword"
              placeholder="Пароль"
            />
          </label>
          <label className="sing-up__form-label">
            Повторите пароль
            <input
              className="sing-up__form-input"
              type="password"
              name="lastPassword"
              placeholder="Повторите пароль"
            />
          </label>
          <div className="sing-up__form-buttons">
            <ButtonLink
              path="/singin"
              placeholder="Войти"
              medium={true}
              transparent={true}
            />
            <ButtonSubmit
              medium={true}
              fill={true}
              placeholder="Зарегистрироваться"
            />
          </div>
        </form>
      </div>
    </>
  );
}
