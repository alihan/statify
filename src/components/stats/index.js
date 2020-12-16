import React, { useState, useEffect } from 'react'
import { getMyArtists, getMyInfo, getMyTracks } from 'api/spotify.js'
import PlaylistButton from 'components/playlist-button'
import Track from 'components/track'
import Header from 'components/header'
import Description from 'components/description'
import styles from './style.module.scss'
import Loading from 'components/loading/index.js'
import Artist from 'components/artists'

const Stats = () => {
  const [profile, setProfile] = useState({})
  const [tracks, setTracks] = useState()
  const [artists, setArtists] = useState()
  const [term, setTerm] = useState('medium_term')
  const [loading, setLoading] = useState(true)

  function getPlaylistUrls(tracks) {
    const playlist = tracks.map(({ uri }) => uri)
    return playlist
  }

  function getPlaylistName() {
    if (term === 'short_term') return 'Recent Songs'
    else if (term === 'long_term') return 'All Time Songs'
    else if (term === 'medium_term') return 'Seasonal Songs'
  }

  useEffect(() => {
    const fetchMyInfo = async () => {
      let profile = await getMyInfo()
      let tracks = await getMyTracks(term)
      let artists = await getMyArtists(term)
      setArtists(artists)
      setProfile(profile)
      setTracks(tracks)
      setLoading(false)
    }
    fetchMyInfo()
  }, [term])

  if (loading) {
    return <Loading />
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
          tracks.map(({ number, name, artists, images, uri }) => (
            <Track
              key={uri}
              number={number}
              name={name}
              artists={artists}
              images={images}
              uri={uri}
            />
          ))}

        {artists &&
          artists.map(({ number, name, images, uri }) => (
            <Artist
              key={uri}
              number={number}
              name={name}
              images={images}
              uri={uri}
            />
          ))}
      </div>
      <PlaylistButton
        uid={profile.id}
        tracks={getPlaylistUrls(tracks)}
        name={getPlaylistName(term)}
      />
    </div>
  )
}

export default Stats
