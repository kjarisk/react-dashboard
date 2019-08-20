import React from 'react';
import styled, { css } from 'styled-components';
import Welcome from './WelcomeMessage';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`;

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Welcome />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
