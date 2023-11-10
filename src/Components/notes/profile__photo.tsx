import { Link } from "react-router-dom";
import GetProfilePhoto from "../profile-photo/profile__photo";

interface profileType {
  profileLink: string;
}

export default function ProfilePhoto({ profileLink }: profileType) {
  return (
    <Link to={profileLink}>
      <GetProfilePhoto />
    </Link>
  );
}
