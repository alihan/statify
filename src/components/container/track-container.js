import SectionHeader from 'components/section-header'
import Track from 'components/track'
import React from 'react'
import style from './style.module.scss'

const TrackContainer = ({ term, tracks }) => {
  let { images } = tracks[0]
  return (
    <section className={style.section}>
      <SectionHeader title="Tracks" images={images} />
      <div className="">
        <h3>{term}</h3>
        <p>{}</p>
      </div>
      <div className={style.container}>
        {tracks &&
          tracks.map(({ number, name, artists, images, uri }) => (
            <Track
              key={uri}
              number={number}
              name={name}
              artists={artists}
              images={images}
              uri={uri}
            />
          ))}
      </div>
    </section>
  )
}

export default TrackContainer
