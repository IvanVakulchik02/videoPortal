import { axios } from '..'

import { Videos } from './common.types'

export const getVideos = async (): Promise<GetVideosResponse> => {
  const response = await axios.get<GetVideosResponse>('/videos', {
    params: {
      chart: 'mostPopular',
      maxResults: 100,
      order: 'date',
      part: 'snippet,contentDetails,statistics',
      regionCode: 'ru',
      type: 'video',
    },
  })
  return response.data
}

export interface GetVideosResponse extends Videos {
  nextPageToken: string
}
