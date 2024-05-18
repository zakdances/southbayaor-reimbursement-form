import { createAction, createReducer, AnyAction, PayloadAction } from '@reduxjs/toolkit'
// import JargonautCard, { JargonautCardData } from '../../model/JargonautCard'

interface DialogMessage {
  text: string,
  showSpinner?: boolean,
  showCloseButton?: boolean
}

interface dialogState {
  open: boolean,
  message: DialogMessage
}

const initialState = {
  open: false,
  message: {
    text: ''
  }
} as dialogState;

export const editDialogOpen = createAction<boolean>('editDialogOpen', );
export const editDialogMessage = createAction<DialogMessage>('editDialogMessage', );

// export const removejCard = createAction<string>('removejCard')

const dialogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editDialogOpen, (state, action) => {
      state.open = action.payload
    })
    .addCase(editDialogMessage, (state, action) => {
      state.message = action.payload
    })
})

export default dialogReducer;