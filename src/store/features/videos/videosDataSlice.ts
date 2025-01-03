import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { getVideoDetailsBySearch } from '../../../apiMethods/videos/getVideoDetailsBySearch'
import { getVideos } from '../../../apiMethods/videos/getVideos'
import { getVideosBySearch } from '../../../apiMethods/videos/getVideosBySearch'

import { initialVideosState } from './initialState'

export const loadVideos = createAsyncThunk(
  'videos/loadVideos',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getVideos()

      return { data }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('An unknown error occurred')
    }
  }
)

export const loadVideosBySearch = createAsyncThunk(
  'videos/loadVideosBySearch',
  async (searchValue: string, { rejectWithValue }) => {
    try {
      const response = await getVideosBySearch(searchValue)

      const videoIds = response.items.map((item) => item.id.videoId).join(',')

      const data = await getVideoDetailsBySearch({
        ids: videoIds,
      })

      return { data }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('An unknown error occurred')
    }
  }
)

const videosDataSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(loadVideos.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loadVideos.fulfilled, (state, action) => {
      state.isLoading = false
      state.defaultVideos.data = action.payload.data
    })
    builder.addCase(loadVideos.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(loadVideosBySearch.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loadVideosBySearch.fulfilled, (state, action) => {
      state.isLoading = false
      state.defaultVideos.data = action.payload.data
    })
    builder.addCase(loadVideosBySearch.rejected, (state) => {
      state.isLoading = false
    })
  },
  initialState: initialVideosState,
  name: 'videos',
  reducers: {
    setMyVideos(state, action) {
      state.myVideos.data = action.payload
    },
    setSortedVideos(state, action) {
      state.sortedVideos.data = action.payload
    },
  },
})

export const { setMyVideos, setSortedVideos } = videosDataSlice.actions

export const videosDataReducer = videosDataSlice.reducer
