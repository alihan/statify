import React from 'react'
import * as SpotifyFunctions from '../../api/spotify.js'

const ConnectSpotify = () => {
  return (
    <div>
      <a href={SpotifyFunctions.redirectUrlToSpotifyForLogin()}>
        <button>Connect to Spotify</button>
      </a>
    </div>
  )
}

export default ConnectSpotify
