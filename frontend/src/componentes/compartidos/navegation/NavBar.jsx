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
  const location = useLocation();

  const isProductPage =
    location.pathname === "/Product" || location.pathname === "/TestProduct";
  
  // Verifica si estamos en la página de inicio
  const isHomePage = location.pathname === "/";

  // Función para manejar el clic en los botones de navegación
  const handleNavigation = (section, scrollFunction) => {
    if (isHomePage) {
      // Si estamos en home, hacemos scroll
      scrollFunction();
    } else {
      // Si estamos en otra página, navegamos a home y pasamos la sección como estado
      navigate("/", { state: { scrollTo: section } });
    }
  };

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
          onClick={() => handleNavigation("banner", scrollToBanner)}
          className={activeSection === "banner" ? "active" : ""}
        >
          Inicio
        </button>

        <button
          onClick={() => handleNavigation("promos", scrollToPromos)}
          className={activeSection === "promos" ? "active" : ""}
        >
          Promociones
        </button>

        <button
          onClick={() => handleNavigation("advisor", scrollToAdvisor)}
          className={`nav-hide ${activeSection === "advisor" ? "active" : ""}`}
        >
          Sobre nosotros
        </button>

        <button
          onClick={() => navigate("/Product")}
          className={isProductPage ? "active" : ""}
        >
          Productos
        </button>

        <button onClick={() => navigate("/Blog")} className="nav-hide">Blog</button>
      </div>
      {/* boton de iniciar sesión */}
      <div>
        <button className="navbar-login nav-hide">Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default NavBar;