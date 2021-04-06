import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/guia">Guía</Link>
          </li>
          <li>
            <Link to="/galeria">Galería fotográfica</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
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
