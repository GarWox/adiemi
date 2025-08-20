import React from "react";
import MotoFoto from "../../../../assets/images/PortadaInicio.jpg";
import "../../../../assets/styles/reset.css";
import "../../../../assets/styles/HomeBanner.css";

const MainBanner = () => {
  return (
    <div>
      <section className="banner-container">
        {/* Parte Informativa */}
        <div className="banner-info">
          <h1>
            Renueva tu vida con <span>Promociones Adiemi</span>
          </h1>

          <div className="banner-text">
            <h3>¡Gana Premios por tu compra y puntualidad!</h3>
            <p>
              En <strong>Promociones Adiemi</strong> llevamos <b>30 años</b>{" "}
              beneficiando a mujeres emprendedoras gracias a nuestras{" "}
              <strong>ventas directas de promociones a crédito</strong>.
            </p>

            <p>
              No solo <b>te ayudamos a emprender</b>, sino que te asesoramos en
              el proceso, además de <b>premiarte</b> por tu{" "}
              <b>esfuerzo y puntualidad</b>.
            </p>

            <div className="banner-buttons">
              <button className="btn-prom">PROMOCIONES</button>
              <button className="btn-more">MÁS SOBRE NOSOTROS</button>
            </div>
          </div>
        </div>
        <div className="banner-image">
          <img src={MotoFoto} alt="Premio Adiemi" />
        </div>
      </section>
    </div>
  );
};

export default MainBanner;
