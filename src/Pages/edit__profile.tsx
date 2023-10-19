import ButtonSubmit from "../Components/buttons/button__submit";
import GetProfilePhoto from "../Components/profile-photo/profile__photo";
import "./edit__profile.css";

export default function EditProfile() {
  return (
    <div className="edit-profile">
      <form className="edit-profile__form">
        <div className="edit-profile__form--wrapper">
          <label className="edit-profile__form-label">
            Имя
            <input
              className="edit-profile__form-input"
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label className="edit-profile__form-label">
            Фамилия
            <input
              className="edit-profile__form-input"
              type="text"
              name="surname"
              id="surname"
            />
          </label>
          <label className="edit-profile__form-label">
            Год рождения
            <input
              className="edit-profile__form-input"
              type="date"
              name="date"
              id="date"
            />
          </label>
          <label className="edit-profile__form-label">
            Почта
            <input
              className="edit-profile__form-input"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label className="edit-profile__form-label">
            Номер телефона
            <input
              className="edit-profile__form-input"
              type="tel"
              name="tel"
              id="tel"
            />
          </label>
        </div>
        <div className="edit-profile__form-about--wrapper">
          <label className="edit-profile__form-label form-about-label">
            О себе
            <textarea className="edit-profile__form-input form-about-input" />
          </label>
          <div className="edit-profile__form-about-user-picture">
            <div className="edit-profile__form-about-user-picture--container">
              <GetProfilePhoto />
              <input
                className="edit-profile__form-about-user-picture--input"
                type="file"
              />
            </div>
          </div>
          <ButtonSubmit fill={true} large={true} placeholder="Применить" />
        </div>
      </form>
    </div>
  );
}
