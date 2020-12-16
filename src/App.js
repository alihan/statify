import React from 'react'
import styles from './styles/app.module.scss'
import SpotifyContainer from 'components/spotify-container.js'
import { AuthProvider } from './context/auth'

const App = () => {
  return (
    <AuthProvider>
      <SpotifyContainer />
    </AuthProvider>
  )
}

export default App
