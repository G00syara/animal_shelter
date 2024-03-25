import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import React, { useState } from 'react';

import BackgroundImage from './BackgroundImage';
import {
  ABOUT_PAGE_TOOL_BACKGROUND_COLOR,
  HOVEREDTOOL_COLOR,
  TOOLCONTAINER_BACKGROUND_COLOR,
  TOOLCONTAINER_BORDER_COLOR,
  WHITE_COLOR,
} from 'const/colors';
import { toolData } from 'const/elements';

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

const MyCompetitionsPage = () => {
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
          <HeaderTextContainer>
            <HeaderTextWrapper>
              <HeaderText>My Competitions</HeaderText>
              <HeaderText>My Competitions</HeaderText>
            </HeaderTextWrapper>
          </HeaderTextContainer>
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

export default MyCompetitionsPage;

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
  background-color: ${TOOLCONTAINER_BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.5mm ridge ${TOOLCONTAINER_BORDER_COLOR};
  border-radius: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

const Tool = styled.div`
  font-size: 20px;
  padding: 10px;
  color: ${WHITE_COLOR};
  background-color: ${ABOUT_PAGE_TOOL_BACKGROUND_COLOR};
  display: flex;
  margin: 10px;
  width: 145px;
  align-items: center;
  border-radius: 10px;
  box-shadow:
    0px 3px 5px rgba(0, 0, 0, 0.3),
    0px 1px 2px rgba(0, 0, 0, 0.5),
    inset 0px 0px 3px rgba(255, 255, 255, 0.2);
  transition: color 0.5s ease-in-out;

  &.hovered {
    color: ${HOVEREDTOOL_COLOR};
    animation: ${shakeAnimationCss};
  }
`;

const ToolText = styled.div`
  margin-left: 10px;
  cursor: default;
`;

const HeaderTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: auto;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: ticker 4s linear infinite;
  @keyframes ticker {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const HeaderText = styled.h1`
  color: ${TOOLCONTAINER_BORDER_COLOR};
  margin-left: 120px;
  white-space: nowrap;
  width: 100%;
  font-size: 36px;
  font-family: 'Protest Revolution', sans-serif;
  animation: color-change 5s infinite;
  text-shadow:
    1px 3px 3px red,
    0 0 1em blue,
    0 0 0.2em blue;
  @keyframes color-change {
    0% {
      color: #ff9900;
    }
    25% {
      color: #b87e14;
    }
    50% {
      color: #005aff;
    }
    75% {
      color: #144eb8;
    }
    100% {
      color: #ff9900;
    }
  }
`;
