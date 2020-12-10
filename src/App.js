import React from 'react'
import { hot } from 'react-hot-loader'
import styles from './app.module'
import SpotifyContainer from './components/spotify-container.js'

const App = () => {
  return (
    <>
      <h2 className={styles.red}>This is our React application!</h2>
      <div className="ConnectSpotify">
        <SpotifyContainer />
      </div>
    </>
  )
}

export default hot(module)(App)
