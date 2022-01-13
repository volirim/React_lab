import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import store from "@/redux/store";

interface ProfileInterface {
  id: number;
  login: string;
  password: string;
  description?: string;
}

interface DataInterface {
  password: string;
  passwordConfirm: string;
}

const changeMockapiPassword = (data: DataInterface) => {
  const { id, login } = store.getState().profile;

  const newData: ProfileInterface = {
    id,
    login,
    password: data.password,
  };

  store.dispatch(checkProfileAction(newData));
  return newData;
};

export default changeMockapiPassword;
