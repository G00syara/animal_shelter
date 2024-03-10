import styled from '@emotion/styled';
import React, { FC } from 'react';
import projectPicture from 'images/projectPicture.jpg';

interface ProjectBlockProps {
  stacks: string[];
  link?: string;
  title?: string;
}

const ProjectBlock: FC<ProjectBlockProps> = ({ stacks }) => {
  return (
    <ProjectBlockStyled>
      <StacksBlock>
        {stacks.map((stack, index) => (
          <Stack key={index}>{stack}</Stack>
        ))}
      </StacksBlock>
    </ProjectBlockStyled>
  );
};

export default ProjectBlock;

const ProjectBlockStyled = styled.div`
  background-image: url(${projectPicture});
  display: flex;
  border: 3px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  transition: transform 0.3s ease;
  flex-direction: column;
  min-height: 250px;
  padding: 5%;
  &:hover {
    transform: translateY(-10px);
    div {
      opacity: 1;
      pointer-events: auto;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  h2 {
    margin-bottom: 8px;
  }
`;

const StacksBlock = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  gap: 4%;
  padding-bottom: 15px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: auto;
`;

const Stack = styled.div`
  font-size: 24px;
  font-family: 'Protest Revolution', sans-serif;
  text-align: center;
  padding: 5px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  background-color: white;
  border-radius: 45%;
  cursor: default;
`;
