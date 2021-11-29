import { NavLink } from "react-router-dom";
import categories from "./categories.module.scss";

const CategoriesBlock = function () {
  return (
    <div className={categories.container}>
      <div className={categories.top}>
        <h3 className={categories.title}>Categories</h3>
        <div className={categories.line} />
      </div>
      <div className={categories.bottom}>
        <NavLink to="products/pc" className={categories.category}>
          PC
        </NavLink>
        <NavLink to="products/playstation" className={categories.category}>
          PLAYSTATION
        </NavLink>
        <NavLink to="products/xbox" className={categories.category}>
          XBOX
        </NavLink>
      </div>
    </div>
  );
};

export default CategoriesBlock;
