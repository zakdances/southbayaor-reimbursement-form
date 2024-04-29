import { createAction, createReducer, AnyAction, PayloadAction } from '@reduxjs/toolkit'
// import JargonautCard, { JargonautCardData } from '../../model/JargonautCard'

interface formState {
  payTo: string,
  dateSubmitted?: Date,
  mailingAddress?: string,
  conferenceName?: string,
  dateStarted?: Date,
  dateEnded?: Date,
  hotel?: string,
  airfare?: string,
  luggage?: string,
  mileage?: string,
  groundTransportation?: string,
  misc?: string,
  confirm: boolean,
  signature?: string,
}

const initialState = {
  payTo: "",
  confirm: false,
} as formState;

export const editPayTo = createAction<string>('editPayTo', );
export const editDateSubmitted = createAction<Date>('editDateSubmitted', );
export const editMailingAddress = createAction<string>('editMailingAddress', );
export const editConferenceName = createAction<string>('editConferenceName', );
export const editDateStarted = createAction<Date>('editDateStarted', );
export const editDateEnded = createAction<Date>('editDateEnded', );
export const editHotel = createAction<string>('editHotel', );
export const editAirfare = createAction<string>('editAirfare', );
export const editLuggage = createAction<string>('editLuggage', );
export const editMileage = createAction<string>('editMileage', );
export const editGroundTransportation = createAction<string>('editGroundTransportation', );
export const editMisc = createAction<string>('editMisc', );
export const editConfirm = createAction('editConfirm', );
export const editSignature = createAction<string>('editSignature', );

// export const removejCard = createAction<string>('removejCard')

const formReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editPayTo, (state, action) => {
      state.payTo = action.payload
    })
    .addCase(editDateSubmitted, (state, action) => {
      state.dateSubmitted = action.payload
    })
    .addCase(editMailingAddress, (state, action) => {
      state.mailingAddress = action.payload
    })
    .addCase(editConferenceName, (state, action) => {
      state.conferenceName = action.payload
    })
    .addCase(editDateStarted, (state, action) => {
      state.dateStarted = action.payload
    })
    .addCase(editDateEnded, (state, action) => {
      state.dateEnded = action.payload
    })
    .addCase(editHotel, (state, action) => {
      state.hotel = action.payload
    })
    .addCase(editAirfare, (state, action) => {
      state.airfare = action.payload
    })
    .addCase(editLuggage, (state, action) => {
      state.luggage = action.payload
    })
    .addCase(editMileage, (state, action) => {
      state.mileage = action.payload
    })
    .addCase(editGroundTransportation, (state, action) => {
      state.groundTransportation = action.payload
    })
    .addCase(editMisc, (state, action) => {
      state.misc = action.payload
    })
    .addCase(editConfirm, (state, action) => {
      state.confirm = !state.confirm;
    })
    .addCase(editSignature, (state, action) => {
      state.signature = action.payload
    })
})

export default formReducer;