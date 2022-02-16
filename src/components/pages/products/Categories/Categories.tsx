import { NavLink } from "react-router-dom";
import styles from "./Categories.module.scss";
import { SUB_MENU } from "@/constants/menus";

const CategoriesBlock = function () {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.line} />
      </div>
      <div className={styles.bottom}>
        {SUB_MENU.map((el) => (
          <NavLink to={el.path} key={el.id} className={styles.category}>
            {el.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBlock;
