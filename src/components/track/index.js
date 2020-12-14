import React from 'react'
import * as SpotifyFunctions from '../../api/spotify.js'
import style from './styles.module.scss'

const Track = ({ name, artists, images, uri }) => {
  return (
    <div className={style.container} key={uri}>
      <img src={images} className={style.image} />
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
      </div>
    </div>
  )
}

export default Track
