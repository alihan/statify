import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ConnectSpotify from '../connect-spotify'
import * as SpotifyFunctions from '../../api/spotify'
import Stats from '../stats'
import Statify from '../icons/statify'
import Spotify from '../icons/spotify'

const SpotifyContainer = () => {
  const [loggedinSpotify, setLoggedinSpotify] = useState(false)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken()
    let token = localStorage.getItem('token')
    if (token) {
      SpotifyFunctions.setAccessToken(token)
      setLoggedinSpotify(true)
    } else if (accessToken) {
      setAccessToken(accessToken)
      setLoggedinSpotify(true)
      localStorage.setItem('token', accessToken)
    }
  }, [accessToken])

  return (
    <div className={styles.container}>
      {!loggedinSpotify ? <ConnectSpotify /> : <Stats logIn={setLoggedinSpotify} />}
    </div>
  )
}

export default SpotifyContainer
