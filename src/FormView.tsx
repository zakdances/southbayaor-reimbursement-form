import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import AttachMoney from '@mui/icons-material/AttachMoney';

import axios from 'axios';

// import ReceiptLong from '@mui/icons-material/ReceiptLong';
import {
  MeetingRoom, MeetingRoomOutlined, AccountCircleOutlined, Receipt, ReceiptLong, ReceiptLongOutlined, ReceiptOutlined,
  AttachMoneyOutlined,
  AccountBoxTwoTone
} from '@mui/icons-material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './App.css';
import { useAppDispatch, useAppSelector } from './view model/hooks';
import { editAirfare, editConferenceName, editConfirm, editDateSubmitted, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo, editSignature } from './view model/reducers/form';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './view/CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { Avatar, CardHeader, Divider } from '@mui/material';
import FormSection1 from './view/FormSection1';
import FormSection2 from './view/FormSection2';
import FormSection3 from './view/FormSection3';
import FormCard1 from './view/FormCard1';
import FormCard2 from './view/FormCard2';
import FormCard3 from './view/FormCard3';
import InfoCard from './view/InfoCard';
import FormCard4 from './view/FormCard4';
import { editDialogMessage, editDialogOpen } from './view model/reducers/dialog';
import { FileListsContext } from './view model/store';
import MainAppBar from './view/MainAppBar';
// import htmlFileLists from './util/htmlFileLists';


// const local_handle_url = "http://localhost:8000/handle_form.php";
const test_server_url = "https://us-west1-southbayaor-422114.cloudfunctions.net/function-hello-world";
// const test_server_url = "http://localhost:8080/";
const maxWidth = 600;

function FormView() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const formState = useAppSelector(state => state.form);

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

  const { contextState, contextDispatch } = useContext(FileListsContext);
  // const fileInputs = useAppSelector(state => state.form.fileInputs);

  // const values = [val7, val8, val9, val10, val11, val12];
  // const numValues = values.map((v) => v ? numbro.unformat(v) : undefined);

  // const areAllUndefinedOrNull = numValues.every(v => typeof v === "number");

  // const total = numValues.reduce((p: number, v) => {
  //   return typeof v === 'number' ? p + v : p;
  // }, 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    // const target = e.target as typeof e.target & {
    //   [key: string]: { value: string }
    // };
    const files = e.currentTarget.files;
    // console.log("files");

    // console.log(files);
    // console.log(Object.entries(target));
    let total: undefined | number = undefined;
    const newFormState = Object.entries(formState).reduce((p: any, [k, v]) => {

      if (["hotel", "airfare", "luggage", "mileage", "groundTransportation", "misc"].includes(k)) {
        let numToAdd = v ? numbro.unformat(v) : undefined;
        if (numToAdd !== undefined) {
          total = total === undefined ? numToAdd : total + numToAdd;
        }
      }

      // if (k == 'fileLists') {
      //   v.forEach((v) => {
      //     if (v) {
      //       for (let i = 0; i < files.length; i++) {
      //         formData.append(input.name, files[i]);
      //       }
      //     }
      //   });
      // }

      p[k] = v;

      return p;
    }, {});
    if (total !== undefined) newFormState['total'] = total;

    // if (files && files.length > 0) {
    //   newFormState['files'] = files;
    // }

    Object.entries(newFormState).forEach(([key, value]) => {
      formData.set(key, value as any);
    });
    // formData.set('files', htmlFileLists as any);
    contextState.fileLists.forEach(v => {
      if (v) {
        const file = v.item(0);
        if (file) {
          formData.append('files', file, file.name);
        }

      }
    })

    // formData'fileLists'] = htmlFileLists;
    dispatch(editDialogMessage({ text: "Please wait, submitting form...", showSpinner: true }));
    dispatch(editDialogOpen(true));

    axios.post(test_server_url, formData)
      .then(json => {
        console.log(json);
        dispatch(editDialogMessage({ text: "Form submitted succesfully! Thank you." }));
        dispatch(editDialogOpen(true));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(editDialogMessage({ text: "There was an error." }));
        dispatch(editDialogOpen(true));
      });

    // fetch(test_server_url, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     dispatch(editDialogOpen(true));
    //   })

    // alert(`The name you entered was: ${target["payTo"].value}`)
  }

  return (
    <div className="FormView" style={{ paddingTop: 0, paddingBottom: 32 }}>
      <form method="post" onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>

          <MainAppBar />





          <Stack mt={4} direction={smBreakpoint ? "row" : "column"} gap={3} alignItems={"start"} sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: 800 }}>


            <Stack direction={"column"} gap={2} order={smBreakpoint ? 0 : 2} flexGrow={1}>

              <Stack direction={"row"} gap={2}>
                <FormCard1 />
                <InfoCard />
              </Stack>



              {/* <AccountBoxTwoTone fontSize='medium' sx={{ color: '#bbb', bgcolor: "white" }} /> */}
              <Card elevation={0} sx={{ borderRadius: 8, bgcolor: "#fff" }}>
              <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#333e5d" }} aria-label="recipe">
                          2
                        </Avatar>
                      }
                      // action={
                      //   <IconButton aria-label="settings">
                      //     <AccountCircleOutlined />
                      //   </IconButton>
                      // }
                      title="Confirm and sign below"
                      // titleTypographyProps={{ variant: "h6" }}
                      subheader="* Indicates required field"
                      sx={{ bgcolor: "#e7e7e7" }}
                    />
{/* <Divider></Divider> */}
                <Stack direction={"column"} flexGrow={1} width={"100%"} bgcolor={"#fff"}>
                  <CardContent sx={{flexGrow: 1,}}>
                    <Box>
                    <FormCard2></FormCard2>
                    </Box>
                  </CardContent>

                  <CardContent sx={{ flexShrink: 100, bgcolor: "#f5f5f5", borderRadius: 0 }}>
                  <FormCard3></FormCard3>
                  </CardContent>
                </Stack>

              </Card>


              <Stack direction={"row"} gap={2}>
                <Card sx={{ minWidth: 275, width: "100%", flexGrow: 1, }} variant='outlined'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#333e5d" }} aria-label="recipe">
                        3
                      </Avatar>
                    }
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <AccountCircleOutlined />
                    //   </IconButton>
                    // }
                    title="Confirm and sign below"
                    // titleTypographyProps={{ variant: "h6" }}
                    subheader="* Indicates required field"
                  />
                  <CardContent sx={{ position: "relative" }}>
                    <FormCard4></FormCard4>
                  </CardContent>
                </Card>

                <Button type="submit" size="large" variant='contained' color='secondary'>Submit</Button>

              </Stack>

            </Stack>

            {/* <InfoCard></InfoCard> */}

          </Stack>






        </LocalizationProvider>
      </form>
    </div>
  );
}

export default FormView;
