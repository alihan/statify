import React, { useState, useEffect } from 'react'
import * as SpotifyFunctions from '../../api/spotify.js'
import PlaylistButton from '../playlist-button'
import Track from '../track'
import Header from '../header'
import Description from '../description'

import styles from './style.module.scss'

const Stats = () => {
  const [profile, setProfile] = useState({})
  const [tracks, setTracks] = useState()
  const [term, setTerm] = useState('medium_term')
  const [loading, setLoading] = useState(true)

  function getPlaylistUrls(tracks) {
    const playlist = tracks.map(({ uri }) => uri)
    return playlist
  }

  useEffect(() => {
    const fetchMyInfo = async () => {
      let profile = await SpotifyFunctions.getMyInfo()
      let tracks = await SpotifyFunctions.getMyTracks(term)
      setProfile(profile)
      setTracks(tracks)
      setLoading(false)
    }
    fetchMyInfo()
  }, [term])

  if (loading) {
    return <h1>YÜKLENİYOR</h1>
  }

  return (
    <div className={styles.container}>
      <Header picture={profile.avatar} />
      <Description
        picture={profile.avatar}
        name={profile.name}
        setTerm={setTerm}
      />
      <div className={styles.trackContainer}>
        {tracks &&
          tracks.map(({ name, artists, images, uri }) => (
            <Track
              key={uri}
              name={name}
              artists={artists}
              images={images}
              uri={uri}
            />
          ))}
      </div>
      <PlaylistButton id={profile.id} tracks={getPlaylistUrls(tracks)} />
    </div>
  )
}

export default Stats
