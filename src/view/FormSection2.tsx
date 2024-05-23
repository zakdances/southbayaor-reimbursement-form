import { TextField, Stack, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editConferenceName, editDateEnded, editDateStarted, editDateSubmitted, editMailingAddress, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function FormSection2() {
    const dispatch = useAppDispatch();
    const theme = useTheme();
  const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const val1 = useAppSelector(state => state.form.payTo);
  const val2 = useAppSelector(state => state.form.dateSubmitted);
  const val3 = useAppSelector(state => state.form.mailingAddress);
  const val4 = useAppSelector(state => state.form.conferenceName);
  const val5 = useAppSelector(state => state.form.dateStarted);
  const val6 = useAppSelector(state => state.form.dateEnded);

    return (
        <Stack direction="column" gap={3} mt={0} p={0} pl={0}>
          {/* <Divider></Divider> */}

            <TextField id="outlined-basic" label="Conference Name" variant="outlined" size='medium'
                      value={val4 ?? ""} required fullWidth={false}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(editConferenceName(event.target.value));
                      }}
                      // helperText="spacer"
                      // FormHelperTextProps={{sx: {opacity: 0, pointerEvents: "none"}}}
                    />

                    <Stack direction={smBreakpoint ? "row" : "column"} spacing={2} flexGrow={1} mb={0} sx={{width: "100%"}}>

                      <DatePicker label="Start Date *" sx={{ flex: 1 }}
                      value={typeof val5 === 'number' ? dayjs(val5) : null} 
                      onChange={(val) => {
                        if (val) dispatch(editDateStarted(val.valueOf()));
                      }}
                      />

                      <DatePicker label="End Date *" sx={{ flex: 1 }} 
                      value={typeof val6 === 'number' ? dayjs(val6) : null} 
                      onChange={(val) => {
                        if (val) dispatch(editDateEnded(val.valueOf()));
                      }}
                      />

                    </Stack>
        </Stack>
    )
}

export default FormSection2;