import { combineReducers } from '@reduxjs/toolkit'

import { userDataReducer } from './features/userData/userDataSlice'

const reducers = {
  user: userDataReducer,
}

export const rootReducer = combineReducers(reducers)
export type RootState = ReturnType<typeof rootReducer>
