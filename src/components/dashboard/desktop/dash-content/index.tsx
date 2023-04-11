import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const DashContent = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            item
            md={12}
            lg={12}
        >
            <Grid item md={9} lg={9}>
                <Typography variant="h1">Portafolio</Typography>
            </Grid>
            <Grid item md={3} lg={3}>
                <Typography variant="h5">Boton</Typography>
            </Grid>
            <Grid item md={9} lg={9} container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Disponible en cuenta</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box>
                        <Typography variant='bigBalanceAmounts'>
                            0,00 USDT
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={3} lg={3}>
                <Typography variant="h2">Invertido en fondo</Typography>
            </Grid>
        </Grid>
    )
}
