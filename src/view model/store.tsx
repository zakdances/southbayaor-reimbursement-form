import { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import formReducer from './reducers/form';
import dialogReducer from './reducers/dialog';
import fileListsReducer, { FileListsAction, FileListsState, fileListsInitialState } from './reducers/formFileInput';
// import favoritesMiddleware from './middleware';

// const middlewareEnhancer = applyMiddleware(favoritesMiddleware)

const store = configureStore({
  reducer: {
    form: formReducer,
    dialog: dialogReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(favoritesMiddleware),
})

export const FileListsContext = createContext<{
  contextState: FileListsState;
  contextDispatch: Dispatch<FileListsAction>;
}>({
  contextState: fileListsInitialState,
  contextDispatch: () => null
});

// Create a provider component that will wrap your app and provide the store to all components
// const [state, dispatch] = useReducer(fileListsReducer, fileListsInitialState);
export const FileListsProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
  const [contextState, contextDispatch] = useReducer(fileListsReducer, fileListsInitialState);

  return (
    <FileListsContext.Provider value={{contextState, contextDispatch}}>
      {children}
    </FileListsContext.Provider>
  );
}

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch