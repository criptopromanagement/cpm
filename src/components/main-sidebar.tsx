import { useEffect } from 'react';
import type { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Drawer, IconButton, Link, useMediaQuery, } from '@mui/material';
import type { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';


interface MainSidebarProps {
  onClose?: () => void;
  open?: boolean;
}

const MainSidebarLink = styled(Link)(
  ({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    display: 'block',
    padding: theme.spacing(1.5),
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  })
);

export const MainSidebar: FC<MainSidebarProps> = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  const handleClose = () => {
    if (open) {
      onClose?.()
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  return (
    <Drawer
      anchor="top"
      onClose={onClose}
      open={!lgUp && open}
      PaperProps={{
        sx: {
          width: '100%',
          marginTop: 8,
          backgroundColor: 'background.default'
        }
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100
      }}
      variant="temporary"
    >
      <Box sx={{ p: 2 }}>
        <IconButton
          color='primary'
          onClick={handleClose}
        // edge="end"

        // sx={{
        //   display: {
        //     md: 'flex',
        //     alignItems: 'flex-end'
        //   }
        // }}

        >
          <CloseIcon />
        </IconButton>
        <NextLink
          href="/indices"
          passHref
        >
          <MainSidebarLink
            color="textPrimary"
            underline="none"
            variant="subtitle2"
          >
            Índices
          </MainSidebarLink>
        </NextLink>
        <NextLink
          href="/blog"
          passHref
        >
          <MainSidebarLink
            color="textPrimary"
            underline="none"
            variant="subtitle2"
          >
            Blog
          </MainSidebarLink>
        </NextLink>
        <NextLink
          href="/contacto"
          passHref
        >
          <MainSidebarLink
            color="textPrimary"
            underline="none"
            variant="subtitle2"
          >
            Contacto
          </MainSidebarLink>
        </NextLink>
        <NextLink
          href="/ayuda"
          passHref
        >
          <MainSidebarLink
            color="textPrimary"
            underline="none"
            variant="subtitle2"
          >
            Ayuda
          </MainSidebarLink>
        </NextLink>
        <NextLink
          href="/terminos"
          passHref
        >
          <MainSidebarLink
            color="textPrimary"
            underline="none"
            variant="subtitle2"
          >
            Términos
          </MainSidebarLink>
        </NextLink>
        <Button
          component="a"
          fullWidth
          href="/register"
          sx={{ mt: 15 }}
          variant="contained"
        >
          Registrate
        </Button>

        <Button
          component="a"
          fullWidth
          href="/login"
          sx={{ mt: 1.5 }}
          variant="outlined"
        >
          Inicia sesión
        </Button>
      </Box>
    </Drawer >
  );
};

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
