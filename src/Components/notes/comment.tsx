import { useTypeSelector } from "../../hooks/useTypeSelector";
import "./comment.css";
import { note } from "../../FakeData/post__Data";
import ProfilePhoto from "./profile__photo";
import { ButtonLike } from "../buttons/button__like";

export default function PostComment() {
  const Data = useTypeSelector((state) => state.user);
  const profileLink = `${note[0].avtorProfileUrl}`;

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="post__avatar-containter post__avatar-comment">
          <ProfilePhoto profileLink={profileLink} />
        </div>
        <div className="comment__user-info">
          <p>
            {Data.userData[0].firstname} {Data.userData[0].surname}
          </p>
          <p>
            {note[0].dateCreated} {note[0].timeCreated}
          </p>
        </div>
        <div className="post__header-line"></div>
      </div>
      <div className="comment__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam enim
        neque quis non voluptatem quae?
      </div>
      <div className="comment__likes">
        <ButtonLike />
        <p>{note[0].likes}</p>
      </div>
    </div>
  );
}
