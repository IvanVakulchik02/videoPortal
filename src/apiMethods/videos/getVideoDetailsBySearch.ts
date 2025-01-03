import { axios } from '..'

import { Videos } from './common.types'

export const getVideoDetailsBySearch = async (
  request: GetVideoDetailsBySearchRequest
): Promise<GetVideoDetailsBySearchResponse> => {
  const response = await axios.get<GetVideoDetailsBySearchResponse>('/videos', {
    params: {
      id: request.ids,
      part: 'snippet,contentDetails,statistics',
    },
  })
  return response.data
}

interface GetVideoDetailsBySearchRequest {
  ids: string
}

interface GetVideoDetailsBySearchResponse extends Videos {
  nextPageToken: string
}
