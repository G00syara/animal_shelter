import React from 'react';
import { BaseDivWrapper } from './components/Base';
import styled from '@emotion/styled';
import { Navbar } from './components/Navbar';
import { Global, css } from '@emotion/react';
import AboutPage from 'components/AboutPage/AboutPage';
import HomePage from 'components/MainPage/HomePage';
import ProjectPage from 'components/ProjectPage/ProjectPage';
import { DARKEST_MAIN_COLOR, LIGHTEN_NAVBAR_COLOR, MAIN_COLOR } from 'const/colors';
import BlogPage from 'components/BlogPage/BlogPage';
import ContactsPage from 'components/ContactsPage/ContactsPage';
import Footer from 'components/Footer/Footer';

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
        <BlogPageContainer>
          <BlogPage />
        </BlogPageContainer>
        <Triangle />
        <ContactsPageContainer>
          <ContactsPage />
        </ContactsPageContainer>
        <Footer />
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
const ContactsPageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const BlogPageContainer = styled.div`
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

const Triangle = styled.div`
  background-color: #a0a0a0;
  border-bottom: 100px solid ${MAIN_COLOR};
  border-left: 50vw solid rgba(0, 0, 0, 0);
  border-right: 50vw solid rgba(0, 0, 0, 0);
  height: 0;
  width: 0;
  transform: rotate(180deg);
`;
