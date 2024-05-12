import { TextField, Stack, Box, CardHeader, Avatar, Card, Badge, CardContent } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { AccountBoxTwoTone, AccountCircleOutlined, MeetingRoomTwoTone } from '@mui/icons-material';
import FormSection1 from './FormSection1';
import { deepPurple } from '@mui/material/colors';

function FormCard1() {
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
    <Card variant='outlined' sx={{ borderRadius: 10, borderWidth: 0, bgcolor: "#fafafa", flexGrow: 1, order: 2 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#333e5d" }} aria-label="recipe">
                        1
                      </Avatar>
                    }
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <AccountCircleOutlined />
                    //   </IconButton>
                    // }
                    title="Enter personal information below"
                    // titleTypographyProps={{ variant: "h6" }}
                    // subheader="* Indicates required field"
                    sx={{ bgcolor: "#eee" }}
                  />
                  {/* <Divider></Divider> */}
                  <CardContent sx={{ position: "relative" }}>

    

        

        <FormSection1></FormSection1>

   

    </CardContent>
    </Card>
  )
}

export default FormCard1;