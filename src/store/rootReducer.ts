import { combineReducers } from '@reduxjs/toolkit'

import { userDataReducer } from './features/userData/userDataSlice'
import { videoDetailsDataReducer } from './features/videoDetails/videoDetailsDataSlice'
import { videosDataReducer } from './features/videos/videosDataSlice'

const reducers = {
  user: userDataReducer,
  videoDetails: videoDetailsDataReducer,
  videos: videosDataReducer,
}

export const rootReducer = combineReducers(reducers)
export type RootState = ReturnType<typeof rootReducer>
