import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './feature/userApi/userApi'
import userReducer from './feature/userApi/userSlice'
import { imageApi } from './feature/imageApi/imageApi'
import { addressApi } from './feature/addressApi/addressApi'
import cartReducer  from './feature/cartApi/cartSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    cart : cartReducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disables the check
    }).concat(userApi.middleware).concat(imageApi.middleware).concat(addressApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)