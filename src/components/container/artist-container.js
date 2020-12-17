import Artist from 'components/artists'
import SectionHeader from 'components/section-header'
import SectionInfo from 'components/section-info'
import React from 'react'
import style from './style.module.scss'

const ArtistContainer = ({ term, artists }) => {
  let { images } = artists[0]
  return (
    <section className={style.artistSection}>
      <SectionHeader title="Artists" images={images} />
      <SectionInfo section="artists" term={term} />
      <div className={style.container}>
        {artists &&
          artists.map(({ number, name, images, uri }) => (
            <Artist
              key={uri}
              number={number}
              name={name}
              images={images}
              uri={uri}
            />
          ))}
      </div>
    </section>
  )
}

export default ArtistContainer
