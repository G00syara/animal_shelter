import styled from '@emotion/styled';
import { FC } from 'react';
import { MAIN_COLOR } from '../const/colors';

interface BaseDivWrapperProps {
  children?: React.ReactElement;
}

export const BaseDivWrapper: FC<BaseDivWrapperProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export const BaseWrapper: FC<BaseDivWrapperProps> = ({ children }) => {
  return <BaseDiv>{children}</BaseDiv>;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${MAIN_COLOR};
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
`;

const BaseDiv = styled.div`
  display: flex;
  padding: 22px;
  margin: 22px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: gray;
`;
