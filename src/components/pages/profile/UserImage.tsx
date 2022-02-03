import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserImage.module.scss";
import getProfileImage from "@/utils/getProfileImage";
import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import { StoreInterface } from "@/redux/modules/reducersCombined";

const ProfileImage = function () {
  const { id, login, password } = useSelector((state: StoreInterface) => state.profile);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

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
      setImage(imageSrc);
    }
    fetchData();
  }, [image]);

  return (
    <div className={styles.container}>
      <img src={image} alt="no profile pic" className={styles.picture} />
      <NavLink className="button" to="?modal=changeImage">
        Change profile image
      </NavLink>
    </div>
  );
};

export default ProfileImage;
