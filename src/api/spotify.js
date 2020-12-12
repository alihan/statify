import Spotify from 'spotify-web-api-js'

const spotifyApi = new Spotify()
let globalAccessToken = ''

export function redirectUrlToSpotifyForLogin() {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
  const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI
  const scopes = [
    'user-modify-playback-state',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private'
  ]
  return (
    'https://accounts.spotify.com/authorize?client_id=' +
    CLIENT_ID +
    '&redirect_uri=' +
    encodeURIComponent(REDIRECT_URI) +
    '&scope=' +
    encodeURIComponent(scopes.join(' ')) +
    '&response_type=token'
  )
}
export function checkUrlForSpotifyAccessToken() {
  const params = getHashParams()
  const accessToken = params.access_token
  if (!accessToken) {
    return false
  } else {
    setAccessToken(accessToken)
    return accessToken
  }
}

function getHashParams() {
  var hashParams = {}
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1)
  window.location.hash = ''
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2])
  }
  return hashParams
}

export function setAccessToken(accessToken) {
  spotifyApi.setAccessToken(accessToken)
  globalAccessToken = accessToken
}

export async function getMyInfo() {
  try {
    const personResponse = await spotifyApi.getMe()
    const {
      country,
      display_name,
      external_urls: { spotify },
      images: [{ url }]
    } = personResponse
    const personInfo = {
      country: country,
      name: display_name,
      link: spotify,
      avatar: url
    }
    return personInfo
  } catch (err) {
    console.error('Error: Attempting to get user information', err)
    console.error(err.stack)
    return [{ id: null, playlistName: "Can't get your info!" }]
  }
}

export async function getMyTracks() {
  try {
    const personResponse = await spotifyApi.getMyTopTracks({ limit: 50 })
    console.log(personResponse)
  } catch (err) {
    console.error('Error: Attempting to get user information', err)
    console.error(err.stack)
    return [{ id: null, playlistName: "Can't get your info!" }]
  }
}
