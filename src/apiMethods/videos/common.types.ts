export interface Videos {
  etag: string
  items: Item[]
  kind: string
  pageInfo: PageInfo
}

export interface Item {
  contentDetails: ContentDetails
  etag: string
  id: string
  kind: string
  snippet: Snippet
  statistics: Statistics
}

interface ContentDetails {
  caption: string
  contentRating: ContentRating
  definition: string
  dimension: string
  duration: string
  licensedContent: boolean
  projection: string
}

interface ContentRating {}

export interface Snippet {
  categoryId: string
  channelId: string
  channelTitle: string
  defaultAudioLanguage: string
  description: string
  liveBroadcastContent: string
  localized: Localized
  publishedAt: Date
  tags: string[]
  thumbnails: Thumbnails
  title: string
}

interface Localized {
  description: string
  title: string
}

interface Thumbnails {
  default: Default
  high: Default
  maxres: Default
  medium: Default
  standard: Default
}

interface Default {
  height: number
  url: string
  width: number
}

export interface Statistics {
  commentCount: string
  favoriteCount: string
  likeCount: string
  viewCount: string
}

export interface PageInfo {
  resultsPerPage: number
  totalResults: number
}
