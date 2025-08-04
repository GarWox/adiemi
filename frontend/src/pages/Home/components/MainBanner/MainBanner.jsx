import React from 'react'
import MotoFoto from '../../../../assets/images/Moto_adiemi.jpg'
import '../../../../assets/styles/HomeBanner.css'

const MainBanner = () => {
  return (
    <div>
      <section >
        {/* Parte Informativa */}
        <div>
          <h1>Renueva tu vida con <span>Promociones Adiemi</span></h1>

          <p>En <span>Promociones Adiemi</span> llevamos <span>30 años</span> beneficiando a mujeres emprendedoras gracias 
          a nuestras <span>ventas directas de promociones a crédito.</span></p>

          <p>No solo <span>te ayudamos a emprender</span>, sino que te asesoramos en el proceso, además de
            <span>premiarte</span> por tu <span>esfuerzo y puntualidad.</span></p>
            
          <div>
            <button>PROMOCIONES</button>
            <button>MÁS SOBRE NOSOTROS</button>
          </div>

        </div>
        <div>
          <img src={MotoFoto} alt="Premio Adiemi" />
        </div>
      </section>
    </div>
  )
}

export default MainBanner