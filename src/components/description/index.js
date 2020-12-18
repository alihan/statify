import React from 'react'
import style from './style.module.scss'

const Header = ({ picture, name, setTerm }) => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <img src={picture} alt="profile" className={style.img} />
        <p className={style.description}>
          Hey {name}, check out your favorite tracks & artists below.
        </p>
      </div>
      <div className={style.buttonContainer}>
        <button onClick={() => setTerm('short_term')} className={style.button}>
          Recent
        </button>
        <button onClick={() => setTerm('medium_term')} className={style.button}>
          Seasonal
        </button>
        <button onClick={() => setTerm('long_term')} className={style.button}>
          All Time
        </button>
      </div>
    </section>
  )
}

export default Header
