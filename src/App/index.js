import React from 'react';
import styled, { css } from 'styled-components';
import Welcome from './WelcomeMessage';
import './App.css';

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`;

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
