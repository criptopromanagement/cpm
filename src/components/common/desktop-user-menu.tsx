import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Drawer, IconButton, Link, Grid, Stack } from '@mui/material';
import PropTypes from 'prop-types'
import { MenuIcon } from '../menu-icon';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface DesktopUserNavbar {
    onClose?: () => void;
    open?: boolean;
}


const LinkWrapper = styled("a")({
    textDecoration: "none",
    "& a:hover": {
        color: "#00FF33"
    }

});

export const DesktopUserNavbar: FC<DesktopUserNavbar> = (props) => {
    const { onClose, open } = props;
    const router = useRouter();

    const handlePathChange = () => {
        if (open) {
            onClose?.();
        }
    };

    useEffect(
        handlePathChange,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    return (
        <Box>
            <IconButton
                color="primary"
                onClick={onClose}

                sx={{
                    marginRight: -1.5,
                }}
            >
                <MenuIcon
                    open={open}
                />
            </IconButton>

            <Drawer
                anchor='right'
                open={open}
                PaperProps={{
                    sx: {
                        width: '100%',
                        backgroundColor: 'background.default',
                        marginTop: "4rem"
                    }
                }}
                variant="temporary"
            >
                <Grid>
                    <Stack
                        spacing={2}
                        marginLeft={3}
                    >

                        <NextLink
                            href="/packs"
                            passHref
                        >
                            <LinkWrapper>
                                <Link
                                    color="textPrimary"
                                    underline="none"
                                >
                                    Índices
                                </Link>
                            </LinkWrapper>
                        </NextLink>

                        <NextLink
                            href="/blog"
                            passHref
                        >
                            <LinkWrapper>
                                <Link
                                    color="textPrimary"
                                    underline="none"
                                >
                                    Blog
                                </Link>
                            </LinkWrapper>
                        </NextLink>

                        <NextLink
                            href="/contacto"
                            passHref
                        >
                            <LinkWrapper>
                                <Link
                                    color="textPrimary"
                                    underline="none"
                                >
                                    Contacto
                                </Link>
                            </LinkWrapper>
                        </NextLink>

                        <NextLink
                            href="/ayuda"
                            passHref
                        >
                            <LinkWrapper>
                                <Link
                                    color="textPrimary"
                                    underline="none"

                                >
                                    Ayuda
                                </Link>
                            </LinkWrapper>
                        </NextLink>

                        <NextLink
                            href="/terminos"
                            passHref
                        >
                            <LinkWrapper>
                                <Link
                                    color="textPrimary"
                                    underline="none"

                                >
                                    Términos
                                </Link>
                            </LinkWrapper>
                        </NextLink>

                    </Stack>
                </Grid>
                <Grid>
                    <Stack
                        direction="row"
                        spacing={3}
                        mt={3}
                        marginLeft={2}
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
            </Drawer>
        </Box>
    );
};

DesktopUserNavbar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};


