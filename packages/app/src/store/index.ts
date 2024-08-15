import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebar'
import registrationReducer from './slices/registration'
import designReducer from './slices/design'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    registration: registrationReducer,
    design: designReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
