import React from 'react'
import styles from './styles.module.scss'
import * as SpotifyFunctions from '../../api/spotify.js'
import Spotify from '../icons/spotify'
import Statify from '../icons/statify'

const ConnectSpotify = () => {
  return (
    <div className={styles.container}>
      <Statify />
      <h3 className={styles.title}>Stats for Spotify</h3>
      <a href={SpotifyFunctions.redirectUrlToSpotifyForLogin()}>
        <button className={styles.button}>
          Connect to Spotify
          <Spotify />
        </button>
      </a>
    </div>
  )
}

export default ConnectSpotify
