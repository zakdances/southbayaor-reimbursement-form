import { TextField, Stack, Box, CardHeader, Avatar, Card, Typography, Button, IconButton, CardContent } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { AccountCircleOutlined, MeetingRoomOutlined, ReceiptLongOutlined } from '@mui/icons-material';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';

function InfoCard() {
  return (
    <Card sx={{minWidth: 300, flexGrow: 1, flexShrink: 100, flexBasis: 0, background: "#fafafa", borderRadius: 16, borderWidth: 0}} variant='outlined'>

<CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: "lavender" }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <AccountCircleOutlined />
        //   </IconButton>
        // }
        title="Travel Reimbursement of Expenses"
        titleTypographyProps={{ variant: "subtitle2" }}
        // subheader="September 14, 2016"
      />

        <CardContent sx={{p: 4}}>
                  {/* <Typography variant="h5" color="error" mb={1.5} >
Attention
</Typography> */}
                  <Typography variant="body1" color="text.secondary" className='poppins-regular'>
                    This form must be completed and sent in, along with your written report, no later than 14 days after
                    the conclusion of the meetings.
                  </Typography>

          

                {/* <Divider></Divider> */}

                <Box pt={2}>
                  <Typography variant="body1" color="primary">
                    * Indicates required field
                  </Typography>
                </Box>

                </CardContent>
              </Card>
  )
}

export default InfoCard;