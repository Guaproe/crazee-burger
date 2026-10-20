import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>ErrorPage</h1>
      <button>
        <NavLink to="/">Retourner à la page d'accueil</NavLink>
      </button>
    </div>
  );
};

export default ErrorPage;
