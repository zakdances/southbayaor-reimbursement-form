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
  AccountBoxTwoTone,
  ExpandMore,
  ArrowDownwardOutlined
} from '@mui/icons-material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './App.css';
import { useAppDispatch, useAppSelector } from './view model/hooks';
import { editAirfare, editCity, editConferenceName, editConfirm, editDateSubmitted, editEmailAddress, editGroundTransportation, editHotel, editLuggage, editMailingAddress, editMileage, editMisc, editPayTo, editSignature, editStateName, editZip } from './view model/reducers/form';
import dayjs from 'dayjs';
import CurrencyTextFieldFormControl from './view/CurrencyTextFieldFormControl';
import numbro from 'numbro';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Avatar, CardHeader, Divider, Paper } from '@mui/material';
import FormSection1 from './view/FormSection1';
import FormSection2 from './view/FormSection2';
import FormSection3 from './view/FormSection3';
import FormCard1 from './view/FormCard1';
import FormCard2 from './view/FormCard2';
import FormCard3 from './view/FormCard3';
import InfoCard from './view/InfoCard';
import FormCard4 from './view/FormCard4';
import { editDialogMessage, editDialogOpen } from './view model/reducers/dialog';
import { MainContext } from './view model/store';
import MainAppBar from './view/MainAppBar';
import NumberAvatar from './view/NumberAvatar';
import FormCardHeader from './view/FormCardHeader';
import { getCombinedNodeFlags } from 'typescript';
import { Masonry } from '@mui/lab';
import MeetingsAndEvents from './view/MeetingsAndEvents';
import MiscComments from './view/MiscComments';
// import htmlFileLists from './util/htmlFileLists';

// const hostnameProdKeyword = "southbayaor";
// const isIframe = window.self !== window.top;
// const url = isIframe ? document.referrer : document.location.href;
// const isProd = url.includes(hostnameProdKeyword) &&
// (
// !url.includes("localhost") &&
// !url.includes("127.0.0.1")
// );

// console.log("window.parent location hostname:");
// console.log(url);
// console.log("window location hostname:");
// console.log(isProd);


const getServerUrl = () => {
  const dev_server_url = "http://localhost:8080/";
  const prod_server_url = "https://us-west1-southbayaor-422114.cloudfunctions.net/function-hello-world";
  const hostnameProdKeyword = "southbayaor";

  const isIframe = window.self !== window.top;
  const url = isIframe ? document.referrer : document.location.href;
  const isProd = url.includes(hostnameProdKeyword) &&
(
!url.includes("localhost") &&
!url.includes("127.0.0.1")
);

  return isProd ? prod_server_url : dev_server_url;
}

console.log(getServerUrl());

// const local_handle_url = "http://localhost:8000/handle_form.php";
// const test_server_url = "https://us-west1-southbayaor-422114.cloudfunctions.net/function-hello-world";
// const test_server_url = "http://localhost:8080/";
const maxWidth = 880;
const cardVariant = "elevation";

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

  const { contextState, contextDispatch } = useContext(MainContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const files = e.currentTarget.files;
    const errors: Error[] = [];
    // console.log("files");

    // console.log(files);
    // console.log(Object.entries(target));
    let total: undefined | number = undefined;
    const newFormState = Object.entries(formState).reduce((p: any, [k, v]) => {

      if (["hotel", "airfare", "luggage", "mileage", "groundTransportation", "misc"].includes(k)) {
        let numToAdd = v ? numbro.unformat(v) : undefined;
        if (numToAdd !== undefined) {
          if (total === undefined) total = 0;
          total += numToAdd;
        }
      }
      if (k === 'meetingsAndEvents') {
        v = v.values.join(", ");
      }

      p[k] = v;

      return p;
    }, {});
    if (total !== undefined) newFormState['total'] = numbro(total).format({ thousandSeparated: true, mantissa: 2});

    // Set text field values
    Object.entries(newFormState).forEach(([key, value]) => {

      formData.set(key, value as any);
    });

    // Set image files for upload
    contextState.files.fileLists.forEach(v => {
      if (v) {
        const file = v.item(0);
        if (file) {
          formData.append('files', file, file.name);
          console.log(file.size);
          // Check file size // 20 MB in bytes
          if (file.size > 20 * 1024 * 1024) { 
            errors.push(new Error("Form was not submitted. One or more of your selected images is over the limit of 20mb."));
          }
        }
        
      }
    })

    if (errors.length > 0) {
      dispatch(editDialogMessage({ text: errors[0].message, showCloseButton: true }));
      dispatch(editDialogOpen(true));
      return;
    }

    // formData'fileLists'] = htmlFileLists;
    dispatch(editDialogMessage({ text: "Please wait, submitting form...", showSpinner: true }));
    dispatch(editDialogOpen(true));

    const request = axios.post(getServerUrl(), formData)
      .then(json => {
        console.log(json);
        dispatch(editDialogMessage({ text: "Form submitted succesfully! Thank you.", showCloseButton: true }));
        dispatch(editDialogOpen(true));

        dispatch(editPayTo(""));
        dispatch(editMailingAddress(""));
        dispatch(editCity(""));
        dispatch(editStateName(""));
        dispatch(editZip(""));
        dispatch(editEmailAddress(""));
        dispatch(editConferenceName(""));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(editDialogMessage({ text: "Form not submitted. There was an error.", showCloseButton: true }));
        dispatch(editDialogOpen(true));
      })
      .finally(() => {
        contextDispatch({ type: 'network/editRequest', payload: { request: undefined } });
      })
      ;

    contextDispatch({ type: 'network/editRequest', payload: { request: request } });
    // fetch(test_server_url, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     dispatch(editDialogOpen(true));
    //   })
  }


  // const huh = [
  //   {
  //     title: "Personal Info",
  //     component: <FormSection1 />
  //   },
  //   {
  //     title: "Conference Info",
  //     component: <FormSection2 />
  //   },
  //   {
  //     title: "Expenses",
  //     component: <FormSection3 />
  //   },
  //   {
  //     title: "Upload Receipts",
  //     component: <FormCard3 />
  //   },
  //   {
  //     title: "Confirm and Sign",
  //     component: <FormCard4 />
  //   }
  // ]

  return (
    <div className="FormView" style={{ paddingTop: 0, paddingBottom: 32 }}>
      <form method="post" onSubmit={handleSubmit} id="myForm">
        <LocalizationProvider dateAdapter={AdapterDayjs}>

          {/* <MainAppBar /> */}


          {/* <InfoCard /> */}


          <Stack mt={4} direction={smBreakpoint ? "column" : "column"} gap={3} alignItems={"stretch"} sx={{
            marginLeft: "auto", marginRight: "auto",
            maxWidth: maxWidth
          }}>




        
            <Paper variant='elevation' sx={{ mb: 0 }}>
              <InfoCard />
              {/* <Box p={4}>
                <Typography variant='h4' color={"primary"}>Travel Expenses Reimbursement Form</Typography>
              </Box> */}
            </Paper>
            <Paper component={"div"} variant='elevation' elevation={0} sx={{ bgcolor: "transparent" }}>



              <Accordion defaultExpanded variant={cardVariant} elevation={1} sx={{ overflow: "hidden" }}>
                {/* <FormCardHeader title={"Personal Info"} avatarIcon={"1"} /> */}
                <AccordionSummary
                  expandIcon={<ExpandMore fontSize='large' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                // sx={{bgcolor: "#fafafa"}}
                >
                  {/* 1. Personal Info */}
                  <Typography variant='h4' mb={0} ml={2}>1. Personal Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography variant='h4' mb={2} ml={2}>1. Personal Info</Typography> */}

                  {/* <Divider></Divider> */}
                  <FormSection1 />
                  {/* <Divider></Divider> */}
                  {/* <FormSection2 /> */}
                  {/* <Divider></Divider> */}
                  
                </AccordionDetails>
                {/* <AccordionActions>
          <ArrowDownwardOutlined fontSize='large' color="primary" />
        </AccordionActions> */}
              </Accordion>

              <Accordion defaultExpanded variant={cardVariant} elevation={1} sx={{ overflow: "hidden" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore fontSize='large' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant='h4' ml={2}>2. Conference Info</Typography>
                </AccordionSummary>
                {/* <FormCardHeader title={"Conference Info"} avatarIcon={"2"} /> */}
                <AccordionDetails sx={{ padding: 2 }}>
                  {/* <Typography variant='h4' mb={2} ml={2}>2. Conference Info</Typography> */}
                  <Stack direction={"column"} gap={2}>
                    <FormSection2 />

                    {/* <FormSection2 /> */}
                    <Paper sx={{ bgcolor: "#fff6d1", p: 2 }}>
                      {/* <Typography variant='h6'>Use US Dollars Only</Typography> */}
                      <CardHeader
                        avatar={
                          <NumberAvatar>
                            <ReceiptLongOutlined />
                          </NumberAvatar>
                        }
                        // action={
                        //   <IconButton aria-label="settings">
                        //     <AccountCircleOutlined />
                        //   </IconButton>
                        // }
                        title="Enter receipt info"
                        titleTypographyProps={{ variant: "h6" }}
                        subheader="Use US dollar amounts only.
                  "
                        sx={{
                          // bgcolor: "#fafafa", 

                          borderRadius: 100,
                          mb: 2
                        }}
                      />
                      <FormSection3></FormSection3>
                    </Paper>

                  </Stack>
                </AccordionDetails>
                {/* <AccordionActions>
          <ArrowDownwardOutlined fontSize='large' color="primary" />
        </AccordionActions> */}
              </Accordion>

              <Accordion defaultExpanded variant={cardVariant} elevation={1}>
                <AccordionSummary
                  expandIcon={<ExpandMore fontSize='large' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {/* 1. Personal Info */}
                  <Typography variant='h4' mb={0} ml={2}>3. Upload Receipts</Typography>
                </AccordionSummary>
                {/* <FormCardHeader title={"Upload Receipts"} avatarIcon={"3"} /> */}
                <AccordionDetails sx={{ padding: 2 }}>
                  {/* <Typography variant='h4' mb={2} ml={2}>3. Upload Receipts</Typography> */}
                  <FormCard3 />
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded variant={cardVariant} elevation={1}>
                <AccordionSummary
                  expandIcon={<ExpandMore fontSize='large' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {/* 1. Personal Info */}
                  <Typography variant='h4' mb={0} ml={2}>4. List Meetings and Events</Typography>
                </AccordionSummary>
                {/* <FormCardHeader title={"Upload Receipts"} avatarIcon={"3"} /> */}
                <AccordionDetails sx={{ padding: 2 }}>
                  {/* <Typography variant='h4' mb={2} ml={2}>3. Upload Receipts</Typography> */}
                  <MeetingsAndEvents />
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded variant={cardVariant} elevation={1}>
                <AccordionSummary
                  expandIcon={<ExpandMore fontSize='large' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {/* 1. Personal Info */}
                  <Typography variant='h4' mb={0} ml={2}>5. Comments</Typography>
                </AccordionSummary>
                {/* <FormCardHeader title={"Upload Receipts"} avatarIcon={"3"} /> */}
                <AccordionDetails sx={{ padding: 2 }}>
                  {/* <Typography variant='h4' mb={2} ml={2}>3. Upload Receipts</Typography> */}
                  <MiscComments />
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded variant={cardVariant} elevation={1}>
                <AccordionSummary
                  expandIcon={<ExpandMore fontSize='large' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {/* 1. Personal Info */}
                  <Typography variant='h4' mb={0} ml={2}>6. Confirm and sign</Typography>
                </AccordionSummary>
                {/* <FormCardHeader title={"Confirm and sign"} avatarIcon={"5"} /> */}
                <AccordionDetails>
                  {/* <Typography variant='h4' mb={2} ml={2}>4. Confirm and sign</Typography> */}
                  <FormCard4></FormCard4>
                </AccordionDetails>
                {/* <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions> */}
              </Accordion>
            </Paper>





            <Button type="submit" size="large" variant='contained' color='primary'
              sx={{ flexGrow: 1, width: 300, ml: 2 }}
              disabled={contextState.network.request !== undefined}
              onClick={() => {
                const myForm = document.getElementById("myForm") as HTMLFormElement | null;
                if (myForm) {
                  const isFormValid = myForm.checkValidity();
                  if (!isFormValid) {
                    console.log("form not valid");
                    dispatch(editDialogMessage({ text: "Something went wrong. The form was not submitted. There are empty required fields or invalid values. Please check the entire form and try again.", showCloseButton: true }));
                    dispatch(editDialogOpen(true));

                  }
                }


              }}
            >Submit</Button>

            {/* <InfoCard></InfoCard> */}

          </Stack>






        </LocalizationProvider>
      </form>
    </div>
  );
}

export default FormView;
