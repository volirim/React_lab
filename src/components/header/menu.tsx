import { NavLink } from "react-router-dom";
import routes from "@/utils/Routes";

const Menu = function () {
  return (
    <nav className="nav-container">
      <ul className="menu">
        {routes.map((component) => (
          <NavLink to={component.path} className={`menu__item ${(isActive: boolean) => (isActive ? ".active" : "")}`}>
            {component.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
