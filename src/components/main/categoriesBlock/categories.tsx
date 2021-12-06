import { NavLink } from "react-router-dom";
import categories from "./categories.module.scss";
import { SUB_MENU } from "@/constants/menus";

const CategoriesBlock = function () {
  return (
    <div className={categories.container}>
      <div className={categories.top}>
        <h3 className={categories.title}>Categories</h3>
        <div className={categories.line} />
      </div>
      <div className={categories.bottom}>
        {SUB_MENU.map((el) => (
          <NavLink to={el.path} className={categories.category}>
            {el.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBlock;
