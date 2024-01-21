import React, { useState } from 'react';
import { Button } from '@mui/material';
import { BaseDivWrappser } from './components/BaseDivWrapper';
import styled from '@emotion/styled';

const App = () => {
    const [someText, setSomeText] = useState<string[]>(['текст']);
  return (
    <>
    <BaseDivWrappser >
        <Button variant="contained" onClick={() =>  setSomeText((prevText) => [...prevText, 'пробный текст'])}>
            Какой то текст
        </Button>
    </BaseDivWrappser>
    <div>
        {someText.map((text) => (
            <div key={text}>{text}</div>
        ))}
    </div>
    </>
  );
}

export default App;

{/* <Button sx={{width:50, height:50}} variant="contained" onClick={() =>  setSomeText((prevText) => [...prevText, 'пробный текст'])}> */}


// const StyledButton = styled(Button)`
//     width: ${((props) => props.sx.width ? props.width : '50px')}
//     height: ${((props) => props.height ? props.height : '50px')}

// `
