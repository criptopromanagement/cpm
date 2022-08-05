import Head from "next/head";
import {
  Grid,
  Typography,
  CardContent,
  Card,
  Avatar,
  CardHeader,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { FC, useState } from "react";
import { ModalMyInfo } from "./ModalMyInfo";
import { FormChangeAlias } from "./FormChangeAlias";
import { FormChangeMail } from "./FormChangeMail";
import { FormChangeAddress } from "./FormChangeAddress";

interface Props {}
export const TabMyInfo: FC<Props> = () => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up('xs'));
  console.log(xs)
  const [openEditUser, setOpenEditUser] = useState<boolean>(false);
  const [openEditEmail, setOpenEditEmail] = useState<boolean>(false);
  const [openEditAddress, setOpenEditAddress] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
    setOpenEditUser(false);
    setOpenEditEmail(false);
    setOpenEditAddress(false);
  };
  const handleOpen = (value: string) => {
    switch (value) {
      case "user":
        setOpenEditUser(true);
        setOpenEditEmail(false);
        setOpenEditAddress(false);
        break;
      case "email":
        setOpenEditUser(false);
        setOpenEditEmail(true);
        setOpenEditAddress(false);
        break;
      case "address":
        setOpenEditUser(false);
        setOpenEditEmail(false);
        setOpenEditAddress(true);
        break;
      default:
        break;
    }
    setOpenModal(true);
  };
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
    <>
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
                    {user.user}{" "}
                    <IconButton
                      name="user"
                      onClick={() => handleOpen("user")}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
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
                    {user.email}{" "}
                    <IconButton
                      name="email"
                      onClick={() => handleOpen("email")}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Fecha de nacimiento</Typography>
                  <Typography>{user.fecha_nacimiento}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Domicilio</Typography>
                  <Typography>
                    {user.domicilio}{" "}
                    <IconButton
                      onClick={() => handleOpen("address")}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ModalMyInfo open={openModal} handleClose={closeModal}>
        {openEditUser && <FormChangeAlias closeModal={closeModal} />}
        {openEditEmail && <FormChangeMail closeModal={closeModal} />}
        {openEditAddress && <FormChangeAddress closeModal={closeModal} />}
      </ModalMyInfo>
    </>
  );
};
