import type { FC } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "./logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";

const sections = [
  {
    title: "Menu",
    links: [
      {
        title: "Packs",
        href: "#",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Ayuda",
        href: "#",
      },
      {
        title: "Contacto",
        href: "#",
      },
      {
        title: "Términos",
        href: "#",
      },
    ],
  },
];

// const Mobile = styled('div')(({theme}) => ({
//   [theme.breakpoints.down('sm')]: {
//     backgroundColor: 'grey',
//     textAlign: 'center',
//     padding: '4rem',
//   }
// }));

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: "background.footer",
      borderTopColor: "divider",
      borderTopStyle: "solid",
      borderTopWidth: 1,
      pb: 2,
      pt: {
        md: 6,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid
          container
          justifyContent={{ lg: "left", xs: "center" }}
          direction="row"
          textAlign={{ lg: "left", xs: "center" }}
          spacing={0}
          item
          md={4}
          lg={4}
          xl={4}
          sm={12}
          xs={12}
        >
          <Grid item md={4} lg={4} xl={4} sm={4} xs={4}>
            <Logo variant="light" />
          </Grid>
          <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
            <Typography color="textSecondary" variant="caption">
              Nos apasiona difundir y brindar herramientas para invertir en
              tecnologías blockchain
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent={{ xs: "center", lg: "flex-end" }}
          alignItems={{ xs: "center", lg: "flex-end" }}
          item
          md={8}
          sm={8}
          xs={12}
        >
          {sections.map((section, index) => (
            <Grid
              item
              key={section.title}
              md={3}
              sm={4}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1,
                },
              }}
              xs={12}
            >
              <List disablePadding>
                {section.links.map((link) => (
                  <ListItem
                    disableGutters
                    key={link.title}
                    sx={{
                      pb: 0,
                      pt: 1,
                    }}
                  >
                    <ListItemText
                      sx={{ textAlign: { xs: "center", lg: "right" } }}
                      primary={
                        <Link
                          href={link.href}
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {link.title}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderColor: { lg: "#FFF", xs: "#474444" },
          my: 2,
        }}
      />

      <Grid
        container
        direction={{
          md: "row",
          lg: "row",
          xl: "row",
          sm: "row",
          xs: "row-reverse",
        }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item display={{ xs: "none", lg: "block" }} xs={12} lg={4}>
          <Typography color="textSecondary" variant="caption">
            © Cripto Pro Management 2022
          </Typography>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent={{
              md: "flex-end",
              lg: "flex-end",
              xl: "flex-end",
              sm: "flex-end",
              xs: "space-around",
            }}
            alignItems="center"
          >
            <Link href="www.instagram.com/cpm.app/" color="inherit">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              href="www.linkedin.com/company/crypto-pro-management"
              color="inherit"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link href="www.facebook.com/cpm.app" color="inherit">
              <FacebookIcon fontSize="large" />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
