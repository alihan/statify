export function getPlaylistUrls(tracks) {
  const playlist = tracks.map(({ uri }) => uri)
  return playlist
}

export function getTermName(term) {
  if (term === 'short_term') return 'Recent'
  else if (term === 'long_term') return 'All Time'
  else if (term === 'medium_term') return 'Seasonal'
}
