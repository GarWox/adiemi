import React, { useState } from "react";
import "../../../../assets/styles/advisorHome.css";
import gerente1 from "../../../../assets/images/Yunmary_Garcia.jpg";
import gerente2 from "../../../../assets/images/Mairelis_Rodríguez.jpg";
import gerente3 from "../../../../assets/images/Amada_Gonzáles.jpg";

const AdvisorInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  // Datos de ejemplo de asesoras
  const advisors = [
    {
      id: 1,
      gerente: "Yunmary Garcia",
      testimonio:
        "“Promociones Adiemi tiene una gerente que ofrece a la zona de Maturin, Caripe, Puerto La Cruz y Barcelona, donde la calidad de variaciones de productos será tu mejor opción para poder equipar tu hogar.”",
      image: gerente1,
    },
    {
      id: 2,
      gerente: "Mairelis Rodríguez",
      testimonio:
        "“Tu éxito también es el mío, por eso, como gerente de Adiemi, estoy comprometida a apoyarte, impulsarte y ser tu aliada en cada paso que des. ¡Cuentas conmigo!”",
      image: gerente2,
    },
    {
      id: 3,
      gerente: "Amada Gonzáles",
      testimonio:
        "“Le brindo a los clientes la gran oportunidad de equipar su casa con una experiencia excepcional. Soy esencial para construir lealtad y una marca duradera para así satisfacer la necesidad de los clientes, su felicidad no tiene precio.”",
      image: gerente3,
    },
  ];

  const visibleAdvisors = [
    advisors[currentIndex % advisors.length],
    advisors[(currentIndex + 1) % advisors.length],
  ];

  const nextAdvisors = () => {
    setCurrentIndex((prev) => (prev + 1) % advisors.length);
  };

  const prevAdvisors = () => {
    setCurrentIndex((prev) => (prev - 1 + advisors.length) % advisors.length);
  };

  return (
    <section className="managerSection">
      <div className="managerContainer">
        {/* Sección Informativa (40% ancho) */}
        <div className="managerInfo">
          <h2>Gerentes de tu zona</h2>
          <div className="title-bar"></div>
          <br />
          <h3 className="title-secondary">
            Conoce al <span>corazón de Adiemi</span>
          </h3>
          <div className="manager-description">
            <p>
              Nuestras gerentes son una de las partes&nbsp;
              <span>más importantes</span> de <span>Adiemi</span>, conoce a
              nuestras gerentes según tu zona.
            </p>
            <p>
              <span>Mujeres exitosas </span>que inspiran y comparten los
              beneficios exclusivos de Adiemi.
            </p>
          </div>

          <div className="highlight-box">
            <h3>¿Quieres ser parte de nuestro equipo?</h3>
            <button className="btn-more">
              CLICK AQUÍ PARA MÁS INFORMACIÓN
            </button>
          </div>
        </div>

        {/* Carrusel de Asesoras (60% ancho) */}
        <div className="managerCarrusel"
          onMouseEnter={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
        >
          {showArrows && (
            <button className="carousel-arrow prev" onClick={prevAdvisors}>
              &lt;
            </button>
          )}

          <div className="managerCardsContainer">
            {visibleAdvisors.map((advisor) => (
              <div key={advisor.id} className="managerCard">
                <div 
                  className="managerImage" 
                  style={{ backgroundImage: `url(${advisor.image})` }}
                />
                <div className="managerDetails">
                  <h4>{advisor.municipio}</h4>
                  <p className="testimonial">"{advisor.testimonio}"</p>
                  <p className="promoter">{advisor.promotora}</p>
                </div>
              </div>
            ))}
          </div>

          {showArrows && (
            <button className="carousel-arrow next" onClick={nextAdvisors}>
              &gt;
            </button>
          )}
        </div>
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {advisors.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvisorInfo;
