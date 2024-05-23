import { useContext } from 'react';
import { TextField, Stack, Box, CardHeader, Avatar, Card, Typography, Button, Badge, Divider } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { styled } from '@mui/material/styles';
import { AccountCircleOutlined, FileUploadOutlined, HotelOutlined, HotelTwoTone, MeetingRoomOutlined, ReceiptLongOutlined } from '@mui/icons-material';

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

function FormCard3() {
  const dispatch = useAppDispatch();

  const val1 = useAppSelector(state => state.form.payTo);
  const val2 = useAppSelector(state => state.form.dateSubmitted);
  const val3 = useAppSelector(state => state.form.mailingAddress);
  const val4 = useAppSelector(state => state.form.conferenceName);
  const val5 = useAppSelector(state => state.form.dateStarted);
  const val6 = useAppSelector(state => state.form.dateEnded);

  const val7 = useAppSelector(state => state.form.hotel);
  const val8 = useAppSelector(state => state.form.airfare);
  const val9 = useAppSelector(state => state.form.luggage);
  const val10 = useAppSelector(state => state.form.mileage);
  const val11 = useAppSelector(state => state.form.groundTransportation);
  const val12 = useAppSelector(state => state.form.misc);

  const val13 = useAppSelector(state => state.form.confirm);
  const val14 = useAppSelector(state => state.form.signature);

  // const fileList = useAppSelector(state => state.form.fileList);
  // const fileLists = useAppSelector(state => state.form.fileLists);
  
  const { contextState, contextDispatch } = useContext(MainContext);

  const values = [val7, val8, val9, val10, val11, val12];
  const numValues = values.map((v) => v ? numbro.unformat(v) : undefined);
  const areAllUndefinedOrNull = numValues.every(v => typeof v === "number");
  const total = numValues.reduce((p: number, v) => {
    return typeof v === 'number' ? p + v : p;
  }, 0);

  return (
    <Box sx={{ textAlign: "left", border: "0px solid #eee", }} pb={2} pt={0} maxWidth={500}>
      
      {/* <Typography variant="body1" color="text.secondary">
          Enter personal and conference information below
        </Typography> */}
      {/* <Divider></Divider> */}


      {/* <Typography variant="subtitle2" color="text.primary" mt={3} mb={3} ml={7} className='poppins-regular'>
                Please complete the below with dollar amounts only.
                </Typography> */}


                {/* <Divider></Divider> */}

      <Stack gap={2} direction={"row"}>
      <FileUploadOutlined sx={{ color: 'action.active' }} fontSize='medium' />

        <Stack direction={"column"}>
          <Typography variant="subtitle2" color="text.primary" mt={0} mb={2} className='poppins-regular'>
            Upload up to 10 receipts. Each file must be a JPEG, PNG, or PDF and 20mb or less in size.
          </Typography>




          <Stack direction={"column"} gap={2} sx={{ width: "100%" }}>

            {contextState.files.fileLists.map((v, i) => (
              <Stack direction={"row"} gap={2} key={i}>
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  variant="outlined"
                >
                  Add file
                  {/* <VisuallyHiddenInput multiple type="file" onChange={(e) => {
                  const newFileList = e.currentTarget.files;
                  if (newFileList) {
                    dispatch(editFileList(newFileList));
                  }
                }} /> */}
                  <input type="file" onChange={(e) => {
                    const newFileList = e.currentTarget.files;

                    if (newFileList) {
                      // const newFileLists = [...htmlFileLists];
                      // newFileLists[i] = newFileList;
                      // if (newFileLists.length < 10) {
                      //   newFileLists.push(undefined);
                      // } htmlFileLists[huh.index] = huh.fileList;
                      contextDispatch({type: "form/chooseFile", payload: {fileList: newFileList, index: i}});
                      contextDispatch({type: "form/addFileInput"});

                      // dispatch(editFileLists({ fileName: newFileList.item(0)?.name, index: i }));
                      // dispatch(editFileLists({ fileName: undefined, index: i + 1 }));
                      // htmlFileLists[i] = newFileList;
                      // htmlFileLists[i + 1] = undefined;
                    } else {
                      contextDispatch({type: "form/chooseFile", payload: {fileList: undefined, index: i}});
                    }
                  }
                  } hidden multiple accept='image/jpeg, image/jpg, image/png, application/pdf' />
                </Button>

                <Typography className='poppins-bold' variant="body1" color="text.primary" mb={0}>
                  {v?.item(0)?.name ?? ""}
                </Typography>
              </Stack>
            ))}


          </Stack>

        </Stack>

      </Stack>
    </Box>
  )
}

export default FormCard3;