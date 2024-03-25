import React from 'react';
import styled from '@emotion/styled';
import ProjectBlock from './ProjectBlock';
import { LIGHTEN_NAVBAR_COLOR } from 'const/colors';
import { projects } from 'const/elements';

const ProjectPage = () => {
  return (
    <PageWrapper>
      <HeaderText>My Projects</HeaderText>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectBlock key={project.id} stacks={project.stack} />
        ))}
      </ProjectsContainer>
    </PageWrapper>
  );
};

export default ProjectPage;

const PageWrapper = styled.div`
  border-top: 4px solid black;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 0 3%;
  margin: 3% 15%;
`;

const HeaderText = styled.h1`
  text-align: center;
  justify-content: center;
  font-family: 'Protest Revolution', sans-serif;
  align-items: center;
  color: ${LIGHTEN_NAVBAR_COLOR};
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow:
    0 0 5px #959595,
    0 0 10px #959595,
    0 0 15px #959595,
    0 0 20px #959595,
    0 0 25px #959595,
    0 0 30px #959595,
    0 0 35px #959595;
`;
