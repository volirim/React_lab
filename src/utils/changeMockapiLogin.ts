import checkProfileAction from "@/store/modules/userProfile/actionCreate";
import store from "@/store/store";

interface ProfileInterface {
  id: number;
  login: string;
  password: string;
  description?: string;
  isAdmin: boolean;
}

interface DataInterface {
  login: string;
  description: string;
}

function changeMockapiLogin(data: DataInterface) {
  const { id, password, description, isAdmin } = store.getState().profile;

  const newData: ProfileInterface = {
    id,
    login: data.login,
    password,
    isAdmin,
  };

  if (data.description.length) {
    newData.description = data.description;
    store.dispatch(checkProfileAction(newData));
    return newData;
  }
  newData.description = description;
  return newData;
}

export default changeMockapiLogin;
