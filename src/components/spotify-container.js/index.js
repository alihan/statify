import React, { useEffect, useState } from 'react'
import ConnectSpotify from '../connect-spotify'
import * as SpotifyFunctions from '../../api/spotify'
import Stats from '../stats'

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

  console.log(loggedinSpotify)

  return (
    <div>
      <p>Spotify Controls</p>
      {!loggedinSpotify ? <ConnectSpotify /> : <Stats />}
    </div>
  )
}

export default SpotifyContainer
