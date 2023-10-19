import Note from "../Components/notes/note";
import GetProfilePhoto from "../Components/profile-photo/profile__photo";
import { useTypeSelector } from "../hooks/useTypeSelector";
import "./profile.css";

const UserInfo = () => {
  const Data = useTypeSelector((state) => state.user);

  return (
    <div className="profile__user-info">
      <div className="profile__user-name">
        {Data.userData[0].firstname} {Data.userData[0].surname},
        {Data.userData[0].yearBirth[0].day}.
        {Data.userData[0].yearBirth[1].month}.
        {Data.userData[0].yearBirth[2].year}
      </div>
      <div className="profile__user-social-info">
        <p>Подписчиков: </p>
        <p>Подписок: </p>
        <p>Постов: </p>
        <p>Получено комментариев: </p>
        <p>Полученой лайков: </p>
      </div>
    </div>
  );
};

export default function Profile() {
  const Data = useTypeSelector((state) => state.user);

  return (
    <div className="profile">
      <div className="profile__user-info--wrapper">
        <div className="profile__avatar-info">
          <div className="profile__user-avatar--container">
            <GetProfilePhoto />
          </div>
          <UserInfo />
        </div>
        <div className="profile__user-gallery">gallery</div>
      </div>
      <div className="profile__user-about--wrapper">
        <div className="profile__user-about">
          <span className="profile__user-about--title">О себе</span>
          <p className="profile__user-about--content">
            {Data.userData[0].about}
          </p>
        </div>
        <div className="profile__user-posts">
          <Note />
        </div>
      </div>
    </div>
  );
}
