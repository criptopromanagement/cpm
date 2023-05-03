import { Grid, Typography, Stack, Card, CardContent, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { MyTransactions } from './my-transactions'
import { PendingIncomeAmount } from 'src/components/common/pending-income-amount'

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
                    <Box sx={{
                        border: "1px solid #DADADA",
                        paddingTop: 5,
                        paddingBottom: 8,
                        paddingLeft: 6,
                        paddingRight: 6,
                        borderRadius: 2,
                        minHeight: 205
                    }}>
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
                    <Box sx={{
                        border: "1px solid #DADADA",
                        paddingTop: 5,
                        paddingBottom: 8,
                        paddingLeft: 6,
                        paddingRight: 6,
                        borderRadius: 2,
                        minHeight: 205
                    }}>
                        <Stack spacing={2} sx={{ maxWidth: "50%" }} direction="column">
                            <Typography variant='bigBalanceAmounts'>
                                0,00 USDT
                            </Typography>
                            <PendingIncomeAmount />
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={5} lg={5} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Fondo de inversión</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Card sx={{ border: "1px solid #DADADA", paddingTop: 0, paddingBottom: 4, paddingLeft: 0, paddingRight: 0, borderRadius: 2, backgroundColor: "transparent" }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image="/static/home/hero.svg"
                            title="hero"
                        />
                        <CardContent sx={{ paddingBottom: 0, paddingTop: 5, paddingLeft: 6, paddingRight: 6 }}>
                            <Grid
                                container
                                columns={10}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="stretch"
                                spacing={3}
                            >
                                <Grid
                                    item
                                    md={10}
                                    container
                                    direction="row"
                                    alignItems="baseline"
                                    spacing={3}
                                >
                                    <Grid item md={8} lg={8}>
                                        <Typography variant="h1" component="span">Foundation</Typography>
                                    </Grid>
                                    <Grid item md={2} lg={2}>
                                        <Typography variant="h3" component="span">3,8%</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant="h4">Composición:</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-1.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-2.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-3.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-4.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-5.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-6.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-7.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-8.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-9.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                                <Grid item md={2}>
                                    <img src='/static/crypto-imgs/crypto-10.svg' style={{ width: 60, height: 60 }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item md={7} lg={7} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2">Últimos movimientos</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ border: "1px solid #DADADA", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <MyTransactions />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
