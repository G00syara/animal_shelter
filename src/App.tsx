import React from 'react';
import { BaseDivWrapper } from './components/Base';
import styled from '@emotion/styled';
import { Navbar } from './components/Navbar';
import HomePage from './components/MainPage/HomePage';
import { Global, css } from '@emotion/react';

const App = () => {
  return (
    <BaseDivWrapper>
      <AppContentWrapper>
        <Global styles={globalStyles} />
        <Navbar />
        <HomePageContainer>
          <HomePage />
        </HomePageContainer>
      </AppContentWrapper>
    </BaseDivWrapper>
  );
};

export default App;

const AppContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование по горизонтали */
`;

const HomePageContainer = styled.div`
  margin-top: 20px; /* Добавляем отступ сверху */
`;

export const globalStyles = css`
  @font-face {
    font-family: 'Protest Revolution';
    src: url('../fonts/ProtestRevolution-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
