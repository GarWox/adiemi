import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/compartidos/navegation/NavBar';
import cepilloEdiy from '../../assets/images/Cepillo Ediy.jpg';
import bolso from '../../assets/images/bolso.jpg';
import cremaMen from '../../assets/images/crema men.jpg';
import sombras from '../../assets/images/Sombras faeyli.jpg';
import '../../assets/styles/products.css';

const Product = () => {
  return (
    <>
      <NavBar />
      <h2 className="titleProducts">Productos Adiemi</h2>
      <div className="productsContainer">
        <Link to="/TestProduct" className="boxProducts">
          <img src={cepilloEdiy} alt="Cepillo de peinar curly" />
          <h3 className="titleImgProd">Cepillo de peinar curly</h3>
        </Link>

        <Link to="/Blog" className="boxProducts">
          <img src={sombras} alt="Sombras de ojos faeyli" />
          <h3 className="titleImgProd">Sombras de ojos faeyli</h3>
        </Link>

        {/* Enlace a componente CremaMen */}
        <Link to="/Blog" className="boxProducts">
          <img src={cremaMen} alt="Crema 212 sexy men" />
          <h3 className="titleImgProd">Crema 212 sexy men</h3>
        </Link>

        {/* Enlace a componente BolsoColores */}
        <Link to="/blog" className="boxProducts">
          <img src={bolso} alt="Bolso colores" />
          <h3 className="titleImgProd">Bolso colores</h3>
        </Link>
      </div>
    </>
  );
};

export default Product;