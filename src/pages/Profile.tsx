import store from "@/redux/store";
import classes from "../components/pages/products/Categories/Categories.module.scss";
import UserArea from "../components/pages/profile/UserArea";
import ProfileImage from "../components/pages/profile/UserImage";
import styles from "./Profile.module.scss";

const Profile: React.FC = function () {
  return (
    <div className="main-container">
      <div className={styles.topBlock}>
        <div className={styles.title}>{store.getState().profile.login} profile page</div>
        <div className={classes.line} />
      </div>
      <div className={styles.bottomBlock}>
        <ProfileImage />
        <UserArea />
      </div>
      <div />
    </div>
  );
};

export default Profile;
