import React, { useEffect, useState } from 'react';
import { BaseDivWrapper } from './components/Base';
import styled from '@emotion/styled';
import { Navbar } from './components/Navbar';
import { Global, css } from '@emotion/react';
import MyCompetitionsPage from 'components/MyCompetitionsPage/MyCompetitionsPage';
import HomePage from 'components/MainPage/HomePage';
import ProjectPage from 'components/ProjectPage/ProjectPage';
import { DARKEST_MAIN_COLOR, LIGHTEN_NAVBAR_COLOR, MAIN_COLOR, TRIANGLE_COLOR } from 'const/colors';
import BlogPage from 'components/BlogPage/BlogPage';
import ContactsPage from 'components/ContactsPage/ContactsPage';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader';

const App = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoad(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <BaseDivWrapper>
      <AppContentWrapper>
        {isLoad ? (
          <>
            <Global styles={globalStyles} />
            <Navbar />
            <HomePageContainer>
              <HomePage />
            </HomePageContainer>
            <MyCompetitionsPageContainer>
              <MyCompetitionsPage />
            </MyCompetitionsPageContainer>
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
          </>
        ) : (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
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

const MyCompetitionsPageContainer = styled.div`
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
  background-color: ${TRIANGLE_COLOR};
  border-bottom: 100px solid ${MAIN_COLOR};
  border-left: 50vw solid rgba(0, 0, 0, 0);
  border-right: 50vw solid rgba(0, 0, 0, 0);
  height: 0;
  width: 0;
  transform: rotate(180deg);
`;

const LoaderWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #262626;
  background: black;
  z-index: 9999;
  position: fixed;
`;
