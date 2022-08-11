import ApiClient from "./api-client";
import { RegisterResponse } from "../types/register";
import { User } from "src/types/user-data";
import { UserDetail } from "src/types/user-data/user-detail";

class AuthApi {
  async login(userLoginData: {
    email: string;
    password: string;
  }): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const json = JSON.stringify(userLoginData);
        const response = await ApiClient.post("/auth/login", json);

        const data: User = response.data;
        resolve(data);
      } catch (err) {
        if (err?.reponse) {
          reject(new Error(err.response.data.error));
        } else {
          reject(new Error("Error de servidor"));
        }
      }
    });
  }

  async register(userRegisterData: {
    name: string;
    email: string;
    password: string;
  }): Promise<RegisterResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const json = JSON.stringify(userRegisterData);
        const response = await ApiClient.post("/auth/register", json);
        const data: RegisterResponse = response.data;
        resolve(data);
      } catch (err) {
        if (err?.reponse) {
          reject(new Error(err.response.data.error));
        } else {
          reject(new Error("Error de servidor"));
        }
      }
    });
  }
  async me(): Promise<UserDetail> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await ApiClient.get("/users");
        const user: UserDetail = response.data;
        console.log(user, "me")
        resolve(user);
      } catch (err) {
        if (err?.reponse) {
          reject(new Error(err.response.data.error));
        } else {
          reject(new Error("Error de servidor"));
        }
      }
    });
  }
}

export const authApi = new AuthApi();
