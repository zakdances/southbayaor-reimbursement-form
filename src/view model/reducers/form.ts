import { createAction, createReducer, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import MeetingsAndEventsState from '../state/meetingsAndEvents';
// import htmlFileLists from '../../util/htmlFileLists';
// import JargonautCard, { JargonautCardData } from '../../model/JargonautCard'

interface FileInput {
  file?: string
}



interface formState {
  payTo: string,
  emailAddress: string,
  dateSubmitted?: number,
  mailingAddress?: string,
  city?: string,
  stateName?: string,
  zip?: string,
  conferenceName?: string,
  dateStarted?: number,
  dateEnded?: number,
  hotel?: string,
  airfare?: string,
  luggage?: string,
  mileage?: string,
  groundTransportation?: string,
  misc?: string,
  meetingsAndEvents: MeetingsAndEventsState
  miscComments: string,
  confirm: boolean,
  signature?: string,
  // fileList?: FileList,
  // fileLists: (string | undefined)[]
}

const initialState = {
  payTo: "",
  // dateSubmitted: 0,
  meetingsAndEvents: {values: [""]},
  confirm: false,
  // fileLists: [undefined]
} as formState;

export const editPayTo = createAction<string>('editPayTo', );
export const editEmailAddress = createAction<string>('editEmailAddress', );
export const editDateSubmitted = createAction<number>('editDateSubmitted', );
export const editMailingAddress = createAction<string>('editMailingAddress', );
export const editCity = createAction<string>('editCity', );
export const editStateName = createAction<string>('editStateName', );
export const editZip = createAction<string>('editZip', );
export const editConferenceName = createAction<string>('editConferenceName', );
export const editDateStarted = createAction<number>('editDateStarted', );
export const editDateEnded = createAction<number>('editDateEnded', );
export const editHotel = createAction<string>('editHotel', );
export const editAirfare = createAction<string>('editAirfare', );
export const editLuggage = createAction<string>('editLuggage', );
export const editMileage = createAction<string>('editMileage', );
export const editGroundTransportation = createAction<string>('editGroundTransportation', );
export const editMisc = createAction<string>('editMisc', );
export const editMeetingsAndEvents = createAction<MeetingsAndEventsState>('editMeetingsAndEvents', );
export const editMiscComments = createAction<string>('editMiscComments', );
export const editConfirm = createAction('editConfirm', );
export const editSignature = createAction<string>('editSignature', );
// export const editFileList = createAction<FileList>('editFileList', );
// export const editFileLists = createAction<{fileName: string | undefined, index: number}>('editFileLists', );

// export const removejCard = createAction<string>('removejCard')

const formReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editPayTo, (state, action) => {
      state.payTo = action.payload
    })
    .addCase(editEmailAddress, (state, action) => {
      state.emailAddress = action.payload
    })
    .addCase(editDateSubmitted, (state, action) => {
      state.dateSubmitted = action.payload
    })
    .addCase(editMailingAddress, (state, action) => {
      state.mailingAddress = action.payload
    })
    .addCase(editCity, (state, action) => {
      state.city = action.payload
    })
    .addCase(editStateName, (state, action) => {
      state.stateName = action.payload
    })
    .addCase(editZip, (state, action) => {
      state.zip = action.payload
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
      state.misc = action.payload;
    })
    .addCase(editConfirm, (state, action) => {
      state.confirm = !state.confirm;
    })
    .addCase(editSignature, (state, action) => {
      state.signature = action.payload;
    })
    .addCase(editMeetingsAndEvents, (state, action) => {
      state.meetingsAndEvents = action.payload;
    })
    .addCase(editMiscComments, (state, action) => {
      state.miscComments = action.payload;
    })
    // .addCase(editFileList, (state, action) => {
    //   state.fileList = action.payload;
    // })
    // .addCase(editFileLists, (state, action) => {
    //   const huh = action.payload;
    //   state.fileLists[huh.index] = huh.fileName;
    // })
})

export default formReducer;