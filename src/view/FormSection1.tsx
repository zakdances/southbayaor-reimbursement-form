import { TextField, Stack, Box, Divider } from '@mui/material';
import './../App.css';
import { useAppDispatch, useAppSelector } from './../view model/hooks';
import { editCity, editDateSubmitted, editMailingAddress, editPayTo, editStateName, editZip } from '../view model/reducers/form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AccountBoxOutlined, AccountBoxTwoTone, LocalPostOfficeTwoTone, MailOutlined, MarkunreadMailboxOutlined, PersonOutlineOutlined } from '@mui/icons-material';

function FormSection1() {
  const dispatch = useAppDispatch();

  const val1 = useAppSelector(state => state.form.payTo);
  const val2 = useAppSelector(state => state.form.dateSubmitted);
  const val3 = useAppSelector(state => state.form.mailingAddress);
  const val32 = useAppSelector(state => state.form.city);
  const val33 = useAppSelector(state => state.form.stateName);
  const val34 = useAppSelector(state => state.form.zip);

  // const val4 = useAppSelector(state => state.form.city);
  // const val5 = useAppSelector(state => state.form.stateName);
  // const val6 = useAppSelector(state => state.form.zip);

  return (
    <Stack direction="column" gap={2} flexGrow={1} mt={0} mr={1} p={0} pt={0} pb={0}>

<Stack direction={"row"} gap={3}>

        {/* <PersonOutlineOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}

        <TextField id="outlined-basic" name="payTo" label="Pay To" 
          variant="outlined" size='medium' required fullWidth
          value={val1 ?? ""} sx={{maxWidth: 410}}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(editPayTo(event.target.value));
          }}
        // helperText="Use Full Name"
        // FormHelperTextProps={{ sx: { opacity: 1, pointerEvents: "none" } }}
        />

        

</Stack>
     

      {/* <Divider></Divider> */}


      <Stack direction={"row"} gap={3}>
        {/* <MarkunreadMailboxOutlined fontSize='medium' sx={{ color: 'action.active' }} /> */}
        <Stack direction={"column"} gap={2} flexGrow={1}>

        <Stack direction={"row"} gap={2} flexWrap={"wrap"}>

        <TextField id="outlined-basic" label="Mailing Address" variant="outlined" multiline
          maxRows={1} size='medium' sx={{flexGrow: 1, minWidth: 400}}
          value={val3 ?? ""} required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(editMailingAddress(event.target.value));
          }}
        // helperText="Required"
        // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
        />

          <TextField id="outlined-basic" label="City" variant="outlined" multiline
            maxRows={1} size='medium' sx={{flexGrow: 1, minWidth: 400}}
            value={val32 ?? ""} required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(editCity(event.target.value));
            }}
          // helperText="Required"
          // FormHelperTextProps={{ sx: { opacity: 0, pointerEvents: "none" } }}
          />
          </Stack>

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