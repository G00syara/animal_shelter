import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { DARKEST_MAIN_COLOR, UNDER_NAVBAR_COLOR } from '../const/colors';
import NavbarList from './NavbarList';

const HomeLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Home</Button>;

const AboutLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>About</Button>;

const ContactLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Contact</Button>;

export const Navbar = () => {
  return (
    <StyledNavbar>
      {/* <CssBaseline /> */}
      <StyledAppBar>
        <BaseWrapper>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <NavbarList />
          </Box>
        </BaseWrapper>
      </StyledAppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${DARKEST_MAIN_COLOR}; /* устанавливаем фон как прозрачный */
  border-bottom: 3px solid ${UNDER_NAVBAR_COLOR};
  height: 8vh;
`;

const BaseWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
