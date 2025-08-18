import React from 'react'
import MotoFoto from '../../../../assets/images/Moto_adiemi.jpg'
import '../../../../assets/styles/HomeBanner.css'

const MainBanner = () => {
  return (
    <div>
      <section  className="banerContainer" >
        {/* Parte Informativa */}
        <div className='bannerInfo'>
            <h1>Renueva tu vida con</h1>
            <h2>Promociones Adiemi</h2>
            
          <div className='bannerText'>
            <h3>¡Gana Premios por tu compra y puntualidad!</h3>
            <p>En <span>Promociones Adiemi</span> llevamos <span>30 años</span> beneficiando a mujeres emprendedoras gracias 
            a nuestras <span>ventas directas de promociones a crédito.</span></p>

            <p>No solo <span>te ayudamos a emprender</span>, sino que te asesoramos en el proceso, además de
            <span>premiarte</span> por tu <span>esfuerzo y puntualidad.</span></p>
            
            <div className='bannerButtons'>
              <button className='btnprom'>PROMOCIONES</button>
              <button className='btnmore'>MÁS SOBRE NOSOTROS</button>
            </div>
          </div>

        </div>
        <div className='bannerImage'>
          <img src={MotoFoto} alt="Premio Adiemi" />
        </div>
      </section>
    </div>
  )
}

export default MainBanner