import React from 'react'
import '../assets/styles/components/Hero.css'
import MainImg from '../assets/static/Principal_m.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-text">
        <h1>
          <strong>Guía Tomorrowland</strong> <br/> 
          <strong className="strong4">desde </strong> 
          <strong className="strong1">Colo</strong>
          <strong className="strong2">mb</strong>
          <strong className="strong3">ia</strong>
        </h1>
      </section>
      <section className="main-image">
        <img src={MainImg} alt="asdad"></img>
      </section>
    </div>
  )
}

export default Hero
