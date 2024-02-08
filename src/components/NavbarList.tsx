import { Button, CardMedia } from '@mui/material';
import ImageForNavbar from '../images/imageForNavbar.png';

import { makeStyles } from '@mui/styles';
import NavbarItem from './NavbarItem';

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: '8vh',
    maxWidth: '65px',
    borderRadius: '50%',
    border: '3px solid black',
    animation: '$rotateColors 5s linear infinite', // Adding an animation for continuous color rotation
  },
  '@keyframes rotateColors': {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: 'hue-rotate(360deg)',
    },
  },
}));

const NavbarList = () => {
  const navbarItems = ['Projects', 'Blogs', 'Home', 'About', 'Contact'];

  const classes = useStyles();

  return (
    <>
      {navbarItems.map((item) => (
        <NavbarItem key={item}>{item}</NavbarItem>
      ))}

      <CardMedia className={classes.card} component="img" image={ImageForNavbar} />
    </>
  );
};

export default NavbarList;
