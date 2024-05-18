import { TextField, Stack, Box, CardHeader, Avatar, Card, Typography, Button, CardContent, FormControlLabel, Checkbox } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editConfirm, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo, editSignature } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { AccountCircleOutlined, MeetingRoomOutlined, ReceiptLongOutlined } from '@mui/icons-material';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';

function FormCard4() {
    const dispatch = useAppDispatch();

  // const val1 = useAppSelector(state => state.form.payTo);
  // const val2 = useAppSelector(state => state.form.dateSubmitted);
  // const val3 = useAppSelector(state => state.form.mailingAddress);
  // const val4 = useAppSelector(state => state.form.conferenceName);
  // const val5 = useAppSelector(state => state.form.dateStarted);
  // const val6 = useAppSelector(state => state.form.dateEnded);

  // const val7 = useAppSelector(state => state.form.hotel);
  // const val8 = useAppSelector(state => state.form.airfare);
  // const val9 = useAppSelector(state => state.form.luggage);
  // const val10 = useAppSelector(state => state.form.mileage);
  // const val11 = useAppSelector(state => state.form.groundTransportation);
  // const val12 = useAppSelector(state => state.form.misc);

  const val13 = useAppSelector(state => state.form.confirm);
  const val14 = useAppSelector(state => state.form.signature);

  // const values = [val7, val8, val9, val10, val11, val12];
  // const numValues = values.map((v) => v ? numbro.unformat(v) : undefined);
  // const areAllUndefinedOrNull = numValues.every(v => typeof v === "number");
  // const total = numValues.reduce((p: number, v) => {
  //   return typeof v === 'number' ? p + v : p;
  // }, 0);

    return (



              <Stack direction={"column"} gap={4} p={2}>

                <FormControlLabel required control={<Checkbox checked={val13} onChange={(val) => {
                  dispatch(editConfirm());
                }} />} labelPlacement='end'
                  label="By checking the box below you are confirming that all reimbursement amounts and receipts are true and valid for this conference."
                />



                <TextField id="outlined-basic" name="signature" label="Type Your Full Name Here" variant="outlined"
                  value={val14 ?? ""} fullWidth required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(editSignature(event.target.value));
                  }}
                />
              </Stack>


    )
}

export default FormCard4;