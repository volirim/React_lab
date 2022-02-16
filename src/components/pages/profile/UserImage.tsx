import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserImage.module.scss";
import getProfileImage from "@/utils/getProfileImage";
import checkProfileAction from "@/store/modules/userProfile/actionCreate";
import { profileSelector } from "@/store/modules/userProfile/selectors";

const ProfileImage = function () {
  const { id, login, password, isAdmin, source } = useSelector(profileSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const imageSrc: string = await getProfileImage();
      dispatch(
        checkProfileAction({
          id,
          login,
          password,
          source: imageSrc,
          isAdmin,
        })
      );
    }
    fetchData();
  }, [source]);

  return (
    <div className={styles.container}>
      <img src={source} alt="no profile pic" className={styles.picture} />
      <NavLink className="button" to="?modal=changeImage">
        Change profile image
      </NavLink>
    </div>
  );
};

export default ProfileImage;
