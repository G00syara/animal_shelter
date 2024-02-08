import { Button } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface NavbarItem {
  children: ReactNode;
}

const NavbarItem: FC<NavbarItem> = ({ children, ...props }) => {
  return (
    <Button sx={{ color: '#fff', fontSize: '2vh' }} {...props}>
      {children}
    </Button>
  );
};

export default NavbarItem;
