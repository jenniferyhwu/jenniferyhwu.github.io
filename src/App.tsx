import React from 'react';
import styled, { Keyframes, keyframes, css } from 'styled-components';
import GlobalStyle from './theme/globalStyles';
import About from './sections/About';
import Navbar from './components/Navbar';
import Work from './sections/Work';
import Links from './sections/Links';
import Background from './components/Background';
import Projects from './sections/Projects';
import Footer from './sections/Footer';


const Container = styled.div`
  background: none;
  min-height: 100vh;
  width: 65vw;
  box-sizing: border-box;
  padding: 8vw 2vw;
  padding-bottom: 3em;

  @media (max-width: 768px) {
    min-width: 100vw;
    padding: 15vw 10vw;
  }
`;

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <WrapperContainer>
      <Background />
      <Container>
        <GlobalStyle />
        <About />
        <Links />
        <Work />
        <Projects />
        <Footer />
      </Container>
    </WrapperContainer>
  );
}

export default App;
