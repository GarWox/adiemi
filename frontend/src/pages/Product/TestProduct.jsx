import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/compartidos/navegation/NavBar';
import sombras from '../../assets/images/Sombras faeyli.jpg';
import cremaMen from '../../assets/images/crema men.jpg'
import bolso from '../../assets/images/bolso.jpg';
import '../../assets/styles/products.css';
import '../../assets/styles/testsProduct.css'
import cepilloEdiy from '../../assets/images/Cepillo Ediy.jpg';
 
const TestProduct = () => {
  return (
    <>
			<NavBar />
			<div className="full-container">
				<div>
					<div className="Box-imagenes">
						<img src={cepilloEdiy} alt="Cepillo Ediy" />
					</div>
				</div>
				<div>
					<div className='info-box'>
						<h1>Cepillo de peinar curly</h1>
						<p>
							Gracias a su froma ergonómica y púas flexibles, ayuda a desenredar el cabello sin romper la fibra capilar,
							también elimina el exceso de agua , haciendo más fácil e secar posteriormente el cabello
						</p>
						<span>Especial para Rizadas, puede variar el color</span>

						<button>Ver Promociones</button>
					</div>
					
				</div>
			</div>
			<div className='container-relation'>
				<h2>Más Productos de Nuestras Promociones</h2>
				<div className='relation-products'>

					<Link to="/Blog" className="">
						<img src={sombras} alt="Sombras de ojos faeyli" />
						<h3 >Sombras de ojos faeyli</h3>
					</Link>

					<Link to="/Blog">
						<img src={cremaMen} alt="Crema 212 sexy men" />
						<h3 >Crema 212 sexy men</h3>
					</Link>

					<Link to="/blog" >
						<img src={bolso} alt="Bolso colores" />
						<h3 >Bolso colores</h3>
					</Link>					
				</div>
			</div>
			
    </>
  )
}

export default TestProduct