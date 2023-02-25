import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { MainNavbar } from './main-navbar';
import { MainSidebar } from './main-sidebar';
import { Footer } from './footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingTop: 64
  })
);




export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleOpenSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  return (
    <MainLayoutRoot>
      <MainNavbar handleOpenSideBar={handleOpenSideBar} open={isSidebarOpen} />
      <MainSidebar
        onClose={(): void => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
      {children}
      <Footer />
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};
