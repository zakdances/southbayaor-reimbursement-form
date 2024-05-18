import { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import formReducer from './reducers/form';
import dialogReducer from './reducers/dialog';
import fileListsReducer, { FileListsAction, FileListsState, fileListsInitialState } from './reducers/formFileInput';
import { NetworkAction, NetworkState, networkInitialState } from './reducers/network';
import mainContextReducer from './reducers/MainContextReducer';
// import favoritesMiddleware from './middleware';

// const middlewareEnhancer = applyMiddleware(favoritesMiddleware)

const store = configureStore({
  reducer: {
    form: formReducer,
    dialog: dialogReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(favoritesMiddleware),
})

export type MainContextState = {
  files: FileListsState,
  network: NetworkState
};

const mainContextInitialState: MainContextState = {
  files: fileListsInitialState,
  network: networkInitialState
}

export const MainContext = createContext<{
  contextState: MainContextState,
  contextDispatch: Dispatch<FileListsAction | NetworkAction>
}>({
  contextState: mainContextInitialState,
  contextDispatch: () => null
});

// Create a provider component that will wrap your app and provide the store to all components
// const [state, dispatch] = useReducer(fileListsReducer, fileListsInitialState);
export const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
  const [contextState, contextDispatch] = useReducer(mainContextReducer, mainContextInitialState);

  return (
    <MainContext.Provider value={{contextState, contextDispatch}}>
      {children}
    </MainContext.Provider>
  );
}

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch