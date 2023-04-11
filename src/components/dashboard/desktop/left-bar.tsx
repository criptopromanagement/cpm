import { Avatar, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography, } from '@mui/material'
import React from 'react'
import { useSelector } from 'src/store'
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OutputIcon from '@mui/icons-material/Output';
import { styled } from '@mui/system';

export const LeftBar = () => {
    const { userData } = useSelector((state) => state.user)
    const { user } = userData
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            rowSpacing={1}
            item
            md={12}
            lg={12}
        >
            <Grid
                item
                md={12}
                lg={12}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={5}
                paddingBottom={6}
                sx={{ backgroundColor: '#DADADA', borderRadius: 1, }}
            >
                <Grid item md={12} lg={12} sm={12}>
                    <Avatar alt={user?.firstname} src={user?.avatar} sx={{ width: 100, height: 100, border: "3px solid black" }}
                    />
                </Grid>
                <Grid item md={12} lg={12}>
                    <Typography variant='h2' textAlign="center" color="black" >{user?.full_name}</Typography>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                mt={0.5}
                sx={{ backgroundColor: '#DADADA', borderRadius: 1, }}
            >
                <StyledMenu>
                    <MenuItem>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="subtitle1">Portafolio</Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="subtitle1">Mis datos</Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            < AccountBalanceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="subtitle1">Mis cuentas</Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <HttpsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="subtitle1">Seguridad</Typography>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem sx={{ marginTop: 25 }}>
                        <ListItemIcon>
                            <OutputIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="subtitle1">Cerrar sesión</Typography>
                        </ListItemText>
                    </MenuItem>
                </StyledMenu>
            </Grid>
        </Grid>
    )
}

const StyledMenu = styled(MenuList)({
    color: "black",
    paddingBottom: 20,
    paddingTop: 5,
    "& > li": {
        backgroundColor: "#6DEC86",
        "& > div": {
            color: "inherit"
        }
    }

})