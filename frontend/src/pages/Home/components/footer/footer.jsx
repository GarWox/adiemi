import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import logo from '../../../../assets/images/logoAdiemi.png';
const footer = () => {
  return (
    <footer>
        <div>
            <div>
                <img src={logo} alt="Adiemi" />
            </div>
            <div>
                <h3>Productos</h3>
                <ul>
                    <li><a href="">Promociones</a></li>
                    <li><a href="">¿Cómo hacer tu pedido?</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div>
                <h3>Sobre Nosotros</h3>
                <ul>
                    <li><a href="">¿Quiénes somos?</a></li>
                    <li><a href="">Ubicación</a></li>
                    <li><a href="">Gerentes</a></li>
                </ul>
            </div>
            <div>
                <h3>Ayuda</h3>
                <ul>
                    <li><a href="">Preguntas Frecuentes</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>¡Siguenos en nuestras redes sociales!</h2>
            <div>
                <a href="https://www.instagram.com/promocionesadiemi/" target="_blank"><FaInstagram /></a>
                <a href="https://www.facebook.com/adiemi.adiemi.1?locale=es_LA" target="_blank"><FaFacebook /></a>
                <a href="https://www.tiktok.com/@promosadiemioficial?_t=ZM-8yzDBPngdqa&_r=1" target="_blank"><AiFillTikTok /></a>
                <a href="https://www.youtube.com/@promocionesAdiemi" target="_blank"><FaYoutube /></a>
            </div>
        </div>
        <div>
        &copy; {new Date().getFullYear()} Promociones Adiemi. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default footer
