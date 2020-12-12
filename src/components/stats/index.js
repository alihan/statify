import React, { useState, useEffect } from 'react'
import * as SpotifyFunctions from '../../api/spotify.js'

const Stats = () => {
  const [profile, setProfile] = useState({})

  async function fetcMyInfo() {
    let playlists = await SpotifyFunctions.getMyInfo()
    let tracks = await SpotifyFunctions.getMyTracks()
    console.log(tracks)
    setProfile(playlists)
  }

  useEffect(() => {
    fetcMyInfo()
  }, [])

  return (
    <div>
      <img src={profile.avatar} />
      <p>{profile.name}</p>
      <p>{profile.country}</p>
      <p>{profile.link}</p>
      <p>Stats!</p>
    </div>
  )
}

export default Stats
