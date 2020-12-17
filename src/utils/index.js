export function getPlaylistUrls(tracks) {
  const playlist = tracks.map(({ uri }) => uri)
  return playlist
}

export function getTermName(term) {
  if (term === 'short_term') return 'recent'
  else if (term === 'long_term') return 'all Time'
  else if (term === 'medium_term') return 'seasonal'
}
