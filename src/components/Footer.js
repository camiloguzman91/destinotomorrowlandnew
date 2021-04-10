import React from 'react'
import '../assets/styles/components/Footer.css'

import mainlogoblack from '../assets/static/tom_logo_n.png'

const Footer = () => {
  return (
    <div id="Contact">
      <div className="contact">
        <div className="container-final">
          <form action="/Contacto/" className="form-email">
            <h3 className="event-list-title-1">Contacto</h3>
            <p><small><strong>Correo electrónico: </strong>camiloge_91@hotmail.com</small></p>
            <p><small><strong>Número celular: </strong>-----</small></p>      
          </form>
          <div className="social">
            <a href="https://twitter.com/camiloguzman_91" className="social-link twitter" target="_blank" rel="noreferrer"></a>
            <a href="https://www.facebook.com/Camilo.Guzman91" className="social-link facebook" target="_blank" rel="noreferrer"></a>
            <a href="https://www.instagram.com/camiloguzman_91/" className="social-link instagram" target="_blank" rel="noreferrer"></a>
            <a href="https://www.youtube.com/channel/UCVsWK0bZ2ya6eAK7LjBtDQg?view_as=subscriber" className="social-link youtube" target="_blank" rel="noreferrer"></a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Destino Tomorrowland. 2021 <img src={mainlogoblack} alt="Logo" />
        </p>
        <p>
          Designed by <a href="https://twitter.com/camiloguzman_91" target="_blank" rel="noreferrer">@camiloguzman_91</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
