import React, { useEffect, useRef } from 'react';
import logo from './logo.png';
import './App.css';
import FormView from './FormView';
import { TransitionProps } from '@mui/material/transitions';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide, CircularProgress, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from './view model/hooks';
import { editDialogOpen } from './view model/reducers/dialog';

// Shared marker so the WordPress parent page can identify messages from this iframe.
const MESSAGE_ORIGIN = "reimbursementFormIframe";

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

  useEffect(() => {
    if (window.self === window.top) return;

    let animationFrameId: number | undefined;
    let isMounted = true;
    let lastHeight = -1;

    const getDocumentHeight = () => Math.ceil(Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    ));

    // Tell the parent page the iframe's current content height.
    const sendHeight = () => {
      const height = getDocumentHeight();

      if (height === lastHeight) return;

      lastHeight = height;
      window.parent.postMessage({
        height,
        source: MESSAGE_ORIGIN,
        type: 'resize',
      }, '*');
    };

    // Batch resize notifications so rapid layout changes only send the latest height.
    const scheduleSendHeight = () => {
      if (!isMounted) return;

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = undefined;
        sendHeight();
      });
    };

    scheduleSendHeight();

    // Watch for dynamic layout changes inside the form, such as validation messages or expanded sections.
    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? undefined
      : new ResizeObserver(scheduleSendHeight);
    resizeObserver?.observe(document.body);
    resizeObserver?.observe(document.documentElement);

    window.addEventListener('resize', scheduleSendHeight);
    window.addEventListener('load', scheduleSendHeight);
    document.fonts?.ready.then(scheduleSendHeight);

    return () => {
      isMounted = false;

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }

      resizeObserver?.disconnect();
      window.removeEventListener('resize', scheduleSendHeight);
      window.removeEventListener('load', scheduleSendHeight);
    };
  }, []);

  // const prevDialogOpenValueRef = useRef(dialogOpen);
  useEffect(() => {
    // Get the previous value from the ref
    // const prevValue = prevValueRef.current;

    // Update the ref with the current value for the next render
    

    // Your logic here
    // if (prevDialogOpenValueRef.current !== dialogOpen && dialogOpen === true) {
    //   window.parent.postMessage({bodyText: dialogMessage, origin: origin}, "*");
    // }
    // Existing status-message channel used by the WordPress parent page to show dialog feedback.
    if (dialogOpen === true) {
      window.parent.postMessage({
        bodyText: dialogMessage.text, 
        showSpinner: dialogMessage.showSpinner, 
        showCloseButton: dialogMessage.showCloseButton,
        origin: MESSAGE_ORIGIN}, "*");
    }
    

    // prevDialogOpenValueRef.current = dialogOpen;
  }, [dialogOpen, dialogMessage]);

  // useEffect(() => {
  //   console.log("component did mount");
  //   const origin = "reimbursementFormIframe";
  //   window.parent.postMessage({
  //     bodyText: "dialog text", 
  //     showSpinner: true, 
  //     showCloseButton: true,
  //     origin: origin}, "*");

  // });


  return (
    <div className="App">
      {/* <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo"/>

      </header> */}
      <div>
        {/* <div className='app-header-spacer'></div> */}
      <FormView></FormView>
      </div>

      {/* <Dialog
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
        <DialogActions>
          <Button onClick={handleDialogClose}>close</Button>
        </DialogActions>
      </Dialog> */}
      
    </div>
  );
}

export default App;
