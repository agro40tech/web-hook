import "./note.css";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { note } from "../../FakeData/post__Data";
import PostComment from "./comment";
import ButtonSubmit from "../buttons/button__submit";
import ProfilePhoto from "./profile__photo";
import { ButtonLike } from "../buttons/button__like";

export default function Note() {
  const Data = useTypeSelector((state) => state.user);
  const profileLink = `${note[0].avtorProfileUrl}`;

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar-containter">
          <ProfilePhoto profileLink={profileLink} />
        </div>
        <div className="post__user-info">
          <p>
            {Data.userData[0].firstname} {Data.userData[0].surname}
          </p>
          <p>
            {note[0].dateCreated} {note[0].timeCreated}
          </p>
          <div className="post__header-line"></div>
        </div>
      </div>
      <div className="post__content">{note[0].noteContentText}</div>
      <div className="post__likes">
        <ButtonLike />
        <p>{note[0].likes}</p>
      </div>
      <PostComment />
      <a className="post__button-next-comments" href="/">
        Развернуть
      </a>
      <div className="post__write-comment">
        <textarea
          className="post__input-comment"
          placeholder="Ваш комментарий"
        />
        <ButtonSubmit fill={true} medium={true} placeholder="Отправить" />
      </div>
    </div>
  );
}
