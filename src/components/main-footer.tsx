import type { FC } from 'react';
import {
    Box,
    Container,
    Divider,
    Grid,
    Link,
    List,
    ListItemText,
    Typography
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Logo } from './logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const sections = [
    {
        title: 'hola',
        links: [
            {
                title: 'Packs',
                href: '/packs'
            },
            {
                title: 'Blog',
                href: '/blog'
            },
            {
                title: 'Ayuda',
                href: '/ayuda'
            },
            {
                title: 'Terminos',
                href: '/terminos'
            },
            {
                title: 'Contacto',
                href: '/contacto'
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
            pb: 6,
            pt: {
                md: 3,
                xs: 6
            }
        }}
        {...props}
    >
        <Container maxWidth="lg">
            <Box textAlign="center">
                <Logo fill="#fff"
                    sx={{
                        height: 60,
                        width: 100
                    }} />
            </Box>
            <Box mx={3} mb={2} textAlign="center">
                <Typography
                    color="textSecondary"
                    sx={{
                        size: 1,
                        mt: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                    }}
                    variant="caption">
                    Nos apasiona difundir y brindar herramientas para invertir en tecnologías blockchain
                </Typography>
            </Box>
            <Box textAlign="center">
                {sections.map((section, index) => (
                    <List >
                        {section.links.map((link) => (

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
                        ))}
                    </List>
                ))}
            </Box>
            <Divider
                sx={{
                    borderColor: (theme) => alpha(theme.palette.primary.contrastText, 0.12),
                    my: 1
                }}
            />
            <Box sx={{ mx: 12 }} >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
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
            </Box>
            <Box textAlign="center">
                <Typography
                    color="textSecondary"
                    variant="caption"
                >
                    © Crypto Pro Management {new Date().getFullYear()}.
                </Typography>
            </Box>
        </Container>
    </Box>
);