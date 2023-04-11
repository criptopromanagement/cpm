import { Grid } from '@mui/material'
import React from 'react'
import { LeftBar } from './left-bar'
import { DashContent } from './dash-content'

export const DesktopDashboard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item md={3} lg={2} container>
                <LeftBar />
            </Grid>
            <Grid item md={9} lg={10} container>
                <DashContent />
            </Grid>
        </Grid>
    )
}
