import React, { useEffect, useState } from 'react'
import ConnectSpotify from '../connect-spotify'
import * as SpotifyFunctions from '../../api/spotify'

const SpotifyContainer = () => {
  const [loggedinSpotify, setLoggedinSpotify] = useState(false)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken()
    if (accessToken) {
      setAccessToken(accessToken)
      setLoggedinSpotify(true)
    }
  })

  return (
    <div>
      <p>Spotify Controls</p>
      {!loggedinSpotify ? (
        <ConnectSpotify />
      ) : (
        <p>{`We are in! Access token is ${accessToken}`}</p>
      )}
    </div>
  )
}

export default SpotifyContainer