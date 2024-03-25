import styled from '@emotion/styled';
import { BLACK_COLOR } from 'const/colors';
import gifBackgroundAboutMe from 'images/gifBackgroundMyCompetitionsPage.gif';
import { useState } from 'react';

interface CursorTrailProps {
  x: number | null;
  y: number | null;
}

const BackgroundImage = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorTrailProps>({ x: null, y: null });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  const handleMouseLeave = () => {
    setCursorPosition({ x: null, y: null });
  };

  return (
    <BackgroundContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {cursorPosition.x !== null && cursorPosition.y !== null && (
        <CursorTrail x={cursorPosition.x} y={cursorPosition.y} />
      )}
      <Image src={gifBackgroundAboutMe} alt="Background" />
    </BackgroundContainer>
  );
};

export default BackgroundImage;

const BackgroundContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  filter: blur(4px) hue-rotate(4.642rad);
  border-top: 8px solid ${BLACK_COLOR};
`;

const CursorTrail = styled.div<CursorTrailProps>`
  width: 120px;
  height: 120px;
  position: fixed;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0) 70%);
  z-index: 9999;
  transform: translate(-50%, -50%);
`;
