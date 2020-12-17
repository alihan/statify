import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import ConnectSpotify from 'components/connect-spotify'
import Stats from 'components/stats'
import { useAuth } from 'context/auth'

const SpotifyContainer = () => {
  const { accessToken, loggedinSpotify, logInToSpotify } = useAuth()

  useEffect(() => {
    logInToSpotify()
  }, [accessToken])

  return (
    <div className={style.container}>
      {!loggedinSpotify ? <ConnectSpotify /> : <Stats />}
    </div>
  )
}

export default SpotifyContainer
