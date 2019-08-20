import React from 'react';
import styled, { css } from 'styled-components';
import Welcome from './WelcomeMessage';
import './App.css';
import AppLayout from './AppLayout';

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`;

function App() {
  return (
    <AppLayout>
      <Welcome />
    </AppLayout>
  );
}

export default App;
