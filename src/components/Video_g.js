import React from 'react'

import '../assets/styles/components/Video.css'

const Video_g = () => {
  return (
    <div>
      <section className="post-list">
        <a href="" className="post">
          <figure className="post-image">
            <video className="html-video" src="Imágenes/a_1.mp4" width="350" height="293" controls></video>
          </figure>
        </a>
        <a href="" className="post">
          <figure className="post-image">
            <video className="html-video" src="Imágenes/b_1.mp4" width="350" height="293" controls></video>
          </figure>
        </a>
        <a href="" className="post">
          <figure className="post-image">
            <video className="html-video" src="Imágenes/c_1.mp4" width="350" height="293" controls></video>
          </figure>
        </a>
      </section>
    </div>
  )
}

export default Video_g
