import { MainContextState } from "../store";
import fileListsReducer, { FileListsAction } from "./formFileInput";
import networkReducer, { NetworkAction } from "./network";

export type MainContextAction = 
  | FileListsAction
  | NetworkAction;

// Reducer function to handle state updates
const mainContextReducer = (state: MainContextState, action: MainContextAction): MainContextState => {
    // Handle different action.
    // const actionType = typeof action;
    const actionPrefix = action.type.split('/')[0];

    switch (actionPrefix) {
      case 'form': {
        return {
          ...state,
          files: fileListsReducer(state.files, action as FileListsAction)
        };
      }
      case 'network': {
        return {
          ...state,
          network: networkReducer(state.network, action as NetworkAction)
        };
      }
      default:
        return state;
    }
  };

  export default mainContextReducer;