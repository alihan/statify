import React from 'react'
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
