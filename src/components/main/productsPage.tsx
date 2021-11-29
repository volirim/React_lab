import { useParams } from "react-router";
import "./mainPage.scss";

const Products: React.FC = function () {
  const { id } = useParams();
  return <p className="main-container">Products {id}</p>;
};

export default Products;
