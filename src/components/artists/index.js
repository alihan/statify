import React from 'react'
import style from './style.module.scss'

const Artist = ({ number, name, images, uri }) => {
  return (
    <div className={style.container} key={uri}>
      <a href={uri}>
        <img src={images} className={style.image} alt={name} />
      </a>
      <p className={style.artistName}> {name} </p>
      <p>{number}</p>
    </div>
  )
}

export default Artist
