import React, { useState, useContext, createContext } from 'react'
import * as SpotifyFunctions from 'api/spotify'
import cookie from 'js-cookie'

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
    let token = cookie.get('accessToken')

    if (token) {
      SpotifyFunctions.setAccessToken(token)
      setLoggedinSpotify(true)
      setAccessToken(token)
    } else if (accessToken) {
      let inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000)
      setAccessToken(accessToken)
      setLoggedinSpotify(true)
      cookie.set('accessToken', accessToken, { expires: inOneHour })
    }
  }

  const logOutToSpotify = () => {
    cookie.remove('accessToken')
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
