import type { FC } from 'react';
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
  Typography
} from '@mui/material';
import { Logo } from './logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const sections = [
  {
    title: 'Menu',
    links: [
      {
        title: 'Packs',
        href: '#'
      },
      {
        title: 'Blog',
        href: '/blog'
      },
      {
        title: 'Ayuda',
        href: '#'
      },
      {
        title: 'Contacto',
        href: '#'
      },
      {
        title: 'Términos',
        href: '#'
      }
    ]
  }
];

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.footer',
      borderTopColor: 'divider',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      pb: 2,
      pt: {
        md: 6,
        xs: 6
      }
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <Grid
          item md={4} lg={4} xl={4} sm={12} xs={12}
        >
          <Grid
            item
            md={4}
            lg={4}
            xl={4}
            sm={4}
            xs={4}
          >
            <Logo variant="light" />
          </Grid>
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="caption"
          >
            Nos apasiona difundir y brindar herramientas para invertir en tecnologías blockchain
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          item
          md={8}
          sm={8}
          xs={4}>
          {sections.map((section, index) => (
            <Grid
              item
              key={section.title}
              md={3}
              sm={4}
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1
                }
              }}
              xs={4}
            >
              <List disablePadding>
                {section.links.map((link) => (
                  <ListItem
                    disableGutters
                    key={link.title}
                    sx={{
                      pb: 0,
                      pt: 0
                    }}
                  >
                    <ListItemAvatar
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        minWidth: 0,
                        spacing: 10,
                        mr: 0.5
                      }}
                    >
                    </ListItemAvatar>
                    <ListItemText
                      primary={(
                        <Link
                          href={link.href}
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {link.title}
                        </Link>
                      )}
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
          // borderColor: "(theme) => alpha(theme.palette.primary.contrastText, 0.12)",
          borderColor: "#FFF",
          my: 6
        }}
      />

      <Grid
        container
        maxWidth="xs"
        sx={{
          direction: "row",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <Grid>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            © Cripto Pro Management 2022
          </Typography>
        </Grid>
          <Grid>
            <Link
              href="www.instagram.com/cpm.app/"
              color="inherit"
            >
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              href="www.linkedin.com/company/crypto-pro-management"
              color="inherit"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="www.facebook.com/cpm.app"
              color="inherit"
            >
              <FacebookIcon fontSize="large" />
            </Link>
          </Grid>
      </Grid>
    </Container>
  </Box>
);
