// importaciones necesarias te hice la importación de una vez del estito pero esta vacio si no te da chance yo lo hago en la mañana
import React, { useState } from 'react';
import PromoT from '../../assets/images/Tradicional.jpg';
import opcion1 from '../../assets/images/tradicionalOpcion2.jpg';
import opcion2 from '../../assets/images/tradicional opcion3.jpg';
import opcion3 from '../../assets/images/tradicional opcion4.jpg';
import { Modal } from '../../componentes/ReusableModal'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import step1 from '../../assets/images/Paso1.jpg';
import step2 from '../../assets/images/Paso2.jpg';
import step3 from '../../assets/images/Paso3.jpg';
import step4 from '../../assets/images/Pasos4.jpg';
import '../../assets/styles/promo.css';
import '../../assets/styles/tradicional.css'

const Traditional = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('opcion2');
  const [quantity, setQuantity] = useState('1');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [orderData, setOrderData] = useState({
    promotionName: '',
    orderNumber: '',
    customerName: '',
    prize: ''
  });

  // Array de imágenes para el carrusel
  const carouselImages = [
    { id: 1, src: PromoT, alt: "Promo Tradicional" },
    { id: 2, src: opcion1, alt: "Opción 1" },
    { id: 3, src: opcion2, alt: "Opción 2" },
    { id: 4, src: opcion3, alt: "Opción 3" }
  ];

  // Datos de las opciones con sus premios
  
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
      promotionName: "Promoción Tradicional",
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
      <div>
        {/* Carrusel de imágenes */}
        <div >
          <div>
            <div>
              {carouselImages.map((image, index) => (
                <div key={image.id}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                  />
                  <div>{index + 1}</div>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button><IoIosArrowBack /></button>
            <button ><IoIosArrowForward /></button>

            {/* Indicadores (donde dice indicator y active esas son clases)*/}
            <div>
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Información de la promoción */}
        <div>
          <div>
            <h2>Promoción Tradicional</h2>
          </div>
          
          <div>
            <p>
              Por vender y cancelar una colección en <span>6 cuotas puntuales</span> en las fechas pautadas, 
              tienes la oportunidad de ganar <span>excelentes premios</span> y un <span>descuento comercial de la Promo 
              tradicional de 499$.</span>
            </p>
          </div>

          {/* Selectores */}
          <div>
            <div>
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
            
            <div>
              <select 
                name="option" 
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="opcion2">Opción 2 </option>
                <option value="opcion3">Opción 3 </option>
                <option value="opcion4">Opción 4 </option>
              </select>
              <button onClick={handleOrder}>
                Ordenar
              </button>
            </div>
          </div>
        </div>

        {/* Instrucciones para hacer un pedido*/}
        <div>
          <h3>¿No sabes hacer tu pedido?</h3>
          <button onClick={() => setIsOpen(true)}>
            Click Para Saber Como
          </button>
        </div>
      </div>

      {/* Modal de pasos */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Pasos para Hacer tu pedido</h2>
        <div>
          <div>
            <img src={step1} alt="Paso 1" />
          </div>
          <div >
            <img src={step2} alt="Paso 2" />
          </div>
          <div >
            <img src={step3} alt="Paso 3" />
          </div>
          <div>
            <img src={step4} alt="Paso 4" />
          </div>
        </div>
      </Modal>

      {/* Modal de confirmación de orden */}
      <Modal isOpen={isOrderModalOpen} onClose={closeOrderModal}>
        <div>
          <h2>¡Orden Confirmada!</h2>
          
          <div>
            <div>
              <strong>Promoción:</strong>
              <span>{orderData.promotionName}</span>
            </div>
            
            <div>
              <strong>Número de Pedido:</strong>
              <span>{orderData.orderNumber}</span>
            </div>
            
            <div>
              <strong>Nombre:</strong>
              <span>{orderData.customerName}</span>
            </div>
            
            <div>
              <strong>Premio:</strong>
              <span>{orderData.prize}</span>
            </div>
            
            <div>
              <strong>Cantidad: </strong>
              <span>{quantity} unidad(es)</span>
            </div>
          </div>
					<div>
						<p>
							Nota: te estaremos contactando en un lapso de 7 días, si no te hemos contactado en ese tiempo
							por favor comunícate con soporte técnico.
						</p>
					</div>
          <button onClick={closeOrderModal}>
            Cerrar
          </button>
        </div>
				<div>
					<div>
						<img src={PromoT} alt="" />
					</div>
					<button onClick={closeOrderModal}>
            Cerrar
          </button>
				</div>
      </Modal>
    </>
  );
};

export default Traditional;