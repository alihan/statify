import React from 'react'
import Statify from '../icons/statify'
import style from './style.module.scss'

const Header = ({ picture }) => {
  return (
    <nav className={style.header}>
      <div className={style.nav}>
        <div className={style.logo}>
          <Statify />
          <p>Statify</p>
        </div>
        <img src={picture} alt="profile" className={style.avatar} />
      </div>
    </nav>
  )
}

export default Header
