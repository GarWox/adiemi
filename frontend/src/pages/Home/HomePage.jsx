// importaciones necesarias, aqui tambien se esportaron los otros componentes
import React, { useRef, useState, useEffect } from 'react';
import NavBar from '../../componentes/compartidos/navegation/NavBar';
import MainBanner from './components/MainBanner/MainBanner';
import PromoSlider from './components/PromoSlider/PromoSlider';
import Advisor from './components/advisorInfo/advisorInfo';

const HomePage = () => {
  // Estados para manejar la sección activa y referencias a las secciones
  const [activeSection, setActiveSection] = useState('banner');
  const bannerRef = useRef(null);
  const promosRef = useRef(null);
  const advisorRef = useRef(null);

  // Función para desplazar suavemente a una sección específica
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Detecta la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === bannerRef.current) {
              setActiveSection('banner');
            } else if (entry.target === promosRef.current) {
              setActiveSection('promos');
            } else if (entry.target === advisorRef.current) {
              setActiveSection('advisor');
            }
          }
        });
      }, 
      { threshold: 0.5 } // Se considera visible cuando el 50% está en pantalla
    );

    observer.observe(bannerRef.current);
    observer.observe(promosRef.current);
    observer.observe(advisorRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-page">
      <NavBar 
        scrollToBanner={() => scrollTo(bannerRef)}
        scrollToPromos={() => scrollTo(promosRef)}
        scrollToAdvisor={() => scrollTo(advisorRef)}
        activeSection={activeSection}
      />
      
      <section ref={bannerRef} className="home-section">
        <MainBanner />
      </section>
      
      <section ref={promosRef} className="home-section">
        <PromoSlider />
      </section>
      
      <section ref={advisorRef} className="home-section">
        <Advisor />
      </section>
    </div>
  );
};

export default HomePage;