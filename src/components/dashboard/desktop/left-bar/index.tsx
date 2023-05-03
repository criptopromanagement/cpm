import { Avatar, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography, } from '@mui/material'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'src/store'
import OutputIcon from '@mui/icons-material/Output';
import { styled } from '@mui/system';
import { NavigationItem } from './navigation-item';
import { NavigationItem as NavigationItemType } from 'src/types/left-bar';
import { openLogoutModal } from 'src/slices/logout-modal-slice';
interface Props {
    navigationList: NavigationItemType[]
}

export const LeftBar: FC<Props> = ({ navigationList }) => {
    const { userData } = useSelector((state) => state.user)
    const { user } = userData
    const dispatch = useDispatch();
    const handleOpenLogoutModal = () => {
        dispatch(openLogoutModal());
    };

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
                    {navigationList.map((item) => {
                        const active = window.location.pathname.includes(item.to)
                        return (
                            <NavigationItem key={item.to} active={active} navigationItem={item} />
                        )
                    })}
                    <MenuItem sx={{ marginTop: 25, }} onClick={handleOpenLogoutModal}>
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
        "& > div": {
            color: "inherit"
        }
    }
})