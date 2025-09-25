import axios from "axios";

import { ILogin, IRegister } from "@/interfaces/auth.interface";

export async function register(params: IRegister) {
  try {
    const { data } = await axios.post(
      "https://evidentbeginner-us.backendless.app/api/data/user",
      {
        ...params,
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function login(params: ILogin) {
  try {
    const { data } = await axios.get(
      `https://evidentbeginner-us.backendless.app/api/data/user?where=email%3D'${params.email}'%20and%20password%3D'${params.password}'`
    );

    return data;
  } catch (err) {
    throw err;
  }
}
