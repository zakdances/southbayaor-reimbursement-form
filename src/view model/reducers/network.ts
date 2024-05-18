
export type NetworkState = {
    request?: Promise<any>;
  };

  // Define your initial state
export const networkInitialState: NetworkState = {
  request: undefined
};

export type NetworkAction =
  | { type: 'network/editRequest', payload: {request?: Promise<any>} }

// Define your reducer function to handle state updates
const networkReducer = (state: NetworkState, action: NetworkAction): NetworkState => {
    // Handle different action.
    switch (action.type) {
      case 'network/editRequest': {
        // const newNetworkState = [...state];
        // newFileLists[action.payload.index] = action.payload.fileList;
        return {
          ...state,
          request: action.payload.request
        };
      }
      default:
        return state;
    }
  };

export default networkReducer;