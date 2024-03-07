import React from 'react';
import { BaseDivWrapper } from './components/Base';
import styled from '@emotion/styled';
import { Navbar } from './components/Navbar';
import { Global, css } from '@emotion/react';
import AboutPage from 'components/AboutPage/AboutPage';
import HomePage from 'components/MainPage/HomePage';
import ProjectPage from 'components/ProjectPage/ProjectPage';
import { DARKEST_MAIN_COLOR, LIGHTEN_NAVBAR_COLOR } from 'const/colors';

const App = () => {
  return (
    <BaseDivWrapper>
      <AppContentWrapper>
        <Global styles={globalStyles} />
        <Navbar />
        <HomePageContainer>
          <HomePage />
        </HomePageContainer>
        <AboutPageContainer>
          <AboutPage />
        </AboutPageContainer>
        <ProjectsContainer>
          <ProjectPage />
        </ProjectsContainer>
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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AboutPageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const HomePageContainer = styled.div`
  margin-top: 20px;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  animation: colorChange 3s infinite alternate;
  @keyframes colorChange {
    0% {
      background-color: ${DARKEST_MAIN_COLOR};
    }
    100% {
      background-color: ${LIGHTEN_NAVBAR_COLOR};
    }
  }
`;

export const globalStyles = css`
  @font-face {
    font-family: 'Protest Revolution';
    src: url('../fonts/ProtestRevolution-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
