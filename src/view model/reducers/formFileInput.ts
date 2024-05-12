
export type FileListsState = {
    fileLists: (FileList | undefined)[];
  };

  // Define your initial state
export const fileListsInitialState: FileListsState = {
  fileLists: [undefined]
};

export type FileListsAction =
  | { type: 'form/chooseFile', payload: {index: number, fileList: FileList | undefined} }
  | { type: 'form/addFileInput' }
  | { type: 'form/removeFileInput', payload: {index: number} };

// Define your reducer function to handle state updates
const fileListsReducer = (state: FileListsState, action: FileListsAction): FileListsState => {
    // Handle different action.
    switch (action.type) {
      case 'form/chooseFile': {
        const newFileLists = [...state.fileLists];
        newFileLists[action.payload.index] = action.payload.fileList;
        return {
          ...state,
          fileLists: newFileLists
        };
      }
      case 'form/addFileInput': {
        const newFileLists = [...state.fileLists, undefined];
        return {
          ...state,
          fileLists: newFileLists
        };
      }
      case 'form/removeFileInput': {
        const newFileLists = [...state.fileLists];
        newFileLists.splice(action.payload.index, 1);
        return {
          ...state,
          fileLists: newFileLists
        };
      }
      default:
        return state;
    }
  };

export default fileListsReducer;