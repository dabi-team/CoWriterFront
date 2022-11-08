import { configureStore } from '@reduxjs/toolkit'
import { formApiSlice } from './services/example'


export const store = configureStore({
  reducer: {
    [formApiSlice.reducerPath]: formApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(formApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch