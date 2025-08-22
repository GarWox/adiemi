import React from "react";
import Logo from "../../assets/images/logoAdiemi.png";
import "../../assets/styles/blog.css";

const Blog = () => {
  return (
    <section className="construction-section">
      <div className="logo-container">
        <img src={Logo} alt="Adiemi" />
      </div>
      <div className="construction-message">
        <h1>
          Lo siento, estamos en <span>CONSTRUCCIÓN</span>
        </h1>
        <p>
          Nos vemos pronto en la página oficial de{" "}
          <span>Promociones Adiemi</span>
        </p>
      </div>
    </section>
  );
};

export default Blog;
