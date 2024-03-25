import { Button } from '@mui/material';
import { WHITE_COLOR } from 'const/colors';
import React, { FC, ReactNode } from 'react';

interface NavbarItem {
  children: ReactNode;
}

const NavbarItem: FC<NavbarItem> = ({ children, ...props }) => {
  return (
    <Button sx={{ color: `${WHITE_COLOR}`, fontSize: '2vh' }} {...props}>
      {children}
    </Button>
  );
};

export default NavbarItem;
