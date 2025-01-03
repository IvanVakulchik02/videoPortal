import { axios } from '..'

import { Videos } from './common.types'

export const getVideoById = async (
  id: string
): Promise<GetVideoByIdResponse> => {
  const response = await axios.get<GetVideoByIdResponse>('/videos', {
    params: {
      id,
      part: 'snippet,contentDetails,statistics',
    },
  })
  return response.data
}

export type GetVideoByIdResponse = Videos
