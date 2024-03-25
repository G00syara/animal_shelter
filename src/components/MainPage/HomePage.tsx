import styled from '@emotion/styled';
import React from 'react';
import { BACKGROUND_BEFORE_HOME_PAGE_COLOR, LIGHTEN_NAVBAR_COLOR, TEXT_COLOR } from 'const/colors';
import ImageForHomePage from 'images/Generate_russian_man_white_people_programmer_with_Laptop_sideways_on_table_light_orange_color_3033283596.png';
import { CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '25%',
    border: '5px solid black',
    animation: '$scaleAnimation 3s infinite',
  },
  '@keyframes scaleAnimation ': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <HomePageWrapper>
      <BaseWrapper>
        <Background>
          <IntroduceText>Hi! I'm Alexander Ugarov</IntroduceText>
        </Background>
        <SecondText>
          <SText>F</SText>
          <SText>r</SText>
          <SText>o</SText>
          <SText>n</SText>
          <SText>t</SText>
          <SText>e</SText>
          <SText>n</SText>
          <SText>d </SText> and <SText>B</SText>
          <SText>a</SText>
          <SText>c</SText>
          <SText>k</SText>
          <SText>e</SText>
          <SText>n</SText>
          <SText>d</SText> Developer. Help <SText>p</SText>
          <SText>e</SText>
          <SText>o</SText>
          <SText>p</SText>
          <SText>l</SText>
          <SText>e</SText> realise your wildest <SText>d</SText>
          <SText>r</SText>
          <SText>e</SText>
          <SText>a</SText>
          <SText>m</SText>
          <SText>s</SText>
        </SecondText>
      </BaseWrapper>
      <ImgDiv>
        <CardMedia className={classes.card} component="img" image={ImageForHomePage} />
      </ImgDiv>
    </HomePageWrapper>
  );
};

export default HomePage;

const ImgDiv = styled.div`
  @media (max-width: 1024px) {
    width: 450px;
    height: 450px;
    padding-bottom: 25px;
  }
`;

const HomePageWrapper = styled.div`
  margin-left: 40px;
  display: flex;
  float: left;
  justify-content: space-around;
  align-items: center;
  width: 95vw;
  height: 70vh;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

const IntroduceText = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: 'Protest Revolution', sans-serif;
  font-weight: 900
  border-radius: 25px;
  padding: 12px;
  color: ${TEXT_COLOR};
  text-shadow:
    -4px -1px 0 black,
    1px -1px 0 black,
    -4px 2px 0 black,
    1px 1px 0 black;
`;

const Background = styled.div`
  max-width: 450px;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 45px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  line-height: 28px;
  transform: rotate(-2deg);
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease-in;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: ${BACKGROUND_BEFORE_HOME_PAGE_COLOR};
    opacity: 0.25;
  }
  :hover {
    transform: translateY(-10px) rotate(1deg);
    box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  }
`;

const BaseWrapper = styled.div`
  text-align: start;
`;

const SecondText = styled.h2`
  cursor: default;
  max-width: 800px;
  font-size: 54px;
  font-family: 'Protest Revolution', sans-serif;
`;

const SText = styled.span`
  color: ${BACKGROUND_BEFORE_HOME_PAGE_COLOR};
  transition: 0.2s;
  top: 0;
  position: relative;
  :hover {
    top: -10px;
    color: ${LIGHTEN_NAVBAR_COLOR};
  }
  :hover::before {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
