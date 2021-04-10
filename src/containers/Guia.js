import React from 'react'
import Header from '../components/Header';
import InfoGuia from '../components/InfoGuide';
import GuideCont from '../components/GuideCont';
import Footer from '../components/Footer';

const Guia = () => {
  return (
    <div className="App">
      <Header />
      <InfoGuia />
      <GuideCont />
      <Footer />  
    </div>
  )
}

export default Guia
