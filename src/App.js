import React from 'react'
import { hot } from 'react-hot-loader'
import styles from './styles/app.module.scss'
import SpotifyContainer from './components/spotify-container.js'

const App = () => {
  return <SpotifyContainer />
}

export default hot(module)(App)
