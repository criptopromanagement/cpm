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
import { FormChangeFirstName } from "./FormChangeFirstName";
import { FormChangeMail } from "./FormChangeMail";
import { FormChangeAddress } from "./FormChangeAddress";
import { UserDetail } from "src/types/user-data";

interface Props {
  user: UserDetail;
}
export const TabMyInfo: FC<Props> = ({ user }) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const [openEditFirstName, setOpenEditFirstName] = useState<boolean>(false);
  const [openEditEmail, setOpenEditEmail] = useState<boolean>(false);
  const [openEditAddress, setOpenEditAddress] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
    setOpenEditFirstName(false);
    setOpenEditEmail(false);
    setOpenEditAddress(false);
  };
  const handleOpen = (value: string) => {
    switch (value) {
      case "firstname":
        setOpenEditFirstName(true);
        setOpenEditEmail(false);
        setOpenEditAddress(false);
        break;
      case "email":
        setOpenEditFirstName(false);
        setOpenEditEmail(true);
        setOpenEditAddress(false);
        break;
      case "address":
        setOpenEditFirstName(false);
        setOpenEditEmail(false);
        setOpenEditAddress(true);
        break;
      default:
        break;
    }
    setOpenModal(true);
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
            {user.full_name}
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
                  <Typography>{user.full_name}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Primer Nombre</Typography>
                  <Typography>
                    {user.firstname}{" "}
                    <IconButton
                      name="firstname"
                      onClick={() => handleOpen("firstname")}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Nacionalidad</Typography>
                  <Typography>{user.country}</Typography>
                </Grid>
                <Grid item>
                  <Typography>CUIL</Typography>
                  <Typography>{user.legalId}</Typography>
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
                  <Typography>{user.birthday}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Domicilio</Typography>
                  <Typography>
                    {user.address}{" "}
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
        {openEditFirstName && <FormChangeFirstName closeModal={closeModal} firstname={user.firstname} />}
        {openEditEmail && <FormChangeMail closeModal={closeModal} email={user.email} />}
        {openEditAddress && <FormChangeAddress closeModal={closeModal} />}
      </ModalMyInfo>
    </>
  );
};
