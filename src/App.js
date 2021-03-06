import React from 'react'
import './styles/app.module.scss'
import SpotifyContainer from 'components/spotify-container'
import { AuthProvider } from './context/auth'

const App = () => {
  return (
    <AuthProvider>
      <SpotifyContainer />
    </AuthProvider>
  )
}

export default App
