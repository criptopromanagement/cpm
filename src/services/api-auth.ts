import { LoginResponse } from '../types/login';
import { User } from '../types';
import ApiClient from './api-client';
import { RegisterResponse } from '../types/register';

class AuthApi{
  async login(userLoginData: { email: string; password: string; }) : Promise<LoginResponse>{

    return new Promise(async (resolve, reject) => {
      try {
        
        const json = JSON.stringify(userLoginData);
        const response = await ApiClient.post('/auth/login', json);

        const data: LoginResponse = response.data;

        resolve(data);
      } catch (err) {
        console.error('[Auth Api]: ', err.response.data.error);
        reject(new Error(err.response.data.error));
      }
    });
  }

  async register(userRegisterData: { name:string; email: string; password: string; }) : Promise<RegisterResponse>{
    return new Promise(async (resolve, reject) => {
      try {
        
        const json = JSON.stringify(userRegisterData);
        console.log(json)
        const response = await ApiClient.post('/auth/register', json);
        console.log(response, "registerResponse")

        const data: RegisterResponse = response.data;

        resolve(data);
      } catch (err) {
        console.error('[Auth Api]: ', err.response.data.error);
        reject(new Error(err.response.data.error));
      }
    });
  }
}

export const authApi = new AuthApi();