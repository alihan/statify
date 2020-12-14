import React from 'react'
import * as SpotifyFunctions from '../../api/spotify.js'
import style from './styles.module.scss'

const PlaylistButton = ({ id, tracks }) => {
  async function createPlaylist(id, tracks) {
    let playlist = await SpotifyFunctions.createPlaylist(id)
    SpotifyFunctions.addSongsToPlaylist(playlist, tracks)
  }

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => createPlaylist(id, tracks)}
      >
        Create Playlist
      </button>
    </div>
  )
}

export default PlaylistButton
