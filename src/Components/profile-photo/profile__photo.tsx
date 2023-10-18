import { useTypeSelector } from "../../hooks/useTypeSelector";
import "./profile__photo.css";

export default function GetProfilePhoto() {
  const Data = useTypeSelector((state) => state.user);
  const photoName = Data.userData[0].photo;

  return (
    <img
      className="user-profile-photo__image"
      src={require(`../../Accets/images/${photoName}`)}
      alt="Аватарка"
    />
  );
}
