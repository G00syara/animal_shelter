import React, { useState } from 'react';
import { Button } from '@mui/material';
import { BaseDivWrapper, BaseWrapper } from './components/Base';
import styled from '@emotion/styled';
import { Navbar } from './components/Navbar';

const App = () => {
  const [someText, setSomeText] = useState<string[]>(['текст']);
  return (
    <BaseDivWrapper>
      <div>
        <Navbar />
        <BaseWrapper>
          <Button variant="contained" onClick={() => setSomeText((prevText) => [...prevText, 'пробный текст'])}>
            Какой то текст
          </Button>
        </BaseWrapper>
        <div>
          {someText.map((text) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      </div>
    </BaseDivWrapper>
  );
};

export default App;

{
  /* <Button sx={{width:50, height:50}} variant="contined" onClick={() =>  setSomeText((prevText) => [...prevText, 'пробный текст'])}> */
}

// const StyledButton = styled(Button)`
//     width: ${((props) => props.sx.width ? props.width : '50px')}
//     height: ${((props) => props.height ? props.height : '50px')}

// `
