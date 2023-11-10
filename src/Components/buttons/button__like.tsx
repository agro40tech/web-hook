import iconLikeDark from "../../Accets/images/like-dark.svg";
import iconLikeLight from "../../Accets/images/like-light.svg";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export function ButtonLike() {
  const activeTheme = useTypeSelector((state) => state.user).activeTheme;
  return (
    <>
      {activeTheme === "dark" ? (
        <a href="/">
          <img className="comment__like-img" src={iconLikeDark} alt="Лайк" />
        </a>
      ) : activeTheme === "light" ? (
        <a href="/">
          <img className="comment__like-img" src={iconLikeLight} alt="Лайк" />
        </a>
      ) : null}
    </>
  );
}
