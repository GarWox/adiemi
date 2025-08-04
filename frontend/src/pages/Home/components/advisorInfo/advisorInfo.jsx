import React, { useState } from 'react';
import '../../../../assets/styles/advisorHome.css';

const AdvisorInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  // Datos de ejemplo de asesoras
  const advisors = [
    {
      id: 1,
      municipio: "Municipio Benítez",
      testimonio: "El municipio Benítez cuenta con una gerente de promociones Adiemi dispuesta a ofrecerte la mejor atención y ayuda necesaria para que puedas formar parte de nuestro equipo de trajo.",
      promotora: "@Promotora.1",
      image: "asesora1.jpg"
    },
    {
      id: 2,
      municipio: "Municipio Benítez",
      testimonio: "El municipio Benítez cuenta con una gerente de promociones Adiemi dispuesta a ofrecerte la mejor atención y ayuda necesaria para que puedas formar parte de nuestro equipo de trajo.",
      promotora: "@Promotora.1",
      image: "asesora1.jpg"
    },
    {
      id: 3,
      municipio: "Municipio Benítez",
      testimonio: "El municipio Benítez cuenta con una gerente de promociones Adiemi dispuesta a ofrecerte la mejor atención y ayuda necesaria para que puedas formar parte de nuestro equipo de trajo.",
      promotora: "@Promotora.1",
      image: "asesora1.jpg"
    },
    {
      id: 4,
      municipio: "Municipio Benítez",
      testimonio: "El municipio Benítez cuenta con una gerente de promociones Adiemi dispuesta a ofrecerte la mejor atención y ayuda necesaria para que puedas formar parte de nuestro equipo de trajo.",
      promotora: "@Promotora.1",
      image: "asesora1.jpg"
    },
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
    <section>
      <div>
        {/* Sección Informativa (40% ancho) */}
        <div>
          <h2>Asesoras Adiemi</h2>
          <h3>
            Conoce al <span>corazón de Adiemi</span>
          </h3>
          <p>Nuestras asesoras son profesionales clave que brindan apoyo personalizado para tu emprendimiento.</p>
          <p>Mujeres exitosas que inspiran y comparten los beneficios exclusivos de nuestra red.</p>
          
          <div>
            <h3>¿Quieres ser parte de nuestro equipo?</h3>
            <button>CLICK AQUÍ PARA MÁS INFORMACIÓN</button>
          </div>
        </div>

        {/* Carrusel de Asesoras (60% ancho) */}
        <div
          onMouseEnter={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
        >
          {showArrows && (
            <button onClick={prevAdvisors}>
              &lt;
            </button>
          )}

          <div>
            {visibleAdvisors.map((advisor) => (
              <div key={advisor.id}>
                <div 
                  className="advisor-image" 
                  style={{ backgroundImage: `url(${advisor.image})` }}
                />
                <div className="advisor-details">
                  <h4>{advisor.municipio}</h4>
                  <p>"{advisor.testimonio}"</p>
                  <p>{advisor.promotora}</p>
                </div>
              </div>
            ))}
          </div>

          {showArrows && (
            <button onClick={nextAdvisors}>
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
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvisorInfo;