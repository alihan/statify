import React from 'react'
import { Statify } from 'components/icons'
import style from './style.module.scss'
import { useAuth } from 'context/auth'

const Header = () => {
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
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default Header
