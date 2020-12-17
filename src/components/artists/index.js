import React from 'react'
import style from './style.module.scss'

const Artist = ({ number, name, images, uri }) => {
  return (
    <a href={uri}>
      <div className={style.container} key={uri}>
        <img src={images} className={style.image} alt={name} />
        <p className={style.artistName}> {name} </p>
        <p className={style.artistNumber}>{number}</p>
      </div>
    </a>
  )
}

export default Artist
