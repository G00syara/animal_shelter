import styled from '@emotion/styled';
import React from 'react';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <NameText>Alexander Ugarov</NameText>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
`;

const NameText = styled.div`
  text-align: center;
  font-size: 64px;
  font-family: 'Protest Revolution', sans-serif;
`;
