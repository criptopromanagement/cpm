import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { MyTransactions } from './my-transactions'

export const DashContent = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            item
            spacing={3}
            md={12}
            lg={12}
        >
            <Grid item md={9} lg={9}>
                <Typography variant="h1">Portafolio</Typography>
            </Grid>
            <Grid item md={3} lg={3}>
                <Typography variant="h5">Boton</Typography>
            </Grid>
            <Grid item md={12} lg={12}>
                <Typography variant="body1">Invertiste 215,10 USDT en Foundation. Te avisaremos cuando se acrediten</Typography>
            </Grid>
            <Grid item md={5} lg={5} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Disponible en cuenta</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ border: "1px solid white", paddingTop: 5, paddingBottom: 8, paddingLeft: 6, paddingRight: 6, borderRadius: 2 }}>
                        <Typography variant='bigBalanceAmounts'>
                            0,00 USDT
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={7} lg={7} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Invertido en fondo</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ border: "1px solid white", paddingTop: 5, paddingBottom: 8, paddingLeft: 6, paddingRight: 6, borderRadius: 2 }}>
                        <Typography variant='bigBalanceAmounts'>
                            0,00 USDT
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={5} lg={5} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Fondo de inversión</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ border: "1px solid white", paddingTop: 5, paddingBottom: 8, paddingLeft: 6, paddingRight: 6, borderRadius: 2 }}>
                        <Typography variant='bigBalanceAmounts'>
                            0,00 USDT
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={7} lg={7} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Últimos movimientos</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ border: "1px solid white", borderTopLeftRadius: 10,  borderTopRightRadius: 10}}>
                        <MyTransactions />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
