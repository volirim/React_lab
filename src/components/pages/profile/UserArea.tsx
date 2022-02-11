import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import styles from "./UserArea.module.scss";
import loginChangeValidation from "@/utils/validators/loginChangeValidation";
import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import { StoreInterface } from "@/redux/modules/reducersCombined";

interface DataInterface {
  login: string;
  description: string;
}

const UserArea = function () {
  const { register, handleSubmit } = useForm();
  const { login, description, id, password, isAdmin } = useSelector((state: StoreInterface) => state.profile);

  const [url, setUrl] = useState("");
  window.onhashchange = () => setUrl(window.location.pathname);

  function onSubmit(data: DataInterface) {
    store.dispatch(
      checkProfileAction({
        id,
        login: data.login,
        password,
        description: data.description,
        isAdmin,
      })
    );
    return loginChangeValidation(data);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className={styles.text}>Username</p>
        <input type="text" {...register("login")} defaultValue={login} className={styles.input} />
        <p className={styles.text}>Profile description</p>
        <textarea
          {...register("description")}
          className={`${styles.input} ${styles.textArea}`}
          defaultValue={description}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button type="submit" className={`button ${styles.topButton}`}>
          Save profile
        </button>
        <NavLink to={`${url}?modal=changePassword`} className="button">
          change password
        </NavLink>
      </div>
    </form>
  );
};

export default UserArea;
