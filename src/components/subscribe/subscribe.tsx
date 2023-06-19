import { Container, Typography, TextField, Button, Box } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'

const Subscribe = () => {
  return (
    <Container sx={{margin:'10rem'}} >
      <Typography variant='h3' align='center'>
      Suscribite y recibí información sobre las novedades de la industria cripto
      </Typography>
      <Box display='flex' justifyContent='center' alignItems='center' marginTop= '2rem' paddingX= '20rem'>
      <TextField id="outlined-basic" label="Tu email" variant="outlined" fullWidth sx={{marginRight: '1rem'}} />
      <Button
                  component="a"
                  size="large"
                  variant="contained"
                >
                  Suscribirme
                </Button>
                </Box> 
    </Container>
  )
}

export default Subscribe
