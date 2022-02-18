import checkProfileAction from "@/store/modules/userProfile/actionCreate";
import store from "@/store/store";

interface ProfileInterface {
  id: number;
  login: string;
  password: string;
  description?: string;
  source?: string;
  isAdmin: boolean;
}

interface DataInterface {
  password: string;
  passwordConfirm: string;
}

const changeMockapiPassword = (data: DataInterface) => {
  const { id, login, isAdmin, source } = store.getState().profile;

  const newData: ProfileInterface = {
    id,
    login,
    source,
    password: data.password,
    isAdmin,
  };

  store.dispatch(checkProfileAction(newData));
  return newData;
};

export default changeMockapiPassword;
