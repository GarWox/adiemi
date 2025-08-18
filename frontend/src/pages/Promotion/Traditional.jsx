import React, { useState } from 'react';
// Importa imágenes
import step1 from '../../assets/images/Paso1.jpg';
import step2 from '../../assets/images/Paso2.jpg';
import step3 from '../../assets/images/Paso3.jpg';
import step4 from '../../assets/images/Pasos4.jpg';
import { Modal } from '../../componentes/ReusableModal';
import '../../assets/styles/promo.css';

const Tradicional= () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
            <div className="fullContainer">
                <div>
                    <div className="BoxImagenes">
                        <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
                    </div>
                </div>
                <div>
                    <div className='TextPartProduct'>
                        <h1>Promo Tradicional</h1>
                        <p>Por vender y cancelar una colección en <span>6 cuotas puntuales </span>
                        en las fechas pautadas, tienes la oportunidad de ganar <span>excelentes Premios</span>
                        y un <span>descuento comercial de la Promo Tradicional de 499$</span></p>
                    </div>
                    <div>
                        <p>Cantidad</p>
                        <div>
                            <input type="number" min="1" max="10" defaultValue="1" />
                            <span>unidad</span>
                        </div>
                    </div>
                    <div>
                        <select name="Options" id="">
                            <option value="">Opciones</option>
                            <option value="">Opción 1</option>
                            <option value="">Opción 2</option>
                            <option value="">Opción 3</option>
                        </select>
                        <button type="submit">Ordenar</button>
                    </div>
                    <div>
                        <h3>¿No sabes hacer tu pedido?</h3>
                        <button  onClick={() => setIsOpen(true)}>Click Para Saber Como</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Más Productos de Nuestras Promociones</h2>
                <div>
                    <Link to="/TestProduct" className="boxProducts">
                        <img src={cepilloEdiy} alt="Cepillo de peinar curly" />
                        <h3 className="titleImgProd">Cepillo de peinar curly</h3>
                    </Link>

                    <Link to="/Blog" className="boxProducts">
                        <img src={sombras} alt="Sombras de ojos faeyli" />
                        <h3 className="titleImgProd">Sombras de ojos faeyli</h3>
                    </Link>

                    {/* Enlace a componente CremaMen */}
                    <Link to="/Blog" className="boxProducts">
                        <img src={cremaMen} alt="Crema 212 sexy men" />
                        <h3 className="titleImgProd">Crema 212 sexy men</h3>
                    </Link>

                    {/* Enlace a componente BolsoColores */}
                    <Link to="/blog" className="boxProducts">
                        <img src={bolso} alt="Bolso colores" />
                        <h3 className="titleImgProd">Bolso colores</h3>
                    </Link>					
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className='titleModal'>Pasos para Hacer tu pedido</h2>
                <div className='modalContainerSteps'>
                    <div className='stepImgContainer'><img className='imgStep' src={step1} alt="pasos" /></div>
                    <div className='stepImgContainer'><img className='imgStep' src={step2} alt="pasos" /></div>
                    <div className='stepImgContainer'><img className='imgStep' src={step3} alt="pasos" /></div>
                    <div className='stepImgContainer'><img className='imgStep' src={step4} alt="pasos" /></div>
                </div>
            </Modal>
    </>
  )
}

export default Tradicional