import React, { useState } from 'react';
import '../../../../assets/styles/advisorHome.css';
import gerente1 from '../../../../assets/images/Gerente1.jpg'
import gerente2 from '../../../../assets/images/Gerente2.jpg'
import gerente3 from '../../../../assets/images/Gerente3.jpg'

const AdvisorInfo= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  // Datos de ejemplo de asesoras
  const advisors = [
    {
      id: 1,
      municipio: "Municipio Benítez",
      testimonio: "Gerente de promociones con 5 años de experiencia ayudando a nuevas emprendedoras.",
      promotora: "@Promotora.1",
      image: gerente1,
    },
    {
      id: 2,
      municipio: "Municipio Cruz Salmerón",
      testimonio: "Especialista en desarrollo de negocios para emprendedoras Adiemi.",
      promotora: "@Promotora.2",
      image: gerente2,
    },
    {
      id: 3,
      municipio: "Municipio Rivas",
      testimonio: "Líder de ventas regional con amplia experiencia en capacitación.",
      promotora: "@Promotora.3",
      image: gerente3
    },
    {
      id: 4,
      municipio: "Municipio Andrés Eloy",
      testimonio: "Coordinadora de nuevas incorporaciones al equipo Adiemi.",
      promotora: "@Promotora.4",
      image: gerente2
    }
  ];

  const visibleAdvisors = [
    advisors[currentIndex % advisors.length],
    advisors[(currentIndex + 1) % advisors.length]
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
          <h3 className="titleSecondary">
            Conoce al <span>corazón de Adiemi</span>
          </h3>
          <p>Nuestras gerentes son una de las partes <span>más importantes</span> de <span>Adiemi</span>, conoce a nuestras gerentes según tu zona.</p>
          <p><span>Mujeres exitosas </span>que inspiran y comparten los beneficios exclusivos de Adiemi.</p>
          
          <div className="highlighBox">
            <h3>¿Quieres ser parte de nuestro equipo?</h3>
            <button className="btnMore">CLICK AQUÍ PARA MÁS INFORMACIÓN</button>
          </div>
        </div>

        {/* Carrusel de Asesoras (60% ancho) */}
        <div className="managerCarrusel"
          onMouseEnter={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
        >
          {showArrows && (
            <button className="carouselArrow prev" onClick={prevAdvisors}>
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
            <button className="carouselArrow next" onClick={nextAdvisors}>
              &gt;
            </button>
          )}
        </div>
      </div>

      {/* Indicadores */}
      <div className="carouselIndicators">
        {advisors.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvisorInfo;