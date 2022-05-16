import React from 'react'
import Head from 'next/head'
import {
    Box,
    Button,
    Container,
    Grid,
    MenuItem,
    TextField,
    Typography
} from '@mui/material';
import { MainNavbar } from "../../components/dashboard/dash-navbar";
import { Balance } from 'src/components/dashboard/dash-balance';

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>
                    Dashboard | CPM
                </title>
            </Head>
            <MainNavbar />
            <Box
                component="main"
                sx={{
                    py: 10
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ mb: 4 }}>
                        <Grid
                            container
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Grid item>
                                <Typography variant="h4">
                                ¡Hola Jane Doe!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            <Balance />
            </Box>
        </>
    )
}

export default Dashboard