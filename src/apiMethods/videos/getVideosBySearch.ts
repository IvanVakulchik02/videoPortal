import { axios } from '..'

import { PageInfo, Snippet } from './common.types'

export const getVideosBySearch = async (
  searchValue: string
): Promise<GetVideosBySearchResponse> => {
  const response = await axios.get<GetVideosBySearchResponse>('/search', {
    params: {
      maxResults: 100,
      part: 'snippet',
      q: searchValue,
      regionCode: 'ru',
      type: 'video',
    },
  })
  return response.data
}

interface GetVideosBySearchResponse {
  etag: string
  items: SearchItem[]
  kind: string
  nextPageToken: string
  pageInfo: PageInfo
  regionCode: string
}

interface SearchItem {
  etag: string
  id: ID
  kind: string
  snippet: Snippet
}

interface ID {
  kind: string
  videoId: string
}
