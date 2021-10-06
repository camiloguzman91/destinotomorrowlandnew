import React from 'react'

import '../assets/styles/components/Video.css'
import video1 from  '../assets/videos/a_1.mp4'
import video2 from  '../assets/videos/b_1.mp4'
import video3 from  '../assets/videos/c_1.mp4'

const Video_g = () => {
  return (
    <div>
      <section className="post-list">
        <div className="post">
          <figure className="post-image">
            <video className="html-video" src={video1} width="350" height="293" controls type="video/mp4"/>
          </figure>
        </div>
        <div className="post">
          <figure className="post-image">
            <video className="html-video" src={video2} width="350" height="293" controls></video>
          </figure>
        </div>
        <div className="post">
          <figure className="post-image">
            <video className="html-video" src={video3} width="350" height="293" controls></video>
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Video_g
