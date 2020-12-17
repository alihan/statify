import React from 'react'
import style from './style.module.scss'

const Track = ({ number, name, artists, images, uri }) => {
  return (
    <a href={uri}>
      <div className={style.container} key={uri}>
        <img src={images} className={style.image} alt={name} />
        <div className={style.trackInfo}>
          <p className={style.songName}> {name} </p>
          <span className={style.name} key={name}>
            {artists.map(({ name }) => {
              return (
                <span key={name} className={style.artists}>
                  {name}
                </span>
              )
            })}
          </span>
          <p className={style.songNumber}>{number}</p>
        </div>
      </div>
    </a>
  )
}

export default Track
