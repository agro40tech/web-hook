import React, { useState } from "react";
import "./sing-in.css";
import ButtonSubmit from "../Components/buttons/button__submit";
import ButtonLink from "../Components/buttons/button__link";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authUser } = useActions();
  const Data = useTypeSelector((state) => state.user);
  const id = Data.userData[0].id;

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
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </label>
          <label className="sing-in__form-label">
            Ваш пароль
            <input
              className="sing-in__form-input"
              type="password"
              placeholder="Пароль"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </label>
          <div className="sing-in__form-buttons">
            <ButtonLink
              path="/singup"
              placeholder="Регистрация"
              medium={true}
              transparent={true}
            />
            <ButtonSubmit
              onclick={() => authUser(email, password, id)}
              medium={true}
              fill={true}
              placeholder="Войти"
            />
          </div>
        </form>
      </div>
    </>
  );
}
