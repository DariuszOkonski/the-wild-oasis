import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Check In')}>Check in</Button>
        <Button onClick={() => alert('Check Out')}>Check out</Button>

        <Input type='number' placeholder='Number of guests...' />
        <Input type='number' placeholder='Number of guests...' />
      </StyledApp>
    </React.Fragment>
  );
}

export default App;
