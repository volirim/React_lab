import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserImage.module.scss";
import getProfileImage from "@/utils/getProfileImage";
import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import { StoreInterface } from "@/redux/modules/reducersCombined";

const ProfileImage = function () {
  const [url, setUrl] = useState("");
  const { id, login, password, source } = useSelector((state: StoreInterface) => state.profile);
  const dispatch = useDispatch();

  window.onhashchange = () => setUrl(window.location.pathname);

  useEffect(() => {
    async function fetchData() {
      const imageSrc: string = await getProfileImage();
      dispatch(
        checkProfileAction({
          id,
          login,
          password,
          source: imageSrc,
        })
      );
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <img src={source} alt="no profile pic" className={styles.picture} />
      <NavLink className="button" to={`${url}?modal=changeImage`}>
        Change profile image
      </NavLink>
    </div>
  );
};

export default ProfileImage;
