import { Button, CardMedia } from '@mui/material';
import ImageForNavbar from '../images/imageForNavbar.png';

import { makeStyles } from '@mui/styles';

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

const Projects = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Projects</Button>;

const Blogs = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Blogs</Button>;

const HomeLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Home</Button>;

const AboutLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>About</Button>;

const ContactLink = () => <Button sx={{ color: '#fff', fontSize: '2vh' }}>Contact</Button>;

const NavbarList = () => {
  const classes = useStyles();

  return (
    <>
      <HomeLink />
      <AboutLink />
      <CardMedia className={classes.card} component="img" image={ImageForNavbar} />
      <Blogs />
      <Projects />
      <ContactLink />
    </>
  );
};

export default NavbarList;
