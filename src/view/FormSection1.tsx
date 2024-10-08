import { TextField, Stack, Box, Divider, Typography } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editCity, editDateSubmitted, editEmailAddress, editMailingAddress, editPayTo, editStateName, editZip } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AccountBoxOutlined, AccountBoxTwoTone, LocalPostOfficeTwoTone, MailOutlined, MarkunreadMailboxOutlined, PersonOutlineOutlined } from '@mui/icons-material';

const gap = 2;

function FormSection1() {
  const dispatch = useAppDispatch();

  const val1 = useAppSelector(state => state.form.payTo);
  const emailAddress = useAppSelector(state => state.form.emailAddress);
  const val2 = useAppSelector(state => state.form.dateSubmitted);
  const val3 = useAppSelector(state => state.form.mailingAddress);
  const val32 = useAppSelector(state => state.form.city);
  const val33 = useAppSelector(state => state.form.stateName);
  const val34 = useAppSelector(state => state.form.zip);

  // const val4 = useAppSelector(state => state.form.city);
  // const val5 = useAppSelector(state => state.form.stateName);
  // const val6 = useAppSelector(state => state.form.zip);

  return (
    <Stack direction="column" gap={gap} flexGrow={1} mt={0} mr={0} p={0} pt={0} pb={0}>
      {/* <Divider></Divider> */}
      <Stack direction={"row"} gap={gap + 1} flexWrap={"wrap"}>

        {/* <PersonOutlineOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}

        <TextField id="outlined-basic" name="payTo" label="Pay To"
          variant="outlined" size='medium' required
          value={val1 ?? ""} sx={{ flexGrow: 1, flexBasis: 0, minWidth: 300, }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(editPayTo(event.target.value));
          }}
        // helperText="Use Full Name"
        // FormHelperTextProps={{ sx: { opacity: 1, pointerEvents: "none" } }}
        />

          {/* <Box flexGrow={1} minWidth={300}></Box> */}

      </Stack>


      {/* <Divider></Divider> */}


      <Stack direction={"row"} gap={gap + 1}>
        {/* <MarkunreadMailboxOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}
        <Stack direction={"column"} gap={gap} flexGrow={1}>

          <Stack direction={"row"} gap={gap} flexWrap={"wrap"}>

            <TextField id="outlined-basic" label="Mailing Address" variant="outlined" multiline
              maxRows={1} size='medium' sx={{ flexGrow: 1, minWidth: 300 }}
              value={val3 ?? ""} required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(editMailingAddress(event.target.value));
              }}
            // helperText="Required"
            // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
            />

            <TextField id="outlined-basic" label="City" variant="outlined" multiline
              maxRows={1} size='medium' sx={{ flexGrow: 1, minWidth: 300 }}
              value={val32 ?? ""} required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(editCity(event.target.value));
              }}
            // helperText="Required"
            // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
            />
          </Stack>

          <Stack direction={"row"} gap={gap}>
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



      <TextField id="emailAddress" name="emailAddress" label="Email Address"
          variant="outlined" size='medium' required
          value={emailAddress ?? ""} sx={{ flexGrow: 1, flexBasis: 0, minWidth: 300, }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(editEmailAddress(event.target.value));
          }}
        />


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