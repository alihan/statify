import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ConnectSpotify from 'components/connect-spotify'
import Stats from 'components/stats'
import { useAuth } from 'context/auth'

const SpotifyContainer = () => {
  const { accessToken, loggedinSpotify, logInToSpotify } = useAuth()

  useEffect(() => {
    logInToSpotify()
  }, [accessToken])

  return (
    <div className={styles.container}>
      {!loggedinSpotify ? <ConnectSpotify /> : <Stats />}
    </div>
  )
}

export default SpotifyContainer
