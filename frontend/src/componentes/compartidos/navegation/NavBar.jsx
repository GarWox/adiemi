// aqui son las importaciones necesarias
import React, { useState } from 'react';
import logo from '../../../assets/images/logoAdiemi.png';
import '../../../assets/styles/navBar.css'


const NavBar = ({ scrollToBanner, scrollToPromos, scrollToAdvisor, activeSection }) => {

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar-logo">
        <button 
          onClick={scrollToBanner}
          className={activeSection === 'banner' ? 'active' : ''}
        >
          <img src={logo} alt="Logo" />
        </button>
      </div>
      {/* enlances de navegacion */}
      <div className="navbar-links">
        <button 
          onClick={scrollToBanner}
          className={activeSection === 'banner' ? 'active' : ''}
        >
          Inicio
        </button>
        
        <button 
          onClick={scrollToPromos}
          className={activeSection === 'promos' ? 'active' : ''}
        >
          Promociones
        </button>
        
        <button 
          onClick={scrollToAdvisor}
          className={activeSection === 'advisor' ? 'active' : ''}
        >
          Empleados
        </button>

        <button>
          Blog
        </button>
      </div>
      {/* boton de iniciar sesión */}
      <div>
        <button>Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default NavBar;