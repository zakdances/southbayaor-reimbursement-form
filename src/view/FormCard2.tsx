import { TextField, Stack, Box, CardHeader, Avatar, Card, Typography, Divider } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { AccountCircleOutlined, MeetingRoomOutlined, MeetingRoomTwoTone } from '@mui/icons-material';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';

function FormCard2() {
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

  const values = [val7, val8, val9, val10, val11, val12];
  const numValues = values.map((v) => v ? numbro.unformat(v) : undefined);
  const areAllUndefinedOrNull = numValues.every(v => typeof v === "number");
  const total = numValues.reduce((p: number, v) => {
    return typeof v === 'number' ? p + v : p;
  }, 0);

    return (
      <Box sx={{ textAlign: "left", }} mt={0} mr={1}>
                {/* <Typography variant="body1" color="text.primary" pl={7} pr={2} pt={0} pb={0} className='poppins-regular'>
          Enter conference information below.
        </Typography> */}
                {/* <Divider></Divider> */}
                {/* <CardHeader sx={{backgroundColor: "#fff", }}
        avatar={
          <Avatar sx={{ bgcolor: "#333e5d" }} aria-label="avatar">
            <MeetingRoomOutlined />
          </Avatar>
        }
        title="Enter conference information below"
        subheader="All fields required"
      />  */}

                {/* <Typography variant="subtitle2" color="text.primary" mt={2} ml={5} className='poppins-regular'>
                  Enter personal and conference information below
                </Typography> */}

  
{/* <Divider></Divider> */}
                <Stack gap={3} direction={"row"}>

                {/* <MeetingRoomTwoTone fontSize='medium' sx={{ color: '#bbb' }} /> */}

                  <Stack gap={0} sx={{ flexGrow: 1 }}>

                    <FormSection2></FormSection2>

                  </Stack>

                </Stack>
              </Box>
    )
}

export default FormCard2;