import React from 'react'
import { createPlaylist } from 'api/spotify.js'
import style from './styles.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PlaylistButton = ({ uid, tracks, name }) => {
  const successToast = () =>
    toast.success('🚀 Your playlist is created!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: '#1db954',
        color: '#white',
        fontFamily: 'Inter',
        fontSize: '18px',
        borderRadius: '8px'
      }
    })

  const errorToast = () =>
    toast.error('🥺 Playlist could not be created.', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: '#eb1e32',
        color: 'white',
        fontFamily: 'Inter',
        fontSize: '18px',
        borderRadius: '8px'
      }
    })

  async function createPlaylistAddTracks(uid, tracks, name) {
    let id = await createPlaylist(uid, name, tracks)
    if (id === undefined) {
      errorToast()
    } else {
      successToast()
    }
  }

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => createPlaylistAddTracks(uid, tracks, name)}
      >
        Create Playlist
      </button>
      <ToastContainer />
    </div>
  )
}

export default PlaylistButton
