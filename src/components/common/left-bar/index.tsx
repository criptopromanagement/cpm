import {
  Avatar,
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useDispatch, useSelector } from "src/store";
import OutputIcon from "@mui/icons-material/Output";
import { styled } from "@mui/system";
import { NavigationItem as NavigationItemType } from "src/types/left-bar";
import { openLogoutModal } from "src/slices/logout-modal-slice";
import { NavigationItem } from "./navigation-item";
interface Props {
  navigationList?: NavigationItemType[];
  showUser?: boolean;
  showIcons?: boolean;
}
const navigationDefaultList: NavigationItemType[] = [
  {
    icon: "bar_chart",
    text: "Portfolio",
    to: "dashboard",
  },
  {
    icon: "account_circle",
    text: "Mis datos",
    to: "my-data",
  },
  {
    icon: "account_balance",
    text: "Mis cuentas",
    to: "my-accounts",
  },
  {
    icon: "lock",
    text: "Seguridad",
    to: "security",
  },
];
export const LeftBar: FC<Props> = ({
  navigationList = navigationDefaultList,
  showUser = false,
  showIcons = false,
}) => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const dispatch = useDispatch();
  const handleOpenLogoutModal = () => {
    dispatch(openLogoutModal());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={1}
      item
      md={12}
      lg={12}
    >
      {showUser && (
        <Grid
          item
          md={12}
          lg={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={5}
          marginTop={3}
          sx={{
            backgroundColor: "#DADADA",
            borderTopLeftRadius: '.8rem',
            borderTopRightRadius: '.8rem',
          }}        >
          <Grid
            item md={12}
            lg={12}
            sm={12}
          >
            <Avatar
              alt={user?.firstname}
              src={user?.avatar}
              sx={{ width: 100, height: 100, border: "3px solid black" }}
            />
          </Grid>
          <Grid
            item
            md={12}
            lg={12}
          >
            <Typography
              variant="h3"
              textAlign="center"
              color="black"
            >
              {user?.full_name}
            </Typography>
          </Grid>
          <Divider sx={{ width: '100%', bgcolor: 'grey.500', my: 1 }} />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        sx={{
          backgroundColor: "#DADADA",
          borderBottomLeftRadius: '.5rem',
          borderBottomRightRadius: '.5rem',
          height: `${showUser ? 55 : 80}vh`,
        }}
      >
        <StyledMenu>
          {navigationList.map((item) => {
            const active = window.location.pathname.includes(item.to);
            return (
              <NavigationItem
                key={item.to}
                active={active}
                navigationItem={item}
                showIcons={showIcons}
              />
            );
          })}
        </StyledMenu>
        <StyledMenu sx={{ position: "relative", bottom: 0 }}>
          <MenuItem onClick={handleOpenLogoutModal}>
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
  );
};

const StyledMenu = styled(MenuList)({
  color: "black",
  paddingBottom: 20,
  paddingTop: 5,
  "& > li": {
    "& > div": {
      color: "inherit",
    },
  },
});
