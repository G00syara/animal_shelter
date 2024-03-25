import styled from '@emotion/styled';
import { BACKGROUND_COLOR_BUTTON, BACKGROUND_COLOR_BUTTON_HOVER, WHITE_COLOR } from 'const/colors';

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${BACKGROUND_COLOR_BUTTON};
  color: ${WHITE_COLOR};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${BACKGROUND_COLOR_BUTTON_HOVER};
  }
`;
