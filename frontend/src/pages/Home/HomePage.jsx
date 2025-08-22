import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../componentes/compartidos/navegation/NavBar";
import MainBanner from "./components/MainBanner/MainBanner";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import Advisor from "./components/advisorInfo/advisorInfo";
import Footer from "./components/footer/footer";
import "../../assets/styles/reset.css";
import "../../assets/styles/index.css";

const HomePage = () => {
  // Estados para manejar la sección activa y referencias a las secciones
  const [activeSection, setActiveSection] = useState("banner");
  const bannerRef = useRef(null);
  const promosRef = useRef(null);
  const advisorRef = useRef(null);
  const location = useLocation();

  // Función para desplazar suavemente a una sección específica
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Funciones específicas para cada sección
  const scrollToBanner = () => scrollTo(bannerRef);
  const scrollToPromos = () => scrollTo(promosRef);
  const scrollToAdvisor = () => scrollTo(advisorRef);

  // Manejar el scroll cuando se navega desde otra página
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      
      // Pequeño timeout para asegurar que el DOM esté completamente renderizado
      setTimeout(() => {
        switch(section) {
          case "banner":
            scrollToBanner();
            break;
          case "promos":
            scrollToPromos();
            break;
          case "advisor":
            scrollToAdvisor();
            break;
          default:
            break;
        }
        
        // Limpiar el estado para evitar que se ejecute múltiples veces
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location.state]);

  // Detecta la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === bannerRef.current) {
              setActiveSection("banner");
            } else if (entry.target === promosRef.current) {
              setActiveSection("promos");
            } else if (entry.target === advisorRef.current) {
              setActiveSection("advisor");
            }
          }
        });
      },
      { threshold: 0.5 } // Se considera visible cuando el 50% está en pantalla
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (promosRef.current) observer.observe(promosRef.current);
    if (advisorRef.current) observer.observe(advisorRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="homePage">
      <NavBar
        scrollToBanner={scrollToBanner}
        scrollToPromos={scrollToPromos}
        scrollToAdvisor={scrollToAdvisor}
        activeSection={activeSection}
      />
      <div className="mainBanner">
        <section ref={bannerRef} id="banner">
          <MainBanner />
        </section>
      </div>

      <div className="promo-slider">
        <section ref={promosRef} id="promos">
          <PromoSlider />
        </section>
      </div>

      <div className="homeSection">
        <section ref={advisorRef} id="advisor">
          <Advisor />
        </section>
      </div>

      <div className="homeSection">
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;