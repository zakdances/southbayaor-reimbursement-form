import React from 'react';
import logo from './logo.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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
import AccountCircle from '@mui/icons-material/AccountCircle';
import AttachMoney from '@mui/icons-material/AttachMoney';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './../App.css';
import dayjs from 'dayjs';

function CurrencyTextFieldFormControl(props: any) {
    const { fullWidth, label, value, onChange, margin = "none", helperText = '' } = props;

    return (
        <FormControl variant="outlined" fullWidth={fullWidth} size='medium' margin={margin}>
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <FilledInput 
            id="outlined-adornment-password"
            // type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">

                  <AttachMoney></AttachMoney>
         
              </InputAdornment>
            }
            // label={label}
            value={value}
            onChange={onChange}
          
          />
          <FormHelperText id="outlined-weight-helper-text" 
          sx={{opacity: 1, pointerEvents: "none"}}
          >{helperText}</FormHelperText>
        </FormControl>
    )
}

export default CurrencyTextFieldFormControl;