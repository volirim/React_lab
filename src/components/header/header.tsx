import Menu from "./modules/navMenu/menu";
import header from "./header.module.scss";

const Header: React.FC = function () {
  return (
    <header className={header.container}>
      <h1 className={header.title}>Game Store</h1>
      <Menu />
    </header>
  );
};

export default Header;
