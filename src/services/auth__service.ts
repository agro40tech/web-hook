import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponce } from "../models/responce/auth__responce";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponce>> {
    return $api.post<AuthResponce>(`/authorization`, { email, password });
  }

  static async registration(
    firstname: string,
    secondname: string,
    lastname: string,
    email: string,
    birthday: string,
    phone: string,
    password: string
  ): Promise<AxiosResponse<AuthResponce>> {
    return $api.post<AuthResponce>(`/registration`, {
      firstname,
      secondname,
      lastname,
      email,
      birthday,
      phone,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post(`/logout`);
  }
}
