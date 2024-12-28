import { createSlice } from '@reduxjs/toolkit'

import { initialUserState } from './initialState'

const userDataSlice = createSlice({
  initialState: initialUserState,
  name: 'user',
  reducers: {
    removeUser(state) {
      state.email = null
      state.id = null
      state.token = null
    },
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.token = action.payload.token
    },
  },
})

export const { removeUser, setUser } = userDataSlice.actions

export const userDataReducer = userDataSlice.reducer