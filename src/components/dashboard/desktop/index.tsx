import { Grid } from '@mui/material'
import React from 'react'
import { DashContent } from './dash-content'
import { LeftBar } from './left-bar'
import { NavigationItem } from 'src/types/left-bar'

export const DesktopDashboard = () => {
    const navigationList: NavigationItem[] = [
        {
            icon: "bar_chart",
            text: "Portafolio",
            to: "dashboard"
        },
        {
            icon: "account_circle",
            text: "Mis datos",
            to: "account"
        },
        {
            icon: "account_balance",
            text: "Mis cuentas",
            to: "my-data"
        },
        {
            icon: "lock",
            text: "Seguridad",
            to: "security"
        }
    ]
    return (
        <Grid container spacing={2}>
            <Grid item md={3} lg={2} container justifyContent="flex-start" alignItems="flex-start">
                <LeftBar navigationList={navigationList} />
            </Grid>
            <Grid item md={9} lg={10} container justifyContent="flex-start" alignItems="flex-start">
                <DashContent />
            </Grid>
        </Grid>
    )
}
