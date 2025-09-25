export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
}

export interface IAuth {
  user_id: string;
  email: string;
  isLogin: boolean;
  login: (email: string, user_id: string) => void;
  logout: () => void;
}
