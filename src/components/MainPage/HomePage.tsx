import styled from '@emotion/styled';
import React from 'react';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <BaseWrapper>
        <Background>
          <IntroduceText>Hi! I'm Alexander Ugarov</IntroduceText>
        </Background>
        <SecondText>
          <WhiteSpan>Frontend</WhiteSpan> and <WhiteSpan>Backend</WhiteSpan> Developer. Help
          <WhiteSpan> people</WhiteSpan> realise their wildest <WhiteSpan>dreams</WhiteSpan>
        </SecondText>
      </BaseWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  margin-left: 40px;
  display: flex;
  float: left;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 70vh;
`;

const IntroduceText = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: 'Protest Revolution', sans-serif;
  font-weight: 900
  border-radius: 25px;
  padding: 12px;
  color: #ef952e;
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
    background-color: #eae1df;
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
  max-width: 800px;
  font-size: 54px;
  font-family: 'Protest Revolution', sans-serif;
`;

const WhiteSpan = styled.span`
  color: #eae1df;
`;
