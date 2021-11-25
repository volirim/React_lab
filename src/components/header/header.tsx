import Menu from "./modules/navMenu/menu";

const Header: React.FC = function () {
  return (
    <header className="header-container">
      <h1 className="header__title">Game Store</h1>
      <Menu />
    </header>
  );
};

export default Header;
