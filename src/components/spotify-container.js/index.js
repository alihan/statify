import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ConnectSpotify from '../connect-spotify'
import * as SpotifyFunctions from '../../api/spotify'
import Stats from '../stats'
import Statify from '../icons/statify'

const SpotifyContainer = () => {
  const [loggedinSpotify, setLoggedinSpotify] = useState(false)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken()
    if (accessToken) {
      setAccessToken(accessToken)
      setLoggedinSpotify(true)
      localStorage.setItem('token', accessToken)
    }
  }, [])

  return (
    <div className={styles.container}>
      {!loggedinSpotify ? <ConnectSpotify /> : <Stats />}
    </div>
  )
}

export default SpotifyContainer
