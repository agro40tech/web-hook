import React, { useState } from "react";
import "./sing-up.css";
import ButtonSubmit from "../Components/buttons/button__submit";
import ButtonLink from "../Components/buttons/button__link";
import { useActions } from "../hooks/useAction";

export default function SingUp() {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { regUser } = useActions();

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
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <label className="sing-up__form-label">
            Ваша фамилия
            <input
              className="sing-up__form-input"
              type="text"
              name="surname"
              placeholder="Ваша фамилия"
              onChange={(e) => setSecondname(e.target.value)}
            />
          </label>
          <label className="sing-up__form-label">
            Ваше отчество
            <input
              className="sing-up__form-input"
              type="text"
              name="lastname"
              placeholder="Ваше отчество"
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <label className="sing-up__form-label">
            Ваша почта
            <input
              className="sing-up__form-input"
              type="email"
              name="email"
              placeholder="Ваша почта"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="sing-up__form-label">
            Год рождения
            <input
              className="sing-up__form-input"
              type="date"
              name="date"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </label>
          <label className="sing-up__form-label">
            Ваш номер телефон
            <input
              className="sing-up__form-input"
              type="tel"
              name="tel"
              placeholder="Номер телефона"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="sing-up__form-label">
            Ваш пароль
            <input
              className="sing-up__form-input"
              type="password"
              name="firstPassword"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
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
              onclick={() =>
                regUser(
                  firstname,
                  secondname,
                  lastname,
                  email,
                  birthday,
                  phone,
                  password
                )
              }
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
