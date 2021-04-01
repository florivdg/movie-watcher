// Generated by https://quicktype.io

export interface ItunesSearchResult {
  resultCount: number
  results: Result[]
}

export interface Result {
  artistName: string
  artworkUrl100: string
  artworkUrl30: string
  artworkUrl60: string
  collectionExplicitness: string
  collectionHdPrice: number
  collectionPrice: number
  contentAdvisoryRating: string
  country: string
  currency: string
  hasITunesExtras: boolean
  kind: string
  longDescription: string
  previewUrl: string
  primaryGenreName: string
  releaseDate: string
  trackCensoredName: string
  trackExplicitness: string
  trackHdPrice: number
  trackHdRentalPrice: number
  trackId: number
  trackName: string
  trackPrice: number
  trackRentalPrice: number
  trackTimeMillis: number
  trackViewUrl: string
  wrapperType: string
}
