interface UserServerInterface {
  id: number;
  login: string;
  password: string;
  isAdmin: boolean;
}

interface UserLoginInterface {
  id: string;
  login: string;
  password: string;
  isAdmin: boolean;
}

interface UserRegisterInterface {
  login: string;
  password: string;
  passwordConfirm: string;
  isAdmin: boolean;
}

export { UserServerInterface, UserLoginInterface, UserRegisterInterface };
