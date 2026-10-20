import "./OrderPage.css";
import { NavLink, useParams } from "react-router-dom";

const OrderPage = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <button>
        <NavLink to="/">Déconnexion</NavLink>
      </button>
    </div>
  );
};

export default OrderPage;
