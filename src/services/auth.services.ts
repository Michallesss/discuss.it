import { instance } from '@/lib/instance';
import { loginType, registerType } from '@/schemas/auth.schemas';

export async function loginService(userData: loginType) {
  try {
    const response = await instance.post('/auth/login', userData); // ! Error here

    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error);
  }
}

export async function registerService(userData: registerType) {
  try {
    const response = await instance.post('/auth/register', userData); // ! And here

    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error);
  }
}