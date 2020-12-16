import React from 'react'
import style from './styles.module.scss'

const Artist = ({ number, name, images, uri }) => {
  return (
    <a href={uri}>
      <div className={style.container} key={uri}>
        <img src={images} className={style.image} alt={name} />
        <div className={style.ArtistInfo}>
          <p className={style.songName}> {name} </p>
          <p className={style.songName}>{number}</p>
        </div>
      </div>
    </a>
  )
}

export default Artist
