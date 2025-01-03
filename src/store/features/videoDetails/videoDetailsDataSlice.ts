import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { getVideoById } from '../../../apiMethods/videos/getVideoById'

import { initialVideoDetailsState } from './initialState'

export const loadVideoDetails = createAsyncThunk(
  'videoDetails/loadVideoDetails',
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await getVideoById(id)

      return { data }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('An unknown error occurred')
    }
  }
)

const videoDetailsDataSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(loadVideoDetails.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loadVideoDetails.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload.data
    })
    builder.addCase(loadVideoDetails.rejected, (state) => {
      state.isLoading = false
    })
  },
  initialState: initialVideoDetailsState,
  name: 'videoDetails',
  reducers: {},
})

export const videoDetailsDataReducer = videoDetailsDataSlice.reducer
