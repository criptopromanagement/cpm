import { Button } from '@mui/material'
import { borderColor, padding } from '@mui/system';
import React from 'react'

interface ButtonProps {
    textButton: string;
  }

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <Button>
        {props.textButton}
    </Button>
  )
}

export const ButtonSecondary: React.FC<ButtonProps> = (props) => {
  
    return (
      <Button
      sx={{border: "2px solid #00FF33",
          paddingX: "48px",
          marginY: "16px"
    }}>
          {props.textButton}
      </Button>
    )
  }
