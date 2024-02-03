import { Button } from '@mui/material';
import React from 'react';

const HomeLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Home</Button>;

const AboutLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>About</Button>;

const ContactLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Contact</Button>;

const PhotoLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>PhotoLink</Button>;

const NavbarList = () => {
  return (
    <>
      <HomeLink />
      <AboutLink />
      <ContactLink />
    </>
  );
};

export default NavbarList;
