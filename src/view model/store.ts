import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import formReducer from './reducers/form';
// import favoritesMiddleware from './middleware';

// const middlewareEnhancer = applyMiddleware(favoritesMiddleware)

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(favoritesMiddleware),
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch