import { Item } from '../../../apiMethods/videos/common.types'
import { GetVideosResponse } from '../../../apiMethods/videos/getVideos'

export const initialVideosState: VideosInitialState = {
  defaultVideos: {
    data: undefined,
  },

  isLoading: false,
  myVideos: {
    data: undefined,
  },
  sortedVideos: {
    data: undefined,
  },
}

interface VideosInitialState {
  defaultVideos: {
    data: GetVideosResponse | undefined
  }
  isLoading: boolean
  myVideos: {
    data: MyVideos[] | undefined
  }
  sortedVideos: {
    data: Item[] | undefined
  }
}

export interface MyVideos {
  createdDate: string
  id: string
  imgUrl: string
  title: string
}
