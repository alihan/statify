import Spotify from 'spotify-web-api-js'

const spotifyApi = new Spotify()
let globalAccessToken = ''

export function redirectUrlToSpotifyForLogin() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
  const scopes = [
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
    '&response_type=token&show_dialog=true'
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
    const playlistResponse = await spotifyApi.getMe()
    const {
      id,
      country,
      display_name,
      external_urls: { spotify },
      images: [{ url }]
    } = playlistResponse
    const personInfo = {
      id,
      country,
      name: display_name,
      link: spotify,
      avatar: url
    }
    return personInfo
  } catch (err) {
    console.error('Error: Attempting to get user information', err)
    console.error(err.stack)
    return [{ id: null }]
  }
}

export async function getMyTracks(term) {
  try {
    const tracksResponse = await spotifyApi.getMyTopTracks({
      limit: 50,
      time_range: term
    })
    const tracks = tracksResponse.items.map((item) => {
      const {
        album: { artists, images },
        name,
        uri
      } = item
      return {
        number: tracksResponse.items.indexOf(item) + 1,
        name,
        artists,
        images: images[0].url,
        uri
      }
    })
    return tracks
  } catch (err) {
    console.error('Error: Attempting to get user information', err)
    console.error(err.stack)
    return [{ id: null, album: "Can't get your tracks info!" }]
  }
}

export async function createPlaylist(uid, name, tracks) {
  try {
    const playlistResponse = await spotifyApi.createPlaylist(uid, {
      name: name,
      public: false
    })

    const { id } = playlistResponse

    const addTracksResponse = await spotifyApi.addTracksToPlaylist(id, tracks)
    return addTracksResponse
  } catch (err) {
    console.error('Error: Attempting to create playlist', err)
    console.error(err.stack)
    return [{ id: null }]
  }
}

export async function getMyArtists(term) {
  try {
    const artistsResponse = await spotifyApi.getMyTopArtists({
      limit: 50,
      time_range: term
    })
    const artists = artistsResponse.items.map((item) => {
      const { images, name, uri } = item
      return {
        number: artistsResponse.items.indexOf(item) + 1,
        name,
        images: images[0].url,
        uri
      }
    })
    return artists
  } catch (err) {
    console.error('Error: Attempting to get user information', err)
    console.error(err.stack)
    return [{ id: null, album: "Can't get your tracks info!" }]
  }
}
