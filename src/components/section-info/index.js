import React from 'react'
import style from './style.module.scss'

const SectionInfo = ({ term, section }) => {
  let description = `Here are your ${term} top 30 ${section} according to Spotify.`

  return (
    <div className={style.titleContainer}>
      <h3 className={style.infoHeader}>{term}</h3>
      <p className={style.infoDescription}>{description}</p>
    </div>
  )
}

export default SectionInfo
