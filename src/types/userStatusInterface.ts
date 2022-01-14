export interface UserStatusInterface {
  userStatus: boolean;
}

export interface SetUserStatusInterface {
  updateUserStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
