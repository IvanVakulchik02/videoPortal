import { GetVideoByIdResponse } from '../../../apiMethods/videos/getVideoById'

export const initialVideoDetailsState: VideoDetailsInitialState = {
  data: undefined,
  isLoading: false,
}

interface VideoDetailsInitialState {
  data: GetVideoByIdResponse | undefined
  isLoading: boolean
}
