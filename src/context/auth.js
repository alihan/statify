import React, { useState, useContext, createContext } from 'react'
import * as SpotifyFunctions from '../api/spotify'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [loggedinSpotify, setLoggedinSpotify] = useState(false)
  const [accessToken, setAccessToken] = useState(null)

  const logInToSpotify = () => {
    const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken()
    let token = localStorage.getItem('token')
    if (token) {
      SpotifyFunctions.setAccessToken(token)
      setLoggedinSpotify(true)
      setAccessToken(token)
    } else if (accessToken) {
      setAccessToken(accessToken)
      setLoggedinSpotify(true)
      localStorage.setItem('token', accessToken)
    }
  }

  const logOutToSpotify = () => {
    localStorage.removeItem('token')
    setLoggedinSpotify(false)
  }

  return {
    loggedinSpotify,
    setLoggedinSpotify,
    logInToSpotify,
    accessToken,
    logOutToSpotify
  }
}
