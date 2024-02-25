import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; // Используем @emotion/react для импорта keyframes

import React from 'react';
import {
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiStyledcomponents,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiSequelize,
} from 'react-icons/si';

const shakeAnimation = keyframes`
  0% { transform: translateX(-3px); }
  25% { transform: translateX(3px); }
  50% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
  100% { transform: translateX(0px); }
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <SomeDiv>
        <ToolContainer>
          <Row>
            <Tool>
              <SiTypescript size={30} />
              <ToolText>TypeScript</ToolText>
            </Tool>
            <Tool>
              <SiRedux size={30} />
              <ToolText>Redux</ToolText>
            </Tool>
            <Tool>
              <SiNodedotjs size={30} />
              <ToolText>Node</ToolText>
            </Tool>
            <Tool>
              <SiMongodb size={30} />
              <ToolText>MongoDB</ToolText>
            </Tool>
            <Tool>
              <SiStyledcomponents size={30} />
              <ToolText>Styled</ToolText>
            </Tool>
          </Row>
          <Row>
            <Tool>
              <SiPostgresql size={30} />
              <ToolText>PostgreSQL</ToolText>
            </Tool>
            <Tool>
              <SiReact size={30} />
              <ToolText>React</ToolText>
            </Tool>
            <Tool>
              <SiDocker size={30} />
              <ToolText>Docker</ToolText>
            </Tool>
            <Tool>
              <SiSequelize size={30} />
              <ToolText>Sequelize</ToolText>
            </Tool>
          </Row>
        </ToolContainer>
      </SomeDiv>
    </PageContainer>
  );
};

export default AboutPage;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
`;

const SomeDiv = styled.div`
  width: 50%;
  background-color: #bb6a0e;
`;

const ToolContainer = styled.div`
  background-color: #bababa;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.5mm ridge #969696;
  border-radius: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Tool = styled.div`
  font-size: 20px;
  padding: 10px;
  color: white;
  background-color: #302112;
  display: flex;
  margin: 10px;
  width: 150px;
  align-items: center;
  border-radius: 10px;
  box-shadow:
    0px 3px 5px rgba(0, 0, 0, 0.3),
    0px 1px 2px rgba(0, 0, 0, 0.5),
    inset 0px 0px 3px rgba(255, 255, 255, 0.2);
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #ff7f00;
    animation: ${shakeAnimation} 1s ease-in-out;
  }
`;

const ToolText = styled.div`
  margin-left: 10px;
  cursor: default;
`;
