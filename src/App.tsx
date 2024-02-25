import React from 'react';
import { BaseDivWrapper } from './components/Base';
import styled from '@emotion/styled';
import { Navbar } from './components/Navbar';
import { Global, css } from '@emotion/react';
import AboutPage from './components/AboutPage/AboutPage';

const App = () => {
  return (
    <BaseDivWrapper>
      <AppContentWrapper>
        <Global styles={globalStyles} />
        <Navbar />
        <CSS>
          <CSS>Something</CSS> {/* Применяем стили к этому элементу */}
        </CSS>
        <Line />
        <AboutPageContainer>
          <AboutPage />
        </AboutPageContainer>
      </AppContentWrapper>
    </BaseDivWrapper>
  );
};

export default App;

const AppContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 100vh;
`;

const Line = styled.hr`
  width: 100%;
  height: 2vh;
  border: none;
  border-top: 15px solid black;
  margin-top: 20px;
`;

const AboutPageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const globalStyles = css`
  @font-face {
    font-family: 'Protest Revolution';
    src: url('../fonts/ProtestRevolution-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const CSS = styled.div`
  height: 500px;
`;
