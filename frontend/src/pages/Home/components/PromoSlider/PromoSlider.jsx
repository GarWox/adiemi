import React, { useState, useEffect } from 'react';
import promo1 from '../../../../assets/images/Producto1.jpg';
import promo2 from '../../../../assets/images/Producto2.jpg';
import promo3 from '../../../../assets/images/Producto3.jpg';
import { Modal } from '../../../../componentes/ReusableModal';
import '../../../../assets/styles/promo.css';

const PromoSlider = () => {
  // mini base de datos de promociones
  const promotions = [
    { id: 1, title: "Tradicional", image: promo1},
    { id: 2, title: "Premium Full", image: promo2},
    { id: 3, title: "Repleta", image: promo3,},
    { id: 4, title: "Premium Full Star", image: promo1},
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getVisibleCards = () => {
      const cards = [];
      for (let i = 0; i < 3; i++) {
        const effectiveIndex = (currentIndex + i) % promotions.length;
        cards.push(promotions[effectiveIndex]);
      }
      return cards;
    };
    setVisibleCards(getVisibleCards());
  }, [currentIndex, promotions.length]); 

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <section className="promoSliderSection">
      <div className='promTitle'>
        <h2 className="sectionTitle">Promociones Destacadas</h2>
      </div>
      
      <div className="sliderContainer">
        {/* boton de previos */}
        <button className="navButton prev" onClick={prevSlide}>
          &lt;
        </button>
        {/* contenedor de las tarjetas de promociones */}
        <div className="cardsContainer">
          {visibleCards.map((promo) => (
            <div key={`${promo.id}-${currentIndex}`} className="promoCard">
              <div className="imageWrapper">
                <img src={promo.image} alt={promo.title} />
                
              </div>
              {/* la parte del titulo */}
              <div className="cardContent">
                <h3>{promo.title}</h3>
                {/* <button className="shop-button">Ver más</button> */}
                {/* este lo incorporare despues porque tengo que preguntar si el ver mas va para la versión beta */}
              </div>
            </div>
          ))}
        </div>

        <button className="navButton next" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <div className="dotsContainer">
        {promotions.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex % promotions.length ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className='pedidoContainer'>
        <div>
          <h3>¿No sabes hacer tu pedido?</h3>
        </div>
        <div>
          <button onClick={() => setIsOpen(true)} className=''>Click aquí para saber cómo</button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Contenido Personalizado</h2>
        <p>tralalu Tralala</p>
      </Modal>
    </section>

  );
};

export default PromoSlider;