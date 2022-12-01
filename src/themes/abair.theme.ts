import { createTheme } from '@mui/material';
import { green, blue, red, grey } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: green[100],
      main: green[600],
      dark: green[800],
      contrastText: green[50],
    },
    secondary: {
      light: blue[100],
      main: blue[600],
      dark: blue[800],
      contrastText: blue[50],
    },
    warning: {
      light: red[100],
      main: red[600],
      dark: red[800],
      contrastText: red[50],
    },
    info: {
      light: grey[100],
      main: grey[600],
      dark: grey[800],
      contrastText: grey[50],
    },
    text: {
      primary: '#000',
      secondary: '#808080',
    },
    background: {
      default: '#fff',
      paper: '#fefefe',
    },
  },
});
