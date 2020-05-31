import React from 'react';
import {styled} from '@material-ui/core';

const Wrapper = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

function App() {
  return (
    <Wrapper>
      <div>email</div>
      <div>password</div>
      <div>submit</div>
    </Wrapper>
  );
}

export default App;
