import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react'; // Используем @emotion/react для импорта keyframes

import React, { useState } from 'react';
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
import BackgroundImage from './BackgroundImage';

const shakeAnimation = keyframes`
  0% { transform: translateX(-3px); }
  25% { transform: translateX(3px); }
  50% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
  100% { transform: translateX(0px); }
`;

const shakeAnimationCss = css`
  ${shakeAnimation} 1s ease-in-out
`;

const toolData = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Redux', icon: SiRedux },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Styled', icon: SiStyledcomponents },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'React', icon: SiReact },
  { name: 'Docker', icon: SiDocker },
  { name: 'Sequelize', icon: SiSequelize },
];

const AboutPage = () => {
  const [hoveredItems, setHoveredItems] = useState<boolean[]>(Array(toolData.length).fill(false));

  const handleMouseEnter = (index: number) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[index] = true;
    setHoveredItems(updatedHoveredItems);
  };

  const handleMouseLeave = (index: number) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[index] = false;
    setHoveredItems(updatedHoveredItems);
  };

  return (
    <PageContainer>
      <SomeDiv>
        <BackgroundImage />
        <ToolContainer>
          <Row>
            {toolData.slice(0, 5).map((tool, index) => (
              <Tool
                key={tool.name}
                className={hoveredItems[index] ? 'hovered' : ''}
                onMouseEnter={() => handleMouseEnter(index)}
                onAnimationEnd={() => handleMouseLeave(index)}
              >
                <tool.icon size={30} />
                <ToolText>{tool.name}</ToolText>
              </Tool>
            ))}
          </Row>
          <Row>
            {toolData.slice(5, 9).map((tool, index) => (
              <Tool
                key={tool.name}
                className={hoveredItems[index + 5] ? 'hovered' : ''}
                onMouseEnter={() => handleMouseEnter(index + 5)}
                onAnimationEnd={() => handleMouseLeave(index + 5)}
              >
                <tool.icon size={30} />
                <ToolText>{tool.name}</ToolText>
              </Tool>
            ))}
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
  position: relative;
  z-index: 2;
`;

const SomeDiv = styled.div`
  width: 50%;
  background-color: transparent;
`;

const ToolContainer = styled.div`
  background-color: #959595;
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

  &.hovered {
    color: #ff7f00;
    animation: ${shakeAnimationCss};
  }
`;

const ToolText = styled.div`
  margin-left: 10px;
  cursor: default;
`;
