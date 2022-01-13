import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getGamesData from "@/api/getMockapiData";
import styles from "./UserImage.module.scss";
import store from "@/redux/store";

const ProfileImage = function () {
  const [url, setUrl] = useState("");
  window.onhashchange = () => setUrl(window.location.pathname);

  const [image, setImage] = useState();

  useEffect(() => {
    async function fetchData() {
      const profileObject = await getGamesData(`/user/${store.getState().profile.id}`);
      setImage(profileObject.source);
    }
    fetchData();
  }, []);

  console.log(image);

  return (
    <div className={styles.container}>
      <img src={image} alt="no profile pic" className={styles.picture} />
      <NavLink className="button" to={`${url}?modal=changeImage`}>
        Change profile image
      </NavLink>
    </div>
  );
};

export default ProfileImage;
