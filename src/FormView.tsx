import React from 'react';
import logo from './logo.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AttachMoney from '@mui/icons-material/AttachMoney';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './App.css';
import { useAppDispatch, useAppSelector } from './view model/hooks';
import { editAirfare, editConferenceName, editConfirm, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo, editSignature } from './view model/reducers/form';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './view/CurrencyTextFieldFormControl';
import numbro from 'numbro';
  
function FormView() {
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

  // console.log("numValues: " + numValues);
  
  const areAllUndefinedOrNull = numValues.every(v => typeof v === "number");
  
  const total = numValues.reduce((p: number, v) => {
    return typeof v === 'number' ? p + v : p;
  }, 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      [key: string]: { value: string };
    };
    alert(`The name you entered was: ${target["payTo"].value}`)
  }

  return (
    <div className="FormView">
      <form action="http://localhost:8000/handle_form.php" method="post" onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card sx={{ minWidth: 275, maxWidth: 675, margin: "16px auto", borderTop: "8px solid #0D47A1" }}>
      <CardContent>
        
        <Typography variant="h5" color="text.primary" gutterBottom>
          Reimbursement Form
        </Typography>

        <Stack gap={2}>

        <TextField id="outlined-basic" name="payTo" label="Pay To" variant="outlined" margin="normal" 
        value={val1 ?? ""} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editPayTo(event.target.value));
        }}
        />


        {/* <label style={{textAlign: "left"}}>Date Submitted</label> */}
        <DatePicker label="Date Submitted"
        value={val2 ? dayjs(val2) : undefined} 
        onChange={(val) => {
          if (val) dispatch(editDateSubmitted(val.toDate()));
        }}
        />

        <TextField id="outlined-basic" label="Mailing Address" variant="outlined" margin="normal" multiline
          maxRows={2}
          value={val3 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editMailingAddress(event.target.value));
        }}
          />

        <TextField id="outlined-basic" label="Conference Name" variant="outlined" margin="normal"
        value={val4 ?? ""} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editConferenceName(event.target.value));
        }}
        />

        <Stack direction={"row"} spacing={2}>

        <DatePicker label="Conference Start Date" sx={{flex: 1}} />

        <DatePicker label="Conference End Date" sx={{flex: 1}} />

        </Stack>

        <hr style={{width: "100%"}}></hr>

        <Typography variant="body1" gutterBottom>
        Please complete the below with dollar amounts only.
      </Typography>

        <CurrencyTextFieldFormControl fullWidth label={"Hotel (Room/Tax Only)"}
        value={val7 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editHotel(event.target.value));
        }}
        ></CurrencyTextFieldFormControl>


        <Stack direction={"row"} spacing={2}>
          
        {/* <AttachMoney sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}


        <CurrencyTextFieldFormControl fullWidth label={"Airfare/Train"}
        value={val8 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editAirfare(event.target.value));
        }}
        ></CurrencyTextFieldFormControl>

      <CurrencyTextFieldFormControl fullWidth label={"Luggage Fees"}
        value={val9 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editLuggage(event.target.value));
        }}
        ></CurrencyTextFieldFormControl>

        </Stack>

        <CurrencyTextFieldFormControl fullWidth label={"Mileage if driving to meetings ($200 MAX) @ $.67/mile"}
        value={val10 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editMileage(event.target.value));
        }}
        ></CurrencyTextFieldFormControl>

<CurrencyTextFieldFormControl fullWidth label={"Ground Transportation To/From Airport (Cab/Shuttle/Uber)"}
        value={val11 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editGroundTransportation(event.target.value));
        }}
        ></CurrencyTextFieldFormControl>

<CurrencyTextFieldFormControl fullWidth label={"Misc. Pre-approved Reimbursements"}
        value={val12 ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editMisc(event.target.value));
        }}
        ></CurrencyTextFieldFormControl>


       
        <TextField id="standard-basic" label="Total" variant="standard" disabled
        value={areAllUndefinedOrNull ? "" : total} />

<hr style={{width: "100%"}}></hr>

        <label style={{textAlign: "left"}}>Upload Receipt PDF</label>
        <Button variant="contained">Add file</Button>

        </Stack>

        <hr></hr>

        <FormControlLabel required control={<Checkbox checked={val13} onChange={(val) => {
          dispatch(editConfirm());
        }} />} 
        label="By checking this box you are confirming that all reimbursement amounts and receipts are true and valid for this conference." />

        <hr></hr>

        <TextField id="outlined-basic" name="signature" label="Type Your Full Name Here" variant="outlined" margin="normal" 
        value={val14 ?? ""} fullWidth
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(editSignature(event.target.value));
        }}
        />

      </CardContent>
      <CardActions>
        <Button type="submit" size="medium">Submit</Button>
      </CardActions>
    </Card>
    </LocalizationProvider>
    </form>
    </div>
  );
}

export default FormView;
