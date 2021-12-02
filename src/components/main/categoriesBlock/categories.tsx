import { NavLink } from "react-router-dom";
import routes from "@/utils/Routes";
import categories from "./categories.module.scss";

const CategoriesBlock = function () {
  return (
    <div className={categories.container}>
      <div className={categories.top}>
        <h3 className={categories.title}>Categories</h3>
        <div className={categories.line} />
      </div>
      <div className={categories.bottom}>
        {routes[1].options.map((el) => (
          <NavLink to={el.path} className={categories.category}>
            {el.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBlock;
