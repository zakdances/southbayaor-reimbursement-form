import React, { useEffect, useRef } from 'react';
import logo from './logo.png';
import './App.css';
import FormView from './FormView';
import { TransitionProps } from '@mui/material/transitions';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide, CircularProgress, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from './view model/hooks';
import { editDialogOpen } from './view model/reducers/dialog';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const dispatch = useAppDispatch();

  const dialogOpen = useAppSelector(state => state.dialog.open);
  const dialogMessage = useAppSelector(state => state.dialog.message);

  const handleDialogClose = () => {
    dispatch(editDialogOpen(false));
  };

  // const prevDialogOpenValueRef = useRef(dialogOpen);
  useEffect(() => {
    // Get the previous value from the ref
    // const prevValue = prevValueRef.current;

    // Update the ref with the current value for the next render
    

    // Your logic here
    const origin = "reimbursementFormIframe";
    // if (prevDialogOpenValueRef.current !== dialogOpen && dialogOpen === true) {
    //   window.parent.postMessage({bodyText: dialogMessage, origin: origin}, "*");
    // }
    if (dialogOpen === true) {
      window.parent.postMessage({
        bodyText: dialogMessage.text, 
        showSpinner: dialogMessage.showSpinner, 
        showCloseButton: dialogMessage.showCloseButton,
        origin: origin}, "*");
    }
    

    // prevDialogOpenValueRef.current = dialogOpen;
  }, [dialogOpen, dialogMessage]);

  

  return (
    <div className="App">
      {/* <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo"/>

      </header> */}
      <div>
        {/* <div className='app-header-spacer'></div> */}
      <FormView></FormView>
      </div>

      <Dialog
        open={dialogOpen ? false : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Form Action"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogMessage.text}
          </DialogContentText>
          <Box sx={{display: dialogMessage.showSpinner === true ? 'block' : 'none'}} mt={2}>
            <CircularProgress/>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleDialogClose}>Disagree</Button>
          <Button onClick={handleDialogClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default App;
