import React from 'react'

import '../assets/styles/NotFound.css'

const NotFound = () => {
  return (
    <div id='oopss'>
      <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <span>404</span>
        <p class="p-a">Parece que te has perdido</p>
        <p class="p-b">Lo que estás buscando no se encuentra acá</p>
        <a href='/' class="back">Regresar</a>
      </div>
    </div>
  )
}

export default NotFound
