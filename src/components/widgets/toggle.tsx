import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  padding: 1,
  width: 70,
  height: 30,
  '& .MuiSwitch-track': {
    borderRadius: 22,
    backgroundColor: "#1c1c1c",

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '65%',
      transform: 'translateY(-50%)',
      width: 26,
      height: 26,
      fontSize: 12,
    },
    '&:before': {
      content: '"ARS"',
      color: '#1c1c1c',
      left: 7,
    },
    '&:after': {
      content: '"USD"',
      color: '#0F3',
      right: 7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    transform: "translateX(10px) !important",
    width: 20,
    height: 20,
    margin: -5,
  },
}));

  export function CustomizedSwitches() {
    return (
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="MUI switch"
        />
      </FormGroup>
    );
  }
  