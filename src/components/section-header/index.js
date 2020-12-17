import React from 'react'
import style from './style.module.scss'

const SectionHeader = ({ images, title }) => {
  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>{title}</h1>
      <img src={images} alt="name" className={style.banner}/>
    </div>
  )
}

export default SectionHeader
