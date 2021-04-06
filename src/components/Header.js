import React from 'react'
import '../assets/styles/components/Header.css'

import mainlogo from '../assets/static/tom_logo.png'

const Header = () => {
  return (
    <div className="header">
      <figure className="logo">
          <img src={mainlogo} alt="Logo Tomorrowland"/>
      </figure>
      <nav className="menu">
        <ul>
          <li>
            <a className="link" href="#Inicio">Inicio</a>
          </li>
          <li>
            <a className="link" href="https://camiloguzman91.github.io/destinotomorrowland-guia/">Guía</a>
          </li>
          <li>
            <a className="link" href="https://camiloguzman91.github.io/destinotomorrowland-galeria/">Galería fotográfica</a>
          </li>
          <li>
              <a className="link" href="https://camiloguzman91.github.io/destinotomorrowland-videos/">Videos</a>
          </li>
          <li>
            <a className="link" href="#Contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
