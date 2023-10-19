import { Link } from "react-router-dom";
import GetProfilePhoto from "../profile-photo/profile__photo";
import "./note.css";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { note } from "../../FakeData/post__Data";

function ProfilePhoto(ProfileLink: any) {
  return (
    <Link to={ProfileLink}>
      <GetProfilePhoto />
    </Link>
  );
}

export default function Note() {
  const ProfileLink = useTypeSelector((state) => state.user.profileUrl);
  const Data = useTypeSelector((state) => state.user);

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar-containter">
          <ProfilePhoto ProfileLink={ProfileLink} />
        </div>
        <div className="post__user-info">
          <p>
            {Data.userData[0].firstname} {Data.userData[0].surname}
          </p>
          <p>
            {note[0].dateCreated} {note[0].timeCreated}
          </p>
          <div className="post__heaer-line"></div>
        </div>
      </div>
      <div className="post__content">{note[0].noteContentText}</div>
    </div>
  );
}
