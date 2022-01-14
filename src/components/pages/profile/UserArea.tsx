import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import store from "@/redux/store";
import styles from "./UserArea.module.scss";
import loginChangeValidation from "@/utils/validators/loginChangeValidation";
import checkProfileAction from "@/redux/modules/userProfile/actionCreate";

interface DataInterface {
  login: string;
  description: string;
}

const UserArea = function () {
  const { register, handleSubmit } = useForm();
  const { id, password } = store.getState().profile;

  const [url, setUrl] = useState("");
  window.onhashchange = () => setUrl(window.location.pathname);

  function onsubmit(data: DataInterface) {
    store.dispatch(
      checkProfileAction({
        id,
        login: data.login,
        password,
        description: data.description,
      })
    );
    return loginChangeValidation(data);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onsubmit)}>
      <div>
        <p className={styles.text}>Username</p>
        <input
          type="text"
          {...register("login")}
          placeholder={store.getState().profile.login}
          className={styles.input}
        />
        <p className={styles.text}>Profile description</p>
        <textarea
          {...register("description")}
          className={`${styles.input} ${styles.textArea}`}
          placeholder={store.getState().profile.description}
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
