import { TextField, Stack, Box, Divider } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editDateSubmitted, editMailingAddress, editPayTo } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AccountBoxTwoTone, MailOutlined } from '@mui/icons-material';

function FormSection1() {
  const dispatch = useAppDispatch();

  const val1 = useAppSelector(state => state.form.payTo);
  const val2 = useAppSelector(state => state.form.dateSubmitted);
  const val3 = useAppSelector(state => state.form.mailingAddress);
  const val4 = useAppSelector(state => state.form.city);
  const val5 = useAppSelector(state => state.form.stateName);
  const val6 = useAppSelector(state => state.form.zip);

  return (
    <Stack direction="column" gap={3} flexGrow={1} mt={0} mr={1}>

      <Stack direction={"row"} gap={3}>

        <AccountBoxTwoTone fontSize='medium' sx={{ color: '#bbb' }} />

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

        {/* <Divider></Divider> */}

      <Stack direction={"row"} gap={3}>
        <MailOutlined fontSize='medium' sx={{ color: '#bbb' }} />

        <Stack direction={"column"} flexGrow={1}>
          <TextField id="outlined-basic" label="Mailing Address" variant="outlined" multiline
            maxRows={1} size='medium' fullWidth
            value={val3 ?? ""} required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(editMailingAddress(event.target.value));
            }}
            helperText="Required"
            FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
          />

          <TextField id="outlined-basic" label="City" variant="outlined" multiline
            maxRows={1} size='medium' fullWidth
            value={val3 ?? ""} required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(editMailingAddress(event.target.value));
            }}
            helperText="Required"
            FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
          />

          <Stack direction={"row"} gap={2}>
            <   TextField id="outlined-basic" label="State" variant="outlined" multiline
              maxRows={1} size='medium' fullWidth
              value={val3 ?? ""} required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(editMailingAddress(event.target.value));
              }}
              helperText="Required"
              FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
            />


            <TextField id="outlined-basic" label="Zip" variant="outlined" multiline
              maxRows={1} size='medium' fullWidth
              value={val3 ?? ""} required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(editMailingAddress(event.target.value));
              }}
              helperText="Required"
              FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
            />
          </Stack>

        </Stack>
      </Stack>







      {/* <DatePicker label="Date Submitted *" 
        value={typeof val2 === 'number' ? dayjs(val2) : null} 
        onChange={(val) => {
          if (val) dispatch(editDateSubmitted(val.valueOf()));
        }}
        /> */}

    </Stack>
  )
}

export default FormSection1;