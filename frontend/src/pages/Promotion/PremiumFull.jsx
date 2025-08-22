import React, { useState } from 'react';
import PromoPF from '../../assets/images/PremiumFull.jpg';
import opcion1 from '../../assets/images/pFullOpcion1.jpg';
import opcion2 from '../../assets/images/pFulOpcion2.jpg';
import opcion3 from '../../assets/images/pFullOpcion3.jpg';
import step1 from '../../assets/images/Paso1.jpg';
import step2 from '../../assets/images/Paso2.jpg';
import step3 from '../../assets/images/Paso3.jpg';
import step4 from '../../assets/images/Pasos4.jpg';
import { Modal } from '../../componentes/ReusableModal';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NavBar from '../../componentes/compartidos/navegation/NavBar';
import '../../assets/styles/promo.css';
import '../../assets/styles/tradicional.css'

const PremiumFull = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('opcion2');
    const [quantity, setQuantity] = useState('1');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [orderData, setOrderData] = useState({
      promotionName: '',
      orderNumber: '',
      prize: ''
    });
  
    // Array de imágenes para el carrusel
    const carouselImages = [
      { id: 1, src: PromoPF, alt: "Promo Premium Full" },
      { id: 2, src: opcion1, alt: "Opción 1" },
      { id: 3, src: opcion2, alt: "Opción 2" },
      { id: 4, src: opcion3, alt: "Opción 3" }
    ];
  
    // Datos de las opciones con sus premios
    const opcionesData = {
      opcion2: { premio: "Opción 2" },
      opcion3: { premio: "Opción 3" },
      opcion4: { premio: "Opción 4" }
    };
  
    // Funciones para navegar el carrusel
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    const handleOrder = () => {
      const orderNumber = `PED-${Math.floor(1000 + Math.random() * 9000)}`;
      const premioSeleccionado = opcionesData[selectedOption];
      
      setOrderData({
        promotionName: "Promoción Premium Full",
        orderNumber: orderNumber,
        prize: premioSeleccionado.premio
      });
      
      setIsOrderModalOpen(true);
    };
  
    const closeOrderModal = () => {
      setIsOrderModalOpen(false);
    };
  
    return (
      <>
        <NavBar />
        <div className="promo-container">
          {/* Carrusel de imágenes */}
          <div className="carousel-container">
            <div className="carousel">
              <div 
                className="carousel-inner"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={image.id} className="carousel-slide">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>
  
              {/* Botones de navegación */}
              <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                <IoIosArrowBack/>
              </button>
              <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                <IoIosArrowForward/>
              </button>
  
              {/* Indicadores */}
               
            </div>
            <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
          </div>
  
          {/* Información de la promoción */}
          <div className="promo-info">
            <div className="promo-header">
              <h2>Promoción Premium Full</h2>
            </div>
            
            <div className="promo-description">
              <p>
                Por vender y cancelar una colección en <span>6 cuotas puntuales</span> en las fechas pautadas, 
                tienes la oportunidad de ganar <span>excelentes premios de la Promo 
                PremiumFull de 499$.</span>
              </p>
            </div>
  
            {/* Selectores */}
            <div className="promo-selectors">
              <div className="selector-quantity">
                <span>Cantidad:</span>
                <select 
                  name="cantidad" 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option value="1">1 unidad</option>
                  <option value="2">2 unidades</option>
                  <option value="3">3 unidades</option>
                  <option value="4">4 unidades</option>
                  <option value="5">5 unidades</option>
                  <option value="6">6 unidades</option>
                </select>
              </div>
              
              <div className="selector-option">
                <select 
                  name="option" 
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="opcion2">Opción 2</option>
                  <option value="opcion3">Opción 3 </option>
                  <option value="opcion4">Opción 4</option>
                </select>
                <button onClick={handleOrder} className="order-btn">
                  Ordenar
                </button>
              </div>
            </div>
            <div className="help-section">
              <h3>¿No sabes hacer tu pedido?</h3>
              <button onClick={() => setIsOpen(true)} className="help-btn">
                Click Para Saber Como
              </button>
            </div>
          </div>
        </div>
  
        {/* Modal de pasos */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="titleModal">Pasos para Hacer tu pedido</h2>
          <div className="modalContainerSteps">
            <div className="stepImgContainer">
              <img className="imgStep" src={step1} alt="Paso 1" />
            </div>
            <div className="stepImgContainer">
              <img className="imgStep" src={step2} alt="Paso 2" />
            </div>
            <div className="stepImgContainer">
              <img className="imgStep" src={step3} alt="Paso 3" />
            </div>
            <div className="stepImgContainer">
              <img className="imgStep" src={step4} alt="Paso 4" />
            </div>
          </div>
        </Modal>
  
        {/* Modal de confirmación de orden */}
        <Modal isOpen={isOrderModalOpen} onClose={closeOrderModal}>
          <div className="order-confirmation">
            <div className='details-part'>
              <h2>Orden de Pedido</h2>
            
              <div className="order-details">
                <div className="order-item">
                  <strong>Promoción:</strong>
                  <span>{orderData.promotionName}</span>
                </div>
                
                <div className="order-item">
                  <strong>Número de Pedido:</strong>
                  <span className="order-number">{orderData.orderNumber}</span>
                </div>
                
                
                <div className="order-item">
                  <strong>Premio:</strong>
                  <span className="prize">{orderData.prize}</span>
                </div>
                
                <div className="order-item">
                  <strong>Cantidad:</strong>
                  <span>{quantity} unidad(es)</span>
                </div>
  
                <div className='order-note'>
                  <p>
                    Nota: te estaremos contactando en un lapso de 7 días, si no te hemos contactado en ese tiempo
                    por favor comunícate con soporte técnico.
                  </p>
                </div>
              </div>
            </div>
            <div className='imagen-part' >
              <div className='image-container'>
                <img src={PromoPF} alt="promo Tradicional" />
              </div>
              <button onClick={closeOrderModal} className="close-btn">
                Confirmar
              </button>
            </div>
            
          </div>
        </Modal>
      </>
    );
}

export default PremiumFull