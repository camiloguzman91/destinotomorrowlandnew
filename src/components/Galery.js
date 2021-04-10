import React from 'react'
import '../assets/styles/components/Galery.css'

import a from "../assets/static/Galery/a.jpg"
import b from "../assets/static/Galery/b.jpg"
import c from "../assets/static/Galery/c.jpg"
import d from "../assets/static/Galery/d.jpg"
import e from "../assets/static/Galery/e.jpg"
import f from "../assets/static/Galery/f.jpg"
import g from "../assets/static/Galery/g.jpg"
import h from "../assets/static/Galery/h.jpg"
import i from "../assets/static/Galery/i.jpg"

const Galery = () => {

  return (
    <div className="post-list">
      <a href="" className="post">
        <figure className="post-image">
          <img src={a} alt="Escenario principal" />
        </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={b} alt="" />
        </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={c} alt="" />
        </figure>
      </a>
      <a href="" className="post">
          <figure className="post-image">
            <img src={d} alt="" />
          </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={e} alt="" />
        </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={f} alt="" />
        </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={g} alt="" />
        </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={h} alt="" />
        </figure>
      </a>
      <a href="" className="post">
        <figure className="post-image">
          <img src={i} alt="" />
        </figure>
      </a>
    </div>
  )
}

export default Galery
