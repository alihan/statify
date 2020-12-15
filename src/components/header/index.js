import React from 'react'
import Spotify from '../icons/spotify'
import Statify from '../icons/statify'
import SpotifyContainer from '../spotify-container.js'
import style from './style.module.scss'

const Header = ({ picture, logout }) => {
  return (
    <nav className={style.header}>
      <div className={style.nav}>
        <div className={style.logo}>
          <Statify />
          <p>Statify</p>
        </div>
        <img src={picture} alt="profile" className={style.avatar} />
        <button
          onClick={() => {
            localStorage.removeItem('token')
            logout(false)
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
