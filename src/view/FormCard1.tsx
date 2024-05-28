import { TextField, Stack, Box, CardHeader, Avatar, Card, Badge, CardContent, Divider, Typography } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editCity, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo, editStateName, editZip } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { AccountBoxTwoTone, AccountCircleOutlined, DoorBackOutlined, MailOutlined, MarkunreadMailboxOutlined, MeetingRoomTwoTone, PersonOutlineOutlined, RoomOutlined } from '@mui/icons-material';
import FormSection1 from './FormSection1';
import { deepPurple } from '@mui/material/colors';
import NumberAvatar from './NumberAvatar';
import FormCardHeader from './FormCardHeader';
import FormCard2 from './FormCard2';
import FormSection3 from './FormSection3';
import FormCard3 from './FormCard3';

const verticalGap = 2;

function FormCard1() {
  const dispatch = useAppDispatch();

  const val1 = useAppSelector(state => state.form.payTo);
  const val2 = useAppSelector(state => state.form.dateSubmitted);
  const val3 = useAppSelector(state => state.form.mailingAddress);
  const val32 = useAppSelector(state => state.form.city);
  const val33 = useAppSelector(state => state.form.stateName);
  const val34 = useAppSelector(state => state.form.zip);
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
    <Stack direction={"column"} gap={2} borderRadius={8}>


      <Card variant='elevation' elevation={2} sx={{
        // borderRadius: 5, 
        // borderWidth: 0, 
        flexGrow: 1, order: 2,
        bgcolor: "#fff",
        // display: "flex", flexDirection: "row"
      }}>

        <Box p={3} bgcolor={"#fafafa"}>
          <Typography variant='h4' sx={{ mb: 0 }}>Travel Expenses Reimbursement Form</Typography>
        </Box>
        {/* <Divider></Divider> */}
        {/* <FormCardHeader title="Travel Expenses Reimbursement Form" /> */}

        <Divider></Divider>

        <CardContent sx={{ p: 3 }}>
          <Typography variant="body2" color="text.secondary" className='poppins-regular' mb={2}>
            This form must be completed and sent in, along with your written report, no later than 14 days after
            the conclusion of the meetings.
          </Typography>

          <Typography variant="body2" color="text.secondary" className='poppins-regular'>
            * Inidications required field
          </Typography>
        </CardContent>

   

        <Divider></Divider>
        {/* <FormCardHeader title="Personal Information" /> */}


        <CardContent sx={{
          position: "relative", mt: 0,
          bgcolor: "#fff",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          flexGrow: 1,
          // p: 0,
        }}>


          <Stack direction={"row"} gap={3}>
            {/* <MailOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}
            {/* <Box width={120} bgcolor={"#fafafa"}>

            </Box> */}

            <Stack direction={"column"} gap={verticalGap} flexGrow={1} pt={1} pl={1} pr={1}>

              <Typography variant='h5' color={"text.primary"} sx={{ mb: 2 }}>Personal info</Typography>

              <Stack direction={"row"} gap={3} >

                {/* <PersonOutlineOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}

                <TextField id="outlined-basic" name="payTo" label="Pay To" fullWidth
                  variant="outlined" size='medium' required
                  value={val1 ?? ""}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(editPayTo(event.target.value));
                  }}
                // helperText="Use Full Name"
                // FormHelperTextProps={{ sx: { opacity: 1, pointerEvents: "none" } }}
                />

              </Stack>

              <Stack direction={"row"} gap={3}>
                {/* <MarkunreadMailboxOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}
                <Stack direction={"column"} gap={verticalGap} flexGrow={1}>
                  <TextField id="outlined-basic" label="Mailing Address" variant="outlined" multiline
                    maxRows={1} size='medium' fullWidth
                    value={val3 ?? ""} required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(editMailingAddress(event.target.value));
                    }}
                  // helperText="Required"
                  // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
                  />

                  <TextField id="outlined-basic" label="City" variant="outlined" multiline
                    maxRows={1} size='medium' fullWidth
                    value={val32 ?? ""} required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(editCity(event.target.value));
                    }}
                  // helperText="Required"
                  // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
                  />

                  <Stack direction={"row"} gap={2}>
                    <   TextField id="outlined-basic" label="State" variant="outlined" multiline
                      maxRows={1} size='medium' fullWidth
                      value={val33 ?? ""} required
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(editStateName(event.target.value));
                      }}
                    // helperText="Required"
                    // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
                    />


                    <TextField id="outlined-basic" label="Zip" variant="outlined" multiline
                      maxRows={1} size='medium' fullWidth
                      value={val34 ?? ""} required
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(editZip(event.target.value));
                      }}
                    // helperText="Required"
                    // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
                    />
                  </Stack>



                  {/* <FormSection3></FormSection3> */}

                </Stack>
              </Stack>
            </Stack>
          </Stack>





        </CardContent>

        {/* <Divider></Divider> */}
        <CardContent>
          {/* <FormCardHeader title="Enter conference info" /> */}
          <Typography variant='h4' sx={{ mb: 0, mt: 0, ml: 1 }}>Conference info</Typography>
          <Stack direction={"row"} gap={2} pl={1} pt={1}>
            {/* <DoorBackOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}
            <FormCard2></FormCard2>
          </Stack>

        </CardContent>

        <CardContent sx={{ flexShrink: 100, bgcolor: "#f5f5f5", borderRadius: 0 }}>



          <FormCard3></FormCard3>


        </CardContent>
      </Card>
    </Stack>
  )
}

export default FormCard1;