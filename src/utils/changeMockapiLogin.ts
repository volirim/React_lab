import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import store from "@/redux/store";

interface ProfileInterface {
  id: number;
  login: string;
  password: string;
  description?: string;
}

interface DataInterface {
  login: string;
  description: string;
}

function changeMockapiLogin(data: DataInterface) {
  const { id, password, description } = store.getState().profile;

  const newData: ProfileInterface = {
    id,
    login: data.login,
    password,
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
