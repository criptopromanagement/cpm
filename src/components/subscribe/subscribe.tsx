import { Container, Typography, TextField, Button, Box } from '@mui/material'
import React from 'react'

const Subscribe = () => {
    
  return (
    <Container>
      <Typography variant='h3' align='center'>
      Suscribite y recibí información sobre las novedades de la industria cripto
      </Typography>
      <Box display='flex' justifyContent='center' alignItems='center' marginTop= '2rem' marginBottom={{xs: '2rem'}} paddingX= '2rem' flexDirection= {{ xs: 'column' , md: 'row'}}>
      <TextField id="outlined-basic" label="Tu email" variant="outlined" fullWidth multiline rows={0.5} sx={{marginRight: '1rem', maxWidth: {xs: '100%', md: '20rem'}}} />
      <Button
                  component="a"
                  variant="contained"
                  sx= {{marginTop: { xs: '1rem', md: 0} }}
                >
                  Suscribirme
                </Button>
                </Box> 
    </Container>
  )
}

export default Subscribe
