import { configureStore } from '@reduxjs/toolkit'
import { searchUserApi } from '../services/searchUsers'
import SearchReducer from './reducers/search'

export const store = configureStore({
  reducer: {
    SearchUsersList: SearchReducer,
    [searchUserApi.reducerPath]: searchUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([searchUserApi.middleware]),
})
