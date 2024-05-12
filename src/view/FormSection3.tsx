import { TextField, Stack } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editAirfare, editConferenceName, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './CurrencyTextFieldFormControl';
import numbro from 'numbro';

function FormSection3() {
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
        <Stack direction="column" gap={4} flexGrow={1}>
            <CurrencyTextFieldFormControl fullWidth label={"Hotel Room"}
                    value={val7 ?? ""}  helperText={"room/tax only"}
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

                  <CurrencyTextFieldFormControl fullWidth label={"Mileage if driving to meetings"}
                    value={val10 ?? ""} helperText={"$200 MAX @ $.67/mile"}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(editMileage(event.target.value));
                    }}
                  ></CurrencyTextFieldFormControl>

                  <CurrencyTextFieldFormControl fullWidth label={"Ground Transportation To/From Airport"}
                    value={val11 ?? ""} helperText={"$(Cab/Shuttle/Uber)"}
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

                  <CurrencyTextFieldFormControl fullWidth label={"Total"} variant="filled"
                    value={areAllUndefinedOrNull ? "" : numbro(total).format({thousandSeparated: true})}
                  ></CurrencyTextFieldFormControl>

        </Stack>
    )
}

export default FormSection3;