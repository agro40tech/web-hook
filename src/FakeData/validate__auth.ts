import { users } from "./users__Data";

export default function ValidateAuthData(
  email: string,
  password: string,
  successAuth: any
) {
  if (email === users[0].email) {
    if (password === users[0].password) {
      successAuth();
      alert("true");
    }
  } else alert("false");
}
