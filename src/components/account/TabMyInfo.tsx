import Head from "next/head";
import {
  Grid,
  Typography,
  CardContent,
  Card,
  Avatar,
  CardHeader,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { FC } from "react";

interface Props {}
export const TabMyInfo: FC<Props> = () => {
  const user = {
    avatar: "",
    name: "Jane Doe",
    user: "Jane Doe",
    nacionality: "Argentina",
    cuil: "23-3333333333333-2",
    email: "jane_doe@gmail.com",
    fecha_nacimiento: "02/03/2002",
    domicilio: "Av Siempre Viva 123",
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item md={12} xs={12}>
        <Typography variant="h5" textAlign="center">
          {user.name}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} xs={12}>
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mr: 2,
              width: 80,
            }}
          ></Avatar>
        </Grid>
        <Grid item md={12} xs={12}>
          <Button endIcon={<EditIcon />} color="inherit">
            editar avatar
          </Button>
        </Grid>
      </Grid>
      <Grid item md={12} xs={12}>
        <Card>
          <CardHeader title="Mis datos personales" />
          <CardContent style={{ paddingTop: 0 }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="body1">Nombre</Typography>
                <Typography>{user.name}</Typography>
              </Grid>
              <Grid item>
                <Typography>Usuario</Typography>
                <Typography>
                  {user.user} <EditIcon fontSize="inherit" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>Nacionalidad</Typography>
                <Typography>{user.nacionality}</Typography>
              </Grid>
              <Grid item>
                <Typography>CUIL</Typography>
                <Typography>{user.cuil}</Typography>
              </Grid>
              <Grid item>
                <Typography>Email</Typography>
                <Typography>
                  {user.email} <EditIcon fontSize="inherit" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>Fecha de nacimiento</Typography>
                <Typography>{user.fecha_nacimiento}</Typography>
              </Grid>
              <Grid item>
                <Typography>Domicilio</Typography>
                <Typography>
                  {user.domicilio} <EditIcon fontSize="inherit" />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
