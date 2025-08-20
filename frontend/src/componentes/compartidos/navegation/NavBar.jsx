// aqui son las importaciones necesarias
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logoAdiemi.png";
import "../../../assets/styles/navBar.css";

const NavBar = ({
  scrollToBanner,
  scrollToPromos,
  scrollToAdvisor,
  activeSection,
}) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ruta actual

  // Verifica si la ruta actual incluye "/productos" o rutas de productos
  const isProductPage =
    location.pathname === "/Product" || location.pathname === "/TestProduct";

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar-logo">
        <button onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </button>
      </div>
      {/* enlances de navegacion */}
      <div className="navbar-links">
        <button
          onClick={scrollToBanner}
          className={activeSection === "banner" ? "active" : ""}
        >
          Inicio
        </button>

        <button
          onClick={scrollToPromos}
          className={activeSection === "promos" ? "active" : ""}
        >
          Promociones
        </button>

        <button
          onClick={scrollToAdvisor}
          className={activeSection === "advisor" ? "active" : ""}
        >
          Sobre nosotros
        </button>

        <button
          onClick={() => navigate("/Product")}
          className={isProductPage ? "active" : ""}
        >
          Productos
        </button>

        <button onClick={() => navigate("/Blog")}>Blog</button>
      </div>
      {/* boton de iniciar sesión */}
      <div>
        <button className="navbar-login">Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default NavBar;
