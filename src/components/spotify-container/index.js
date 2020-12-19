import React, { useEffect } from 'react'
import style from './style.module.scss'
import { useAuth } from 'context/auth'
import ConnectSpotify from 'components/connect-spotify'
import Stats from 'components/stats'

const SpotifyContainer = () => {
  const { loggedinSpotify, logInToSpotify } = useAuth()

  useEffect(() => {
    logInToSpotify()
  })

  return (
    <div className={style.container}>
      {!loggedinSpotify ? <ConnectSpotify /> : <Stats />}
    </div>
  )
}

export default SpotifyContainer
