import { useContext } from 'react';
import { TextField, Stack, Box, CardHeader, Avatar, Card, Typography, Button, Badge, Divider } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMeetingsAndEvents, editMileage, editMisc, editMiscComments, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { styled } from '@mui/material/styles';
import { AccountCircleOutlined, FileUploadOutlined, HotelOutlined, HotelTwoTone, MeetingRoomOutlined, ReceiptLongOutlined, EventSeat, CommentRounded } from '@mui/icons-material';

import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';

import { MainContext } from '../view model/store';
import NumberAvatar from './NumberAvatar';
// import htmlFileLists from '../util/htmlFileLists';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function MiscComments() {
  const dispatch = useAppDispatch();

  const comments = useAppSelector(state => state.form.miscComments);

  // const fileList = useAppSelector(state => state.form.fileList);
  // const fileLists = useAppSelector(state => state.form.fileLists);
  
  // const { contextState, contextDispatch } = useContext(MainContext);

  // const values = [val7, val8, val9, val10, val11, val12];
  // const numValues = values.map((v) => v ? numbro.unformat(v) : undefined);
  // const areAllUndefinedOrNull = numValues.every(v => typeof v === "number");
  // const total = numValues.reduce((p: number, v) => {
  //   return typeof v === 'number' ? p + v : p;
  // }, 0);

  return (
    <Box sx={{ textAlign: "left", border: "0px solid #eee", }} pb={2} pt={0} 
    // pr={2} 
    
    >
      
      {/* <Typography variant="body1" color="text.secondary">
          Enter personal and conference information below
        </Typography> */}
      {/* <Divider></Divider> */}


      {/* <Typography variant="subtitle2" color="text.primary" mt={3} mb={3} ml={7} className='poppins-regular'>
                Please complete the below with dollar amounts only.
                </Typography> */}


                {/* <Divider></Divider> */}

      <Stack gap={2} direction={"row"}>
      <CommentRounded sx={{ color: 'action.active' }} fontSize='medium' />

        <Stack direction={"column"}>

          <Typography variant="subtitle2" color="text.primary" mt={0} mb={2} className='poppins-regular'>
            Add any additional comments (optional).
          </Typography>




          <Stack direction={"column"} gap={2} sx={{ width: "100%" }}>
            <TextField value={comments} label="Meeting/Event Name" required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              
              dispatch(editMiscComments(event.target.value));
            }}
            ></TextField>
          </Stack>

        </Stack>

      </Stack>
    </Box>
  )
}

export default MiscComments;