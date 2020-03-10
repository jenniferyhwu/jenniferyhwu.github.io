import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyles';
import About from './sections/About';
import Intro from './sections/Intro';
import Navbar from './components/Navbar';
import Work from './sections/Work';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  padding: 0 15vw;
  padding-bottom: 5em; //temp
  @media (max-width: 768px) {
    padding: 0 10vw;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Intro />
      <About />
      <Work />
    </Container>
  );
}

export default App;
