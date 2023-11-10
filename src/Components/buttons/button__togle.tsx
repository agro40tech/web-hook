import { useState, useEffect } from "react";
import iconToogleDark from "../../Accets/images/toggle-off-dark.svg";
import iconToogleLight from "../../Accets/images/toggle-off-light.svg";
import { useActions } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export default function ToogleButton() {
  const saveTheme = localStorage.getItem("theme");
  const [activeTheme, setActiveTheme] = useState(saveTheme);
  const { ChangeActiveTheme } = useActions();
  const Data = useTypeSelector((state) => state.user);

  useEffect(() => {
    if (activeTheme === "dark") {
      ChangeActiveTheme("dark");
    }
    if (activeTheme === "light") {
      ChangeActiveTheme("light");
    }
  }, [activeTheme]);
  return (
    <>
      {activeTheme === "dark" ? (
        // Если тема темная
        <button
          className="header__toogle--button"
          onClick={() => setActiveTheme("light")}>
          <img
            className="header__toogle--image"
            src={iconToogleDark}
            alt="toogle"
          />
        </button>
      ) : (
        //   Если тема светлая
        <button
          className="header__toogle--button"
          onClick={() => setActiveTheme("dark")}>
          <img
            className="header__toogle--image"
            src={iconToogleLight}
            alt="toogle"
          />
        </button>
      )}
    </>
  );
}
