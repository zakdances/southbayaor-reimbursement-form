import { TextField, Stack, Box, CardHeader, Avatar, Card, Typography, Button, IconButton, CardContent, CardActions } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { AccountCircleOutlined, AttachEmailOutlined, AttachMoneyOutlined, MeetingRoomOutlined, ReceiptLongOutlined, ReceiptOutlined } from '@mui/icons-material';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';
import NumberAvatar from './NumberAvatar';

// Travel Reimbursement of Expenses"

function InfoCard() {
  return (
    <Card sx={{ minWidth: 300, flexGrow: 1, flexShrink: 100, flexBasis: 0, 
    bgcolor: "#292e43", 
    borderRadius: 0, borderWidth: 0,
    // borderStyle: "dotted",
    borderColor: "primary.light",
    // paddingBottom: 24
    }} variant='elevation'>

<CardHeader
                  avatar={
                    <NumberAvatar>
                      <ReceiptOutlined />
                    </NumberAvatar>
                  }
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <AccountCircleOutlined />
                  //   </IconButton>
                  // }
                  title="Request Reimbursement"
                  titleTypographyProps={{ color: "primary", variant: "h6" }}
                  subheader="of travel expenses"
                  sx={{ 
                    // bgcolor: "secondary.light" 
                    display: "none"
                  }}
                />

      <CardContent sx={{
        // height: "100%", 
        p: 4,
        // pt: 8,
        alignItems: "start", justifyContent: "center", display: "flex", flexDirection: "column"

      }}>
        <Box>
        <Typography variant="body1" color="white" className='poppins-regular'>
          This form must be completed and sent in, along with your written report, no later than 14 days after
          the conclusion of the meetings.
        </Typography>

        </Box>

        {/* <Divider></Divider> */}

        <Box pt={2}>
          <Typography variant="body1" color="#ddd">
            * Indicates required field
          </Typography>
        </Box>

      </CardContent>
    </Card>
  )
}

export default InfoCard;