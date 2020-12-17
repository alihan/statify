import React from 'react'
import style from './style.module.scss'
import { redirectUrlToSpotifyForLogin } from 'api/spotify.js'
import { Statify, Spotify } from 'components/icons'

const ConnectSpotify = () => {
  return (
    <div className={style.container}>
      <Statify />
      <h3 className={style.title}>Stats for Spotify</h3>
      <a href={redirectUrlToSpotifyForLogin()}>
        <button className={style.button}>
          Connect to Spotify
          <Spotify />
        </button>
      </a>
    </div>
  )
}

export default ConnectSpotify
