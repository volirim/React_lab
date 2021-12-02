import DropDownMenu from "@/components/dropdownMenu/dropDownMenu";
import routes from "@/utils/Routes";
import "@szhsin/react-menu/dist/index.css";
import nav from "./menu.module.scss";
import MenuElement from "./menuElement/menuElement";

const NavMenu = function () {
  return (
    <nav className={nav.container}>
      <ul className={nav.menu}>
        {routes.map((component) => {
          if (!component.options.length) {
            return <MenuElement component={component} />;
          }
          return <DropDownMenu component={component} />;
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
