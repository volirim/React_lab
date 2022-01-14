interface UserServerInterface {
  id: number;
  login: string;
  password: string;
}

interface UserLoginInterface {
  login: string;
  password: string;
}

interface UserRegisterInterface {
  login: string;
  password: string;
  passwordConfirm: string;
}

export { UserServerInterface, UserLoginInterface, UserRegisterInterface };
