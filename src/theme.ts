import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    primary: {
    //   light: '#757ce8',
      main: '#333e5d',
    //   dark: '#002884',
    //   contrastText: '#fff',
    },
    secondary: {
    //   light: '#ff7961',
      main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});

export default mainTheme;