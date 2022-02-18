interface ProfileStateInterface {
  id: number;
  login: string;
  password: string;
  description?: string;
  source?: string;
  isAdmin: boolean;
}

export default ProfileStateInterface;
