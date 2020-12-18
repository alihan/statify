import SectionHeader from 'components/section-header'
import SectionInfo from 'components/section-info'
import Track from 'components/track'
import React from 'react'
import style from './style.module.scss'

const TrackContainer = ({ term, tracks }) => {
  let { images } = tracks[0]
  return (
    <section className={style.trackSection}>
      <SectionHeader title="Tracks" images={images} />
      <SectionInfo section="tracks" term={term} />
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
