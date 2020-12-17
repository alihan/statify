import React, { useState, useEffect } from 'react'
import { getMyArtists, getMyInfo, getMyTracks } from 'api/spotify.js'
import PlaylistButton from 'components/playlist-button'
import Header from 'components/header'
import Description from 'components/description'
import style from './style.module.scss'
import Loading from 'components/loading/index.js'
import TrackContainer from 'components/container/track-container'
import ArtistContainer from 'components/container/artist-container'
import { getTermName, getPlaylistUrls } from 'utils'

const Stats = () => {
  const [profile, setProfile] = useState({})
  const [tracks, setTracks] = useState()
  const [artists, setArtists] = useState()
  const [term, setTerm] = useState('medium_term')
  const [loading, setLoading] = useState(true)

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
    return (
      <div className={style.main}>
        <Loading />
      </div>
    )
  }

  return (
    <div className={style.container}>
      <Header picture={profile.avatar} />
      <Description
        picture={profile.avatar}
        name={profile.name}
        setTerm={setTerm}
      />
      <ArtistContainer artists={artists} term={getTermName(term)} />
      <TrackContainer tracks={tracks} term={getTermName(term)} />
      <PlaylistButton
        uid={profile.id}
        tracks={getPlaylistUrls(tracks)}
        name={getTermName(term)}
      />
    </div>
  )
}

export default Stats
