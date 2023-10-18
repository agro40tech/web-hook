import { useTypeSelector } from "../hooks/useTypeSelector";

export default function ValidateAuthData(
  email: string,
  password: string,
  successAuth: any
) {
  const users: any = useTypeSelector((state) => state.user);
  if (email === users.userData[0].email) {
    if (password === users.userData[0].password) {
      successAuth();
      alert("true");
    }
  } else alert("false");
}
