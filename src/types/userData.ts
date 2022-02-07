interface UserServerInterface {
  id: number;
  login: string;
  password: string;
}

interface UserLoginInterface {
  id: string;
  login: string;
  password: string;
}

interface UserRegisterInterface {
  login: string;
  password: string;
  passwordConfirm: string;
}

export { UserServerInterface, UserLoginInterface, UserRegisterInterface };
