import React, { useState } from 'react'
import Spotify from '../icons/spotify'
import Statify from '../icons/statify'
import SpotifyContainer from '../spotify-container.js'
import style from './style.module.scss'
import { useAuth } from '../../context/auth'

const Header = ({ picture }) => {
  const { logOutToSpotify } = useAuth()

  return (
    <nav className={style.header}>
      <div className={style.nav}>
        <div className={style.logo}>
          <Statify />
          <p>Statify</p>
        </div>

        <button
          className={style.button}
          onClick={() => {
            logOutToSpotify()
          }}
        >
          {' '}
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default Header
